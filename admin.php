<?php
define('ADMIN_USERNAME', '4ucentreapartments');
define('ADMIN_PASSWORD', '4u.CentreA99');
define('DATA_FILE', __DIR__ . '/4u_bookings_data.json');
session_start();

// AJAX login check from kalendarc.htm
if ($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['login']) && !isset($_POST['_full'])) {
    $u=trim($_POST['username']??''); $p=trim($_POST['password']??'');
    echo ($u===ADMIN_USERNAME && $p===ADMIN_PASSWORD) ? '4U_ADMIN_OK' : '4U_ADMIN_FAIL';
    exit;
}
// Full form login
$loginError=false;
if ($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['login'])) {
    $u=trim($_POST['username']??''); $p=trim($_POST['password']??'');
    if ($u===ADMIN_USERNAME && $p===ADMIN_PASSWORD) { $_SESSION['4u_admin_logged']=true; header('Location: admin.php'); exit; }
    else $loginError=true;
}
if (isset($_GET['logout'])) { session_destroy(); header('Location: admin.php'); exit; }

// API
if (!empty($_GET['api'])) {
    header('Content-Type: application/json; charset=utf-8');
    if (empty($_SESSION['4u_admin_logged'])) { echo json_encode(['error'=>'Neprihlaseno']); exit; }
    $action=$_GET['api'];
    if ($action==='load') { echo json_encode(loadData()); exit; }
    if ($action==='save') {
        $b=json_decode(file_get_contents('php://input'),true);
        $d=loadData();
        if(isset($b['manualDates']))$d['manualDates']=$b['manualDates'];
        if(isset($b['icalUrls']))$d['icalUrls']=$b['icalUrls'];
        if(isset($b['publicDates']))$d['publicDates']=$b['publicDates'];
        $d['lastSync']=date('Y-m-d H:i:s');
        saveData($d); echo json_encode(['ok'=>true,'lastSync'=>$d['lastSync']]); exit;
    }
    if ($action==='fetch_ical') {
        $url=trim($_GET['url']??'');
        if(!$url){echo json_encode(['error'=>'Chybi URL']);exit;}
        $allowed=['ical.booking.com','www.booking.com','booking.com','airbnb.com','www.airbnb.com','www.airbnb.co.uk','www.airbnb.cz','calendar.google.com'];
        $host=strtolower(parse_url($url,PHP_URL_HOST)); $ok=false;
        foreach($allowed as $dm){if($host===$dm||substr($host,-(strlen($dm)+1))==='.'.$dm){$ok=true;break;}}
        if(!$ok){echo json_encode(['error'=>'Nedovolena domena: '.$host]);exit;}
        $ctx=stream_context_create(['http'=>['timeout'=>12,'user_agent'=>'Mozilla/5.0 (compatible; 4UCentreCalendar/1.0)','header'=>"Accept: text/calendar\r\n"]]);
        $ics=@file_get_contents($url,false,$ctx);
        if($ics===false){echo json_encode(['error'=>'Nepodarilo se nacist ICS']);exit;}
        echo json_encode(['dates'=>parseICS($ics),'source'=>$host]); exit;
    }
    if ($action==='export') {
        $apt=strtoupper($_GET['apt']??'A');
        $input=json_decode(file_get_contents('php://input'),true);
        $dates=$input['dates']??[];
        header('Content-Type: text/calendar; charset=utf-8');
        header('Content-Disposition: attachment; filename="4u-centre-apt'.$apt.'.ics"');
        echo "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//4U Centre Apartments//CS\r\n";
        echo "X-WR-CALNAME:4U Centre Apartman $apt\r\nX-WR-TIMEZONE:Europe/Prague\r\n";
        foreach($dates as $d){
            if(!preg_match('/^\d{4}-\d{2}-\d{2}$/',$d))continue;
            $dt=str_replace('-','',$d); $next=date('Ymd',strtotime($d.' +1 day'));
            echo "BEGIN:VEVENT\r\nUID:4u-apt{$apt}-{$dt}@4ucentre.cz\r\nDTSTART;VALUE=DATE:{$dt}\r\nDTEND;VALUE=DATE:{$next}\r\nSUMMARY:Obsazeno - Apartman $apt\r\nEND:VEVENT\r\n";
        }
        echo "END:VCALENDAR\r\n"; exit;
    }
    echo json_encode(['error'=>'Neznama akce']); exit;
}
// Public dates for customer page
if (isset($_GET['public_dates'])) {
    header('Content-Type: application/json; charset=utf-8');
    $d=loadData(); echo json_encode($d['publicDates']??['A'=>[],'B'=>[]]); exit;
}
function loadData():array {
    if(!file_exists(DATA_FILE))return['manualDates'=>['A'=>[],'B'=>[]],'icalUrls'=>['A'=>['booking'=>'','airbnb'=>''],'B'=>['booking'=>'','airbnb'=>'']],'publicDates'=>['A'=>[],'B'=>[]],'lastSync'=>null];
    return json_decode(file_get_contents(DATA_FILE),true)??[];
}
function saveData(array $d):void { file_put_contents(DATA_FILE,json_encode($d,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE)); }
function parseICS(string $ics):array {
    $dates=[];$inEvent=false;$dtStart=$dtEnd=null;
    foreach(explode("\n",str_replace("\r\n","\n",$ics))as $line){
        $line=trim($line);
        if($line==='BEGIN:VEVENT'){$inEvent=true;$dtStart=$dtEnd=null;continue;}
        if($line==='END:VEVENT'){
            if($dtStart&&$dtEnd){$cur=strtotime($dtStart);$end=strtotime($dtEnd);while($cur<$end){$dates[]=date('Y-m-d',$cur);$cur=strtotime('+1 day',$cur);}}
            elseif($dtStart)$dates[]=$dtStart;
            $inEvent=false;continue;
        }
        if(!$inEvent)continue;
        if(strpos($line,'DTSTART')===0)$dtStart=extractDate($line);
        if(strpos($line,'DTEND')===0)$dtEnd=extractDate($line);
    }
    return array_values(array_unique($dates));
}
function extractDate(string $line):?string {
    if(preg_match('/(\d{8})/',$line,$m))return substr($m[1],0,4).'-'.substr($m[1],4,2).'-'.substr($m[1],6,2);
    return null;
}
$loggedIn=!empty($_SESSION['4u_admin_logged']);
?>
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin | 4U Centre Apartments</title>
    <meta name="robots" content="noindex, nofollow">
    <style>
        *{margin:0;padding:0;box-sizing:border-box;}
        :root{--gold:#b8860b;--gold-l:#d4af37;--pale:rgba(184,134,11,0.12);--dark:#1a1a1a;--dark2:#2d2d2d;--bg:#f4f1ec;--w:#fff;--border:rgba(184,134,11,0.25);--muted:#888;--red:#c0392b;--green:#2e7d32;}
        body{font-family:'Georgia',serif;background:var(--bg);color:#1a1a1a;min-height:100vh;}
        .topbar{background:var(--dark);border-bottom:2px solid var(--gold);padding:0 28px;height:58px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:200;}
        .tb-brand{display:flex;align-items:center;gap:12px;}
        .tb-brand strong{font-size:.95rem;letter-spacing:.08em;color:var(--gold-l);}
        .tb-badge{font-size:.6rem;background:var(--gold);color:#fff;padding:2px 8px;letter-spacing:.12em;font-weight:700;}
        .tb-nav{display:flex;align-items:center;gap:20px;}
        .tb-nav a{font-size:.72rem;color:#aaa;text-decoration:none;letter-spacing:.06em;transition:color .2s;}
        .tb-nav a:hover{color:var(--gold-l);}
        .tb-nav .sep{color:#444;}
        /* LOGIN */
        .lp{display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 58px);padding:40px 20px;}
        .lcard{background:var(--w);border:1px solid var(--border);border-radius:4px;padding:52px 48px;width:100%;max-width:420px;box-shadow:0 8px 48px rgba(0,0,0,.12);text-align:center;}
        .lcard .icon{font-size:3rem;margin-bottom:18px;}
        .lcard h1{font-size:1.6rem;color:#7a5c00;margin-bottom:6px;font-weight:600;}
        .lcard p{font-size:.82rem;color:var(--muted);margin-bottom:32px;font-style:italic;}
        .lfield{text-align:left;margin-bottom:16px;}
        .lfield label{display:block;font-size:.7rem;font-weight:700;color:#555;letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px;}
        .lfield input{width:100%;padding:12px 16px;border:1px solid #ddd;border-radius:2px;font-size:.95rem;background:#fafafa;transition:.2s;}
        .lfield input:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 2px var(--pale);background:#fff;}
        .lbtn{width:100%;padding:14px;background:var(--gold);color:#fff;border:none;border-radius:2px;font-size:.9rem;font-weight:700;letter-spacing:.1em;cursor:pointer;margin-top:8px;transition:.2s;}
        .lbtn:hover{background:#9a6e0a;}
        .lerr{background:rgba(244,67,54,.1);border:1px solid #ef9a9a;color:#c62828;padding:10px;border-radius:2px;font-size:.8rem;margin-bottom:16px;}
        /* LAYOUT */
        .wrap{max-width:1260px;margin:0 auto;padding:36px 28px 70px;}
        .phd h1{font-size:1.9rem;color:#7a5c00;font-weight:600;margin-bottom:6px;}
        .phd p{font-size:.85rem;color:var(--muted);font-style:italic;border-left:3px solid var(--gold);padding-left:14px;margin-bottom:32px;}
        /* STATS */
        .stats{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:32px;}
        .stat{background:var(--w);border:1px solid var(--border);border-radius:4px;padding:18px 24px;flex:1;min-width:130px;text-align:center;}
        .stat .num{font-size:2.2rem;font-weight:700;color:var(--gold);line-height:1;}
        .stat .lbl{font-size:.68rem;color:var(--muted);margin-top:6px;letter-spacing:.07em;text-transform:uppercase;}
        /* SEKCE */
        .sec{background:var(--w);border:1px solid var(--border);border-radius:4px;padding:28px 26px;box-shadow:0 2px 14px rgba(0,0,0,.06);margin-bottom:28px;}
        .shd{font-size:1.1rem;color:#7a5c00;font-weight:600;margin-bottom:6px;}
        .ssub{font-size:.78rem;color:var(--muted);margin-bottom:20px;font-style:italic;}
        .g2{display:grid;grid-template-columns:1fr 1fr;gap:28px;}
        @media(max-width:820px){.g2{grid-template-columns:1fr;}}
        /* TABS */
        .atabs{display:flex;border:1px solid var(--border);width:fit-content;margin-bottom:18px;}
        .atab{padding:9px 30px;border:none;background:transparent;font-size:.82rem;font-weight:700;cursor:pointer;color:var(--muted);transition:.2s;letter-spacing:.04em;font-family:Georgia,serif;}
        .atab.active{background:var(--gold);color:#fff;}
        .atab:hover:not(.active){background:var(--pale);color:#7a5c00;}
        /* URL */
        .ulbl{font-size:.7rem;font-weight:700;color:#555;letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;margin-top:14px;}
        .urow{display:flex;gap:8px;margin-bottom:4px;}
        .urow input{flex:1;padding:9px 13px;border:1px solid #ddd;border-radius:2px;font-size:.78rem;font-family:monospace;background:#fafafa;}
        .urow input:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 2px var(--pale);}
        /* TLACITKA */
        .btn{display:inline-flex;align-items:center;gap:6px;padding:9px 18px;border:none;border-radius:2px;font-size:.78rem;font-weight:700;letter-spacing:.06em;cursor:pointer;transition:.2s;white-space:nowrap;font-family:Georgia,serif;}
        .bg{background:var(--gold);color:#fff;}.bg:hover{background:#9a6e0a;}
        .bd{background:var(--dark2);color:#fff;}.bd:hover{background:var(--dark);}
        .br{background:var(--red);color:#fff;}.br:hover{background:#a93226;}
        .bge{background:var(--green);color:#fff;}.bge:hover{background:#1b5e20;}
        .brow{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;}
        /* STATUS */
        .st{padding:8px 14px;border-radius:2px;font-size:.78rem;margin-top:12px;display:none;}
        .st.ok{background:rgba(76,175,80,.15);color:#2e7d32;border:1px solid #81c784;display:block;}
        .st.err{background:rgba(244,67,54,.12);color:#c62828;border:1px solid #ef9a9a;display:block;}
        .st.info{background:var(--pale);color:#7a5c00;border:1px solid var(--border);display:block;}
        /* KALENDAR */
        .chd{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;}
        .chd button{background:var(--dark2);border:none;color:#fff;font-size:1.2rem;width:38px;height:38px;border-radius:0;cursor:pointer;transition:.2s;}
        .chd button:hover{background:var(--dark);}
        .chd h4{font-size:1.1rem;color:#333;font-weight:500;}
        .cwk{display:grid;grid-template-columns:repeat(7,1fr);text-align:center;color:var(--gold);font-weight:600;font-size:.75rem;letter-spacing:1px;margin-bottom:10px;}
        .cdays{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;}
        .cday{aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;background:#eee;border-radius:2px;cursor:pointer;font-size:.85rem;font-weight:500;color:#333;border:1px solid #ddd;transition:all .15s;user-select:none;}
        .cday:hover:not(.oth){background:#d0d0d0;border-color:var(--gold);transform:scale(1.04);}
        .cday.blk{background:#a0a0a0;color:#fff;text-decoration:line-through;border-color:#888;}
        .cday.ical{background:rgba(184,134,11,.35);color:#5a3800;border-color:var(--gold);cursor:default;}
        .cday.both{background:var(--gold);color:#fff;border-color:#9a6e0a;}
        .cday.oth{opacity:.35;cursor:default;background:#e0e0e0;}
        .legend{display:flex;gap:16px;flex-wrap:wrap;margin-top:14px;font-size:.72rem;color:#555;}
        .legend span{display:flex;align-items:center;gap:6px;}
        .ldot{width:12px;height:12px;border-radius:2px;flex-shrink:0;}
        /* CHIPS */
        .chips{display:flex;flex-wrap:wrap;gap:7px;min-height:44px;padding:10px;background:#fafafa;border:1px dashed var(--border);border-radius:2px;margin-bottom:12px;}
        .chip{display:inline-flex;align-items:center;gap:5px;background:var(--pale);border:1px solid rgba(184,134,11,.3);padding:4px 10px;border-radius:2px;font-size:.76rem;font-family:monospace;color:#5a4200;}
        .chip button{background:none;border:none;color:var(--red);cursor:pointer;font-size:1rem;line-height:1;padding:0 2px;transition:.15s;}
        .chip button:hover{transform:scale(1.3);}
        .ce{font-size:.76rem;color:#bbb;align-self:center;}
        /* NAPOVEDA */
        details{margin-top:14px;}
        details summary{font-size:.73rem;color:#aaa;cursor:pointer;padding:4px 0;}
        details summary:hover{color:var(--gold);}
        .help{margin-top:8px;background:#fffdf7;border-left:3px solid var(--gold);padding:12px 14px;font-size:.74rem;color:#555;line-height:1.85;}
        /* EXPORT */
        .ebox{background:#fafafa;border:1px dashed var(--border);border-radius:2px;padding:14px 16px;font-size:.76rem;color:#555;line-height:1.9;margin-top:12px;}
        .ebox strong{color:#7a5c00;}
    </style>
</head>
<body>
<div class="topbar">
    <div class="tb-brand">
        <strong>4U CENTRE APARTMENTS</strong>
        <span class="tb-badge">ADMIN</span>
    </div>
    <?php if($loggedIn): ?>
    <div class="tb-nav">
        <a href="kalendarc.htm" target="_blank">&#128279; Zákaznická stránka</a>
        <span class="sep">|</span>
        <a href="?logout=1">&#128274; Odhlásit se</a>
    </div>
    <?php endif; ?>
</div>

<?php if(!$loggedIn): ?>
<div class="lp">
    <div class="lcard">
        <div class="icon">&#128274;</div>
        <h1>Přihlášení správce</h1>
        <p>4U Centre Apartments · Správa rezervací</p>
        <?php if($loginError): ?>
        <div class="lerr">&#10060; Nesprávné přihlašovací údaje.</div>
        <?php endif; ?>
        <form method="POST">
            <input type="hidden" name="_full" value="1">
            <div class="lfield">
                <label>Uživatelské jméno</label>
                <input type="text" name="username" autofocus autocomplete="username">
            </div>
            <div class="lfield">
                <label>Heslo</label>
                <input type="password" name="password" autocomplete="current-password">
            </div>
            <button type="submit" name="login" class="lbtn">PŘIHLÁSIT SE &#8594;</button>
        </form>
    </div>
</div>

<?php else: ?>
<div class="wrap">
    <div class="phd">
        <h1>&#9881;&#65039; Správa kalendáře</h1>
        <p>Importujte obsazenost z Booking.com a Airbnb, blokujte termíny a exportujte ICS soubory.</p>
    </div>
    <div class="stats">
        <div class="stat"><div class="num" id="sA">–</div><div class="lbl">Obsazeno Apt A</div></div>
        <div class="stat"><div class="num" id="sB">–</div><div class="lbl">Obsazeno Apt B</div></div>
        <div class="stat"><div class="num" id="siA">–</div><div class="lbl">iCal dnů Apt A</div></div>
        <div class="stat"><div class="num" id="siB">–</div><div class="lbl">iCal dnů Apt B</div></div>
        <div class="stat"><div class="num" style="font-size:.9rem;padding-top:8px;" id="sSync">–</div><div class="lbl">Poslední sync</div></div>
    </div>
    <div class="g2">
        <div class="sec">
            <div class="shd">&#128229; Import z Booking.com a Airbnb</div>
            <p class="ssub">Vložte iCal URL adresy – termíny se automaticky zobrazí zákazníkům.</p>
            <div class="atabs" id="importTabs">
                <button class="atab active" onclick="setIA('A',this)">Apartmán A</button>
                <button class="atab" onclick="setIA('B',this)">Apartmán B</button>
            </div>
            <div class="ulbl">BOOKING.COM</div>
            <div class="urow"><input type="url" id="uB" placeholder="https://ical.booking.com/v1/export?t=..."></div>
            <div class="ulbl">AIRBNB</div>
            <div class="urow"><input type="url" id="uA" placeholder="https://www.airbnb.com/calendar/ical/..."></div>
            <div class="brow">
                <button class="btn bg" onclick="syncAll()">&#8635; Synchronizovat vše</button>
                <button class="btn bd" onclick="syncOne('booking')">Načíst Booking</button>
                <button class="btn bd" onclick="syncOne('airbnb')">Načíst Airbnb</button>
            </div>
            <div id="syncSt" class="st"></div>
            <details>
                <summary>Kde najdu iCal URL adresy?</summary>
                <div class="help">
                    <strong>Booking.com:</strong><br>Extranet &#8594; Kalendář &#8594; Synchronizovat kalendář &#8594; Exportovat<br><br>
                    <strong>Airbnb:</strong><br>Ubytování &#8594; Dostupnost &#8594; Synchronizovat kalendáře &#8594; Exportovat
                </div>
            </details>
        </div>
        <div class="sec">
            <div class="shd">&#128228; Export ICS kalendáře</div>
            <p class="ssub">Stáhněte ICS soubor a nahrajte ho do Booking.com nebo Airbnb.</p>
            <div class="atabs">
                <button class="atab active" onclick="setEA('A',this)">Apartmán A</button>
                <button class="atab" onclick="setEA('B',this)">Apartmán B</button>
            </div>
            <div class="brow">
                <button class="btn bg" onclick="doExport()">&#11015; Stáhnout ICS soubor</button>
            </div>
            <div class="ebox">
                <strong>Booking.com:</strong> Extranet &#8594; Kalendář &#8594; Synchronizovat &#8594; Importovat &#8594; nahrajte soubor<br><br>
                <strong>Airbnb:</strong> Ubytování &#8594; Dostupnost &#8594; Synchronizovat &#8594; Importovat &#8594; vložte URL
            </div>
        </div>
    </div>
    <div class="sec">
        <div class="shd">&#128197; Blokování termínů v kalendáři</div>
        <p class="ssub">Klikněte na den pro ruční zablokování nebo odblokování. Zlaté dny jsou z iCal (Booking/Airbnb).</p>
        <div class="atabs">
            <button class="atab active" onclick="setBA('A',this)">Apartmán A</button>
            <button class="atab" onclick="setBA('B',this)">Apartmán B</button>
        </div>
        <div class="chd">
            <button onclick="cPrev()">&#9664;</button>
            <h4 id="cTitle"></h4>
            <button onclick="cNext()">&#9654;</button>
        </div>
        <div class="cwk"><span>Po</span><span>Út</span><span>St</span><span>Čt</span><span>Pá</span><span>So</span><span>Ne</span></div>
        <div class="cdays" id="adminCal"></div>
        <div class="legend">
            <span><span class="ldot" style="background:#eee;border:1px solid #ddd;"></span>Volný</span>
            <span><span class="ldot" style="background:#a0a0a0;"></span>Ručně blokován</span>
            <span><span class="ldot" style="background:rgba(184,134,11,.35);"></span>iCal (Booking/Airbnb)</span>
            <span><span class="ldot" style="background:var(--gold);"></span>iCal + Ručně</span>
        </div>
        <div style="margin-top:20px;">
            <p style="font-size:.78rem;color:#7a5c00;font-weight:600;margin-bottom:8px;">Ručně blokované termíny:</p>
            <div class="chips" id="chips"></div>
        </div>
        <div class="brow">
            <button class="btn bge" onclick="saveAll()">&#128190; Uložit a publikovat</button>
            <button class="btn br" onclick="clearManual()">&#128465; Vymazat ruční blokování pro tento apartmán</button>
        </div>
        <div id="saveSt" class="st"></div>
    </div>
</div>
<?php endif; ?>

<?php if($loggedIn): ?>
<script>
const API='admin.php';
let iApt='A',eApt='A',bApt='A';
let cDate=new Date();
let icalD={A:[],B:[]},manD={A:[],B:[]},icalU={A:{booking:'',airbnb:''},B:{booking:'',airbnb:''}};
function allD(apt){return[...new Set([...icalD[apt],...manD[apt]])].sort();}
function setSt(id,msg,t){const e=document.getElementById(id);e.textContent=msg;e.className='st '+t;}
function swTab(btn){btn.closest('.atabs').querySelectorAll('.atab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');}

async function load(){
    try{
        const r=await fetch(API+'?api=load');const d=await r.json();
        if(d.manualDates)manD=d.manualDates;
        if(d.icalUrls)icalU=d.icalUrls;
        if(d.publicDates){['A','B'].forEach(a=>{icalD[a]=(d.publicDates[a]||[]).filter(x=>!(manD[a]||[]).includes(x));});}
        if(d.lastSync)document.getElementById('sSync').textContent=d.lastSync.substring(11,16);
        document.getElementById('uB').value=icalU[iApt]?.booking||'';
        document.getElementById('uA').value=icalU[iApt]?.airbnb||'';
    }catch(e){}
    updStats();rCal();rChips();
}

async function saveAll(){
    setSt('saveSt','Ukládám...','info');
    icalU[iApt].booking=document.getElementById('uB').value.trim();
    icalU[iApt].airbnb=document.getElementById('uA').value.trim();
    const pub={A:allD('A'),B:allD('B')};
    try{
        const r=await fetch(API+'?api=save',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({manualDates:manD,icalUrls:icalU,publicDates:pub})});
        const d=await r.json();
        if(d.ok){setSt('saveSt','Ulozeno – zakaznicka stranka je aktualizovana.','ok');if(d.lastSync)document.getElementById('sSync').textContent=d.lastSync.substring(11,16);}
        else setSt('saveSt','Chyba: '+(d.error||'server'),'err');
    }catch(e){setSt('saveSt','Server nedostupny.','err');}
}

function setIA(apt,btn){iApt=apt;swTab(btn);document.getElementById('uB').value=icalU[apt]?.booking||'';document.getElementById('uA').value=icalU[apt]?.airbnb||'';}
function setEA(apt,btn){eApt=apt;swTab(btn);}
function setBA(apt,btn){bApt=apt;swTab(btn);rCal();rChips();}

async function syncOne(src){
    const url=(src==='booking'?document.getElementById('uB'):document.getElementById('uA')).value.trim();
    if(!url){setSt('syncSt','Zadejte URL adresu.','err');return;}
    setSt('syncSt','Nacitam...','info');
    icalU[iApt][src]=url;
    try{
        const r=await fetch(API+'?api=fetch_ical&url='+encodeURIComponent(url));
        const d=await r.json();
        if(d.error){setSt('syncSt','Chyba: '+d.error,'err');return;}
        icalD[iApt]=[...new Set([...icalD[iApt],...(d.dates||[])])].sort();
        updStats();rCal();rChips();
        setSt('syncSt','Nacteno '+d.dates.length+' dnu z '+d.source+' (Apt '+iApt+'). Kliknete Ulozit a publikovat.','ok');
    }catch(e){setSt('syncSt','Nelze spojit se serverem.','err');}
}

async function syncAll(){
    setSt('syncSt','Synchronizuji vse...','info');
    icalU[iApt].booking=document.getElementById('uB').value.trim();
    icalU[iApt].airbnb=document.getElementById('uA').value.trim();
    let tot=0,errs=0;
    for(const apt of['A','B']){for(const src of['booking','airbnb']){
        const url=icalU[apt]?.[src];if(!url)continue;
        try{const r=await fetch(API+'?api=fetch_ical&url='+encodeURIComponent(url));const d=await r.json();
            if(!d.error){icalD[apt]=[...new Set([...icalD[apt],...(d.dates||[])])].sort();tot+=d.dates.length;}else errs++;
        }catch(e){errs++;}
    }}
    updStats();rCal();rChips();
    setSt('syncSt','Synchronizovano – '+tot+' dnu'+(errs?' ('+errs+' selhalo)':'')+'. Kliknete Ulozit a publikovat.',errs?'err':'ok');
}

async function doExport(){
    const dates=allD(eApt);
    const r=await fetch(API+'?api=export&apt='+eApt,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({dates})});
    const blob=await r.blob();const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);a.download='4u-centre-apt'+eApt+'.ics';a.click();
}

function cPrev(){cDate=new Date(cDate.getFullYear(),cDate.getMonth()-1,1);rCal();}
function cNext(){cDate=new Date(cDate.getFullYear(),cDate.getMonth()+1,1);rCal();}
function rCal(){
    const y=cDate.getFullYear(),m=cDate.getMonth();
    const mn=['Leden','Unor','Brezen','Duben','Kveten','Cerven','Cervenec','Srpen','Zari','Rijen','Listopad','Prosinec'];
    document.getElementById('cTitle').textContent=mn[m]+' '+y;
    const fd=new Date(y,m,1).getDay(),off=fd===0?6:fd-1,dim=new Date(y,m+1,0).getDate();
    let h='';
    for(let i=0;i<off;i++)h+='<div class="cday oth">'+new Date(y,m,-off+i+1).getDate()+'</div>';
    for(let d=1;d<=dim;d++){
        const ds=y+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
        const ii=(icalD[bApt]||[]).includes(ds),mm=(manD[bApt]||[]).includes(ds);
        let c='cday';if(ii&&mm)c+=' both';else if(ii)c+=' ical';else if(mm)c+=' blk';
        h+='<div class="'+c+'" onclick="tgBlk(''+ds+'')">'+d+'</div>';
    }
    let rem=42-off-dim;for(let i=1;i<=rem;i++)h+='<div class="cday oth">'+i+'</div>';
    document.getElementById('adminCal').innerHTML=h;
}
function tgBlk(ds){
    if((icalD[bApt]||[]).includes(ds))return;
    if(!manD[bApt])manD[bApt]=[];
    const idx=manD[bApt].indexOf(ds);
    if(idx===-1)manD[bApt].push(ds);else manD[bApt].splice(idx,1);
    manD[bApt].sort();rCal();rChips();updStats();
}
function clearManual(){if(!confirm('Smazat vsechna rucne blokovana data pro Apt '+bApt+'?'))return;manD[bApt]=[];rCal();rChips();updStats();}
function rChips(){
    const el=document.getElementById('chips'),m=(manD[bApt]||[]).slice().sort();
    if(!m.length){el.innerHTML='<span class="ce">Zadne rucne blokovane terminy</span>';return;}
    el.innerHTML=m.map(d=>{const p=d.split('-');return'<span class="chip">'+p[2]+'.'+p[1]+'.'+p[0]+' <button onclick="tgBlk(''+d+'')" title="Odblokovat">×</button></span>';}).join('');
}
function updStats(){
    document.getElementById('sA').textContent=allD('A').length;
    document.getElementById('sB').textContent=allD('B').length;
    document.getElementById('siA').textContent=(icalD.A||[]).length;
    document.getElementById('siB').textContent=(icalD.B||[]).length;
}
load();
</script>
<?php endif; ?>
</body>
</html>
