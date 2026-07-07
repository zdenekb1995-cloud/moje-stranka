/* ============================================================
   4U CENTRE APARTMENTS · sdílený JavaScript
   Preloader · Navigace · Překlady · Cookies · 3D efekty · Galerie
   ============================================================ */

/* ---------- PRELOADER ---------- */
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (!pre) return;
  setTimeout(() => {
    pre.classList.add('done');
    document.body.classList.add('loaded');
  }, 1400); // logo se chvíli naklání, pak plynulý fade-out
});
// Pojistka: kdyby load event nedoběhl (pomalé obrázky), schovej po 5 s
setTimeout(() => {
  const pre = document.getElementById('preloader');
  if (pre) pre.classList.add('done');
}, 5000);

/* ---------- PŘEKLADY (CS / EN / DE) ---------- */
const I18N = {
  cs: {
    // Navigace
    nav_byty: 'Byty', nav_ceny: 'Ceny', nav_okoli: 'Okolí', nav_kontakt: 'Kontakt', nav_checkin: 'Check-in', nav_rezervovat: 'Rezervovat',
    // Hero
    hero_eyebrow: '4U Centre Apartments s.r.o. · Olomouc',
    hero_line1: 'Váš domov', hero_line2: 'v srdci Olomouce',
    hero_text: 'Dva moderní apartmány 1+kk ve druhém patře — plně vybavené, s Wi-Fi, kuchyní, TV a soukromou koupelnou.',
    hero_btn1: 'Prohlédnout byty', hero_btn2: 'Rezervovat pobyt',
    hero_scroll: 'Objevte více',
    // Byty
    apt_eyebrow: 'Naše apartmány', apt_title_1: 'Dva útulné', apt_title_2: 'apartmány',
    apt_a_name: 'Apartmán A',
    apt_a_desc: 'Světlý a moderní apartmán 1+kk ve 2. patře s výhledem do klidné ulice. Ideální pro páry i cestující za prací.',
    apt_b_name: 'Apartmán B s terasou',
    apt_b_desc: 'Stylový apartmán 1+kk ve 2. patře s ložnicí a vlastní terasou. Výrazná designová stěna dodává bytu jedinečný charakter.',
    badge_terrace: 'Soukromá terasa',
    f_wifi: 'Wi-Fi zdarma', f_kitchen: 'Vybavená kuchyně', f_bath: 'Soukromá koupelna',
    f_tv: 'Smart TV', f_bed: 'Pohodlná postel', f_center: 'Centrum města',
    f_wash: 'Pračka', f_fridge: 'Lednice', f_terrace: 'Soukromá terasa', f_design: 'Designová stěna',
    price_label: 'Dle Booking.com', price_note: 'nebo na vyžádání po domluvě',
    btn_detail: 'Detail bytu',
    // Ceny
    price_eyebrow: 'Ceník', price_title_1: 'Ceny dle', price_title_2: 'Booking.com',
    price_sub: 'Aktuální ceny najdete na Booking.com — nebo nás kontaktujte přímo pro rezervaci na vyžádání po domluvě.',
    f_bed_full: 'Pohodlná postel s povlečením', f_center_full: 'Centrum Olomouce',
    // Okolí
    around_eyebrow: 'V okolí', around_title_1: 'Vše', around_title_2: 'poblíž',
    around_sub: 'Naše apartmány se nacházejí v samém centru Olomouce — vše co potřebujete je na dosah pěší chůze.',
    around_attractions: 'Turistické atrakce', around_food: 'Restaurace a kavárny',
    around_transport: 'Veřejná doprava', around_airport: 'Nejbližší letiště',
    a_palace: 'Arcibiskupský palác', a_column: 'Sloup Nejsvětější Trojice', a_square: 'Horní náměstí', a_clock: 'Orloj',
    r_bubble: 'Bubble Mania (kavárna/bar)', r_atmosphere: 'Atmosphere (restaurace)', r_santovka: 'Šantovka OC – jídelní zóna',
    t_tram: 'Tramvaj – zastávka Envelopa', t_train1: 'Vlak – Olomouc-Smetanovy sady', t_train2: 'Vlak – Olomouc-Nová Ulice', t_bus: 'Autobus – Autobusové nádraží',
    air_ostrava: 'Letiště Leoše Janáčka Ostrava', air_brno: 'Letiště Brno Tuřany',
    // Rezervace
    book_eyebrow: 'Rezervace', book_title_1: 'Rezervujte', book_title_2: 'snadno',
    book_sub: 'Vyberte si způsob rezervace, který vám vyhovuje — přes ověřenou platformu, nebo nás kontaktujte napřímo.',
    book_both: 'Oba apartmány', book_a: 'Apartmán A', book_b: 'Apartmán B',
    book_direct_title: 'Napište nám', book_direct_sub: 'Rezervace na vyžádání po domluvě',
    // Kontakt
    contact_eyebrow: 'Kontakt', contact_title_1: 'Jsme tu', contact_title_2: 'pro vás',
    contact_sub_card: 'Olomouc, Česká republika',
    label_phone: 'Telefon', label_email: 'E-mail',
    contact_or: 'Nebo rezervujte přímo přes:',
    // Footer
    footer_copy: '© 2026 4U Centre Apartments s.r.o. Všechna práva vyhrazena.',
    // Cookies
    cookie_title: 'Cookies', cookie_text: 'Tento web používá pouze nezbytné cookies pro správné fungování stránky a uložení vaší jazykové preference. Žádné sledovací ani marketingové cookies nepoužíváme.',
    cookie_accept: 'Rozumím', cookie_decline: 'Odmítnout',
    // Detail A
    aptA_title: 'Apartmán A', aptA_address: '2. patro · Klidná ulice v centru Olomouce',
    aptA_badge: 'Světlý apartmán 1+kk',
    detail_back: 'Zpět na hlavní stránku', detail_about: 'O apartmánu',
    aptA_p1: 'Apartmán A je světlý a moderně zařízený byt 1+kk ve 2. patře s výhledem do klidné ulice. Ideální volba pro páry, jednotlivce i služební cesty. Byt je vybavený veškerým potřebným vybavením pro pohodlný a příjemný pobyt v srdci Olomouce.',
    aptA_p2: 'Po náročném dni plném poznávání Olomouce se můžete těšit na odpočinek v pohodlné posteli s kvalitním povlečením. Kuchyň je plně vybavená – najdete zde lednici, mikrovlnnou troubu, varnou desku, rychlovarnou konvici a veškeré nádobí.',
    aptA_p3: 'Apartmán se nachází v docházkové vzdálenosti od všech hlavních památek, restaurací i obchodů. Přesto je ulice klidná a tichá, takže vás nic neruší.',
    btn_book_booking: 'Rezervovat na Booking.com', btn_book_airbnb: 'Rezervovat na Airbnb',
    info_bed: '1× manželská postel', info_capacity: 'Maximální kapacita: 2 osoby',
    info_size_a: 'Velikost: cca 35 m²', info_floor: '2. patro (bez výtahu)',
    // Detail B
    aptB_title: 'Apartmán B s terasou', aptB_address: '2. patro · S vlastní terasou a designovou stěnou',
    aptB_badge: 'Soukromá terasa',
    aptB_p1: 'Apartmán B je stylově zařízený byt 1+kk ve 2. patře, který vyniká především svou vlastní terasou – ideálním místem pro ranní kávu nebo večerní odpočinek. Výrazná designová stěna dodává bytu jedinečný charakter a moderní šmrnc.',
    aptB_p2: 'Byt je vybaven samostatnou ložnicí s pohodlnou manželskou postelí, plně vybavenou kuchyní a moderní koupelnou. Terasa je orientovaná do klidného dvora, takže si zde můžete vychutnat klid a soukromí.',
    aptB_p3: 'Stejně jako Apartmán A se i tento byt nachází v samém centru Olomouce, jen pár minut chůze od Horního náměstí, Sloupu Nejsvětější Trojice a dalších památek.',
    info_terrace: 'Vlastní terasa', info_size_b: 'Velikost: cca 38 m²'
  },
  en: {
    nav_byty: 'Apartments', nav_ceny: 'Prices', nav_okoli: 'Nearby', nav_kontakt: 'Contact', nav_checkin: 'Check-in', nav_rezervovat: 'Book now',
    hero_eyebrow: '4U Centre Apartments s.r.o. · Olomouc',
    hero_line1: 'Your home', hero_line2: 'in the heart of Olomouc',
    hero_text: 'Two modern 1+kk apartments on the 2nd floor — fully equipped, with Wi-Fi, kitchen, TV and private bathroom.',
    hero_btn1: 'View apartments', hero_btn2: 'Book your stay',
    hero_scroll: 'Discover more',
    apt_eyebrow: 'Our apartments', apt_title_1: 'Two cozy', apt_title_2: 'apartments',
    apt_a_name: 'Apartment A',
    apt_a_desc: 'Bright and modern 1+kk apartment on the 2nd floor overlooking a quiet street. Ideal for couples and business travelers.',
    apt_b_name: 'Apartment B with terrace',
    apt_b_desc: 'Stylish 1+kk apartment on the 2nd floor with a bedroom and private terrace. A striking feature wall gives it a unique character.',
    badge_terrace: 'Private terrace',
    f_wifi: 'Free Wi-Fi', f_kitchen: 'Equipped kitchen', f_bath: 'Private bathroom',
    f_tv: 'Smart TV', f_bed: 'Comfortable bed', f_center: 'City center',
    f_wash: 'Washing machine', f_fridge: 'Fridge', f_terrace: 'Private terrace', f_design: 'Design wall',
    price_label: 'According to Booking.com', price_note: 'or on request by agreement',
    btn_detail: 'Apartment detail',
    price_eyebrow: 'Price list', price_title_1: 'Prices via', price_title_2: 'Booking.com',
    price_sub: 'Current prices can be found on Booking.com — or contact us directly for a booking on request.',
    f_bed_full: 'Comfortable bed with bedding', f_center_full: 'Center of Olomouc',
    around_eyebrow: 'Neighborhood', around_title_1: 'Everything', around_title_2: 'nearby',
    around_sub: 'Our apartments are located in the very center of Olomouc — everything you need is within walking distance.',
    around_attractions: 'Tourist attractions', around_food: 'Restaurants and cafes',
    around_transport: 'Public transport', around_airport: 'Nearest airports',
    a_palace: "Archbishop's Palace", a_column: 'Holy Trinity Column', a_square: 'Upper Square', a_clock: 'Astronomical Clock',
    r_bubble: 'Bubble Mania (cafe/bar)', r_atmosphere: 'Atmosphere (restaurant)', r_santovka: 'Šantovka SC – food court',
    t_tram: 'Tram – Envelopa stop', t_train1: 'Train – Olomouc-Smetanovy sady', t_train2: 'Train – Olomouc-Nová Ulice', t_bus: 'Bus – Olomouc Bus Station',
    air_ostrava: 'Leoš Janáček Airport Ostrava', air_brno: 'Brno–Tuřany Airport',
    book_eyebrow: 'Booking', book_title_1: 'Book', book_title_2: 'easily',
    book_sub: 'Choose the booking method that suits you — through a verified platform, or contact us directly.',
    book_both: 'Both apartments', book_a: 'Apartment A', book_b: 'Apartment B',
    book_direct_title: 'Contact us', book_direct_sub: 'Booking on request by agreement',
    contact_eyebrow: 'Contact', contact_title_1: 'We are here', contact_title_2: 'for you',
    contact_sub_card: 'Olomouc, Czech Republic',
    label_phone: 'Phone', label_email: 'E-mail',
    contact_or: 'Or book directly via:',
    footer_copy: '© 2026 4U Centre Apartments s.r.o. All rights reserved.',
    cookie_title: 'Cookies', cookie_text: 'This website uses only essential cookies for proper functioning and to store your language preference. We do not use any tracking or marketing cookies.',
    cookie_accept: 'Got it', cookie_decline: 'Decline',
    aptA_title: 'Apartment A', aptA_address: '2nd floor · Quiet street in the center of Olomouc',
    aptA_badge: 'Bright 1+kk apartment',
    detail_back: 'Back to main page', detail_about: 'About the apartment',
    aptA_p1: 'Apartment A is a bright and modernly furnished 1+kk studio on the 2nd floor overlooking a quiet street. An ideal choice for couples, solo travelers and business trips. The apartment is equipped with everything you need for a comfortable stay in the heart of Olomouc.',
    aptA_p2: 'After a busy day exploring Olomouc, you can look forward to rest in a comfortable bed with quality bedding. The kitchen is fully equipped — you will find a fridge, microwave, hob, kettle and all utensils.',
    aptA_p3: 'The apartment is within walking distance of all the main sights, restaurants and shops. Yet the street is quiet and peaceful, so nothing disturbs you.',
    btn_book_booking: 'Book on Booking.com', btn_book_airbnb: 'Book on Airbnb',
    info_bed: '1× double bed', info_capacity: 'Maximum capacity: 2 persons',
    info_size_a: 'Size: approx. 35 m²', info_floor: '2nd floor (no elevator)',
    aptB_title: 'Apartment B with terrace', aptB_address: '2nd floor · With private terrace and design wall',
    aptB_badge: 'Private terrace',
    aptB_p1: 'Apartment B is a stylishly furnished 1+kk studio on the 2nd floor, distinguished above all by its own terrace — the ideal spot for morning coffee or evening relaxation. A striking design wall gives the apartment a unique character and modern flair.',
    aptB_p2: 'The apartment features a separate bedroom with a comfortable double bed, a fully equipped kitchen and a modern bathroom. The terrace faces a quiet courtyard, so you can enjoy peace and privacy.',
    aptB_p3: "Like Apartment A, this apartment is located in the very center of Olomouc, just a few minutes' walk from the Upper Square, the Holy Trinity Column and other attractions.",
    info_terrace: 'Private terrace', info_size_b: 'Size: approx. 38 m²'
  },
  de: {
    nav_byty: 'Apartments', nav_ceny: 'Preise', nav_okoli: 'Umgebung', nav_kontakt: 'Kontakt', nav_checkin: 'Check-in', nav_rezervovat: 'Jetzt buchen',
    hero_eyebrow: '4U Centre Apartments s.r.o. · Olomouc',
    hero_line1: 'Ihr Zuhause', hero_line2: 'im Herzen von Olomouc',
    hero_text: 'Zwei moderne 1+kk Apartments im 2. Stock — voll ausgestattet mit WLAN, Küche, TV und eigenem Bad.',
    hero_btn1: 'Apartments ansehen', hero_btn2: 'Aufenthalt buchen',
    hero_scroll: 'Mehr entdecken',
    apt_eyebrow: 'Unsere Apartments', apt_title_1: 'Zwei gemütliche', apt_title_2: 'Apartments',
    apt_a_name: 'Apartment A',
    apt_a_desc: 'Helles und modernes 1+kk Apartment im 2. Stock mit Blick auf eine ruhige Straße. Ideal für Paare und Geschäftsreisende.',
    apt_b_name: 'Apartment B mit Terrasse',
    apt_b_desc: 'Stylisches 1+kk Apartment im 2. Stock mit Schlafzimmer und eigener Terrasse. Eine markante Designwand verleiht einen einzigartigen Charakter.',
    badge_terrace: 'Private Terrasse',
    f_wifi: 'Kostenloses WLAN', f_kitchen: 'Ausgestattete Küche', f_bath: 'Eigenes Bad',
    f_tv: 'Smart TV', f_bed: 'Bequemes Bett', f_center: 'Stadtzentrum',
    f_wash: 'Waschmaschine', f_fridge: 'Kühlschrank', f_terrace: 'Private Terrasse', f_design: 'Designwand',
    price_label: 'Laut Booking.com', price_note: 'oder auf Anfrage nach Vereinbarung',
    btn_detail: 'Apartment-Detail',
    price_eyebrow: 'Preisliste', price_title_1: 'Preise laut', price_title_2: 'Booking.com',
    price_sub: 'Aktuelle Preise finden Sie auf Booking.com — oder kontaktieren Sie uns direkt für eine Buchung auf Anfrage.',
    f_bed_full: 'Bequemes Bett mit Bettwäsche', f_center_full: 'Zentrum von Olomouc',
    around_eyebrow: 'Umgebung', around_title_1: 'Alles', around_title_2: 'in der Nähe',
    around_sub: 'Unsere Apartments befinden sich im Herzen von Olomouc — alles, was Sie brauchen, ist zu Fuß erreichbar.',
    around_attractions: 'Sehenswürdigkeiten', around_food: 'Restaurants und Cafés',
    around_transport: 'Öffentliche Verkehrsmittel', around_airport: 'Nächste Flughäfen',
    a_palace: 'Erzbischöfliches Palais', a_column: 'Dreifaltigkeitssäule', a_square: 'Oberer Ring', a_clock: 'Rathausuhr',
    r_bubble: 'Bubble Mania (Café/Bar)', r_atmosphere: 'Atmosphere (Restaurant)', r_santovka: 'Šantovka EK – Food Court',
    t_tram: 'Straßenbahn – Haltestelle Envelopa', t_train1: 'Zug – Olomouc-Smetanovy sady', t_train2: 'Zug – Olomouc-Nová Ulice', t_bus: 'Bus – Busbahnhof Olomouc',
    air_ostrava: 'Flughafen Leoš Janáček Ostrava', air_brno: 'Flughafen Brno-Tuřany',
    book_eyebrow: 'Buchung', book_title_1: 'Einfach', book_title_2: 'buchen',
    book_sub: 'Wählen Sie die Buchungsmethode, die zu Ihnen passt — über eine verifizierte Plattform oder direkt bei uns.',
    book_both: 'Beide Apartments', book_a: 'Apartment A', book_b: 'Apartment B',
    book_direct_title: 'Schreiben Sie uns', book_direct_sub: 'Buchung auf Anfrage nach Vereinbarung',
    contact_eyebrow: 'Kontakt', contact_title_1: 'Wir sind', contact_title_2: 'für Sie da',
    contact_sub_card: 'Olomouc, Tschechische Republik',
    label_phone: 'Telefon', label_email: 'E-Mail',
    contact_or: 'Oder buchen Sie direkt über:',
    footer_copy: '© 2026 4U Centre Apartments s.r.o. Alle Rechte vorbehalten.',
    cookie_title: 'Cookies', cookie_text: 'Diese Website verwendet nur notwendige Cookies für die korrekte Funktion und zur Speicherung Ihrer Sprachpräferenz. Wir verwenden keine Tracking- oder Marketing-Cookies.',
    cookie_accept: 'Verstanden', cookie_decline: 'Ablehnen',
    aptA_title: 'Apartment A', aptA_address: '2. Stock · Ruhige Straße im Zentrum von Olomouc',
    aptA_badge: 'Helles 1+kk Apartment',
    detail_back: 'Zurück zur Hauptseite', detail_about: 'Über das Apartment',
    aptA_p1: 'Apartment A ist eine helle und modern eingerichtete 1+kk-Wohnung im 2. Stock mit Blick auf eine ruhige Straße. Ideal für Paare, Alleinreisende und Geschäftsreisen. Die Wohnung ist mit allem ausgestattet, was Sie für einen angenehmen Aufenthalt im Herzen von Olomouc benötigen.',
    aptA_p2: 'Nach einem ereignisreichen Tag in Olomouc können Sie sich auf eine erholsame Nacht in einem bequemen Bett mit hochwertiger Bettwäsche freuen. Die Küche ist voll ausgestattet — Kühlschrank, Mikrowelle, Kochplatte, Wasserkocher und sämtliches Geschirr.',
    aptA_p3: 'Das Apartment liegt in Gehweite zu allen wichtigen Sehenswürdigkeiten, Restaurants und Geschäften. Dennoch ist die Straße ruhig und still.',
    btn_book_booking: 'Bei Booking.com buchen', btn_book_airbnb: 'Bei Airbnb buchen',
    info_bed: '1× Doppelbett', info_capacity: 'Maximale Kapazität: 2 Personen',
    info_size_a: 'Größe: ca. 35 m²', info_floor: '2. Stock (kein Aufzug)',
    aptB_title: 'Apartment B mit Terrasse', aptB_address: '2. Stock · Mit eigener Terrasse und Designwand',
    aptB_badge: 'Private Terrasse',
    aptB_p1: 'Apartment B ist eine stilvoll eingerichtete 1+kk-Wohnung im 2. Stock, die vor allem durch ihre eigene Terrasse besticht – der ideale Ort für einen morgendlichen Kaffee oder ein abendliches Entspannen. Eine markante Designwand verleiht der Wohnung einen einzigartigen Charakter.',
    aptB_p2: 'Die Wohnung verfügt über ein separates Schlafzimmer mit bequemem Doppelbett, eine voll ausgestattete Küche und ein modernes Badezimmer. Die Terrasse ist zum ruhigen Innenhof ausgerichtet.',
    aptB_p3: 'Wie Apartment A befindet sich auch diese Wohnung im Herzen von Olomouc, nur wenige Gehminuten vom Oberen Ring, der Dreifaltigkeitssäule und anderen Sehenswürdigkeiten entfernt.',
    info_terrace: 'Eigene Terrasse', info_size_b: 'Größe: ca. 38 m²'
  }
};

let cookiesAccepted = false;
try { cookiesAccepted = localStorage.getItem('cookieConsent') === 'accepted'; } catch (e) {}

function safeStore(key, value) {
  if (!cookiesAccepted && key !== 'cookieConsent') return;
  try { localStorage.setItem(key, value); } catch (e) {}
}

function setLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('.lang-option').forEach(o => {
    o.classList.toggle('active', o.dataset.lang === lang);
  });
  safeStore('preferredLanguage', lang);
}

document.querySelectorAll('.lang-option').forEach(opt => {
  opt.addEventListener('click', () => setLanguage(opt.dataset.lang));
});

(function initLanguage() {
  let saved = null;
  try { saved = localStorage.getItem('preferredLanguage'); } catch (e) {}
  setLanguage(saved && I18N[saved] ? saved : 'cs');
})();

/* ---------- COOKIE LIŠTA ---------- */
(function initCookies() {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;
  let consent = null;
  try { consent = localStorage.getItem('cookieConsent'); } catch (e) {}
  if (!consent) setTimeout(() => banner.classList.add('show'), 2200);

  const accept = document.getElementById('cookieAccept');
  const decline = document.getElementById('cookieDecline');
  if (accept) accept.addEventListener('click', () => {
    try { localStorage.setItem('cookieConsent', 'accepted'); } catch (e) {}
    cookiesAccepted = true;
    banner.classList.remove('show');
  });
  if (decline) decline.addEventListener('click', () => {
    try { localStorage.removeItem('preferredLanguage'); localStorage.setItem('cookieConsent', 'declined'); } catch (e) {}
    banner.classList.remove('show');
  });
})();

/* ---------- NAVIGACE: scroll + hamburger + aktivní odkaz ---------- */
window.addEventListener('scroll', () => {
  document.body.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
  }));
}

// Zvýraznění aktivní sekce v menu (jen na indexu)
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
if (navAnchors.length) {
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) current = s.id; });
    navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }, { passive: true });
}

/* ---------- SCROLL REVEAL ---------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- 3D TILT KARTY ---------- */
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const IS_TOUCH = window.matchMedia('(hover: none)').matches;

if (!REDUCED_MOTION && !IS_TOUCH) {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    const strength = parseFloat(card.dataset.tilt) || 6;
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateZ(6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
      card.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
      setTimeout(() => card.style.transition = '', 600);
    });
    card.addEventListener('mouseenter', () => card.style.transition = '');
  });

  /* Hero paralaxa (jemný 3D pohyb obsahu) */
  const heroContent = document.querySelector('.hero-content');
  const hero = document.querySelector('.hero');
  if (hero && heroContent) {
    hero.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      heroContent.style.transform = `rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateZ(0)`;
    });
    hero.addEventListener('mouseleave', () => heroContent.style.transform = '');
  }
}

/* ---------- ZLATÉ ČÁSTICE V HERO ---------- */
(function particles() {
  if (REDUCED_MOTION) return;
  const wrap = document.querySelector('.particles');
  if (!wrap) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.bottom = -(Math.random() * 10) + '%';
    const size = 2 + Math.random() * 4;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.animationDuration = 9 + Math.random() * 14 + 's';
    p.style.animationDelay = Math.random() * 14 + 's';
    wrap.appendChild(p);
  }
})();

/* ---------- MINI GALERIE (karty na indexu) ---------- */
function setupCardGallery(root) {
  const images = JSON.parse(root.dataset.images || '[]');
  if (!images.length) return;
  const img = root.querySelector('img');
  const dotsWrap = root.parentElement.querySelector('.gal-dots');
  let index = 0;

  const dots = images.map((_, i) => {
    const d = document.createElement('button');
    d.setAttribute('aria-label', 'Fotografie ' + (i + 1));
    d.addEventListener('click', () => { index = i; update(); });
    if (dotsWrap) dotsWrap.appendChild(d);
    return d;
  });

  function update() {
    img.style.opacity = '0';
    setTimeout(() => { img.src = images[index]; img.style.opacity = '1'; }, 180);
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }
  const prev = root.querySelector('.gal-prev');
  const next = root.querySelector('.gal-next');
  if (prev) prev.addEventListener('click', e => { e.preventDefault(); index = (index - 1 + images.length) % images.length; update(); });
  if (next) next.addEventListener('click', e => { e.preventDefault(); index = (index + 1) % images.length; update(); });
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}
document.querySelectorAll('.apt-gallery[data-images]').forEach(setupCardGallery);

/* ---------- DETAILNÍ GALERIE + LIGHTBOX ---------- */
(function detailGallery() {
  const main = document.getElementById('detailGallery');
  if (!main) return;
  const images = JSON.parse(main.dataset.images || '[]');
  const mainImg = document.getElementById('mainImg');
  const thumbsWrap = document.getElementById('galleryThumbs');
  const counter = document.getElementById('galCounter');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  let index = 0;

  const thumbs = images.map((src, i) => {
    const t = document.createElement('img');
    t.src = src;
    t.alt = 'Náhled ' + (i + 1);
    t.loading = 'lazy';
    t.addEventListener('click', () => { index = i; update(); });
    thumbsWrap.appendChild(t);
    return t;
  });

  function update() {
    mainImg.style.opacity = '0';
    setTimeout(() => { mainImg.src = images[index]; mainImg.style.opacity = '1'; }, 160);
    thumbs.forEach((t, i) => t.classList.toggle('active', i === index));
    if (counter) counter.textContent = (index + 1) + ' / ' + images.length;
    if (lightbox && lightbox.classList.contains('open')) lbImg.src = images[index];
  }
  function step(dir) { index = (index + dir + images.length) % images.length; update(); }

  main.querySelector('.gal-prev').addEventListener('click', e => { e.stopPropagation(); step(-1); });
  main.querySelector('.gal-next').addEventListener('click', e => { e.stopPropagation(); step(1); });

  // Lightbox
  if (lightbox && lbImg) {
    mainImg.addEventListener('click', () => { lbImg.src = images[index]; lightbox.classList.add('open'); document.body.style.overflow = 'hidden'; });
    const close = () => { lightbox.classList.remove('open'); document.body.style.overflow = ''; };
    lightbox.querySelector('.lb-close').addEventListener('click', close);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
    lightbox.querySelector('.gal-prev').addEventListener('click', e => { e.stopPropagation(); step(-1); });
    lightbox.querySelector('.gal-next').addEventListener('click', e => { e.stopPropagation(); step(1); });
    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    });
  }
  update();
})();
