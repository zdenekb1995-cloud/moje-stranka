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
    apt_a_name: 'Apartmán s ložnicí',
    apt_a_desc: 'Světlý a moderní apartmán 1+kk ve 2. patře s výhledem do klidné ulice. Ideální pro páry i cestující za prací.',
    apt_b_name: 'Apartmán s ložnicí a terasou',
    apt_b_desc: 'Stylový apartmán 1+kk ve 2. patře s ložnicí a vlastní terasou. Výrazná designová stěna dodává bytu jedinečný charakter.',
    badge_terrace: 'Soukromá terasa',
    f_wifi: 'Wi-Fi zdarma', f_kitchen: 'Vybavená kuchyně', f_bath: 'Soukromá koupelna',
    f_tv: 'Smart TV', f_bed: 'Pohodlná postel', f_center: 'Centrum města',
    f_wash: 'Pračka', f_fridge: 'Lednice', f_terrace: 'Soukromá terasa', f_design: 'Designová stěna',
    price_label: 'Dle Booking.com', price_note: 'nebo přímo u nás — garance nejlepší ceny',
    btn_detail: 'Detail bytu',
    // Ceny
    price_eyebrow: 'Ceník', price_title_1: 'Ceny dle', price_title_2: 'Booking.com',
    price_sub: 'Aktuální ceny najdete na Booking.com — při přímé rezervaci e-mailem nebo telefonem vám garantujeme nejlepší cenu.',
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
    book_both: 'Oba apartmány', book_a: 'Apartmán s ložnicí', book_b: 'Apartmán s ložnicí a terasou',
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
    aptA_title: 'Apartmán s ložnicí', aptA_address: '2. patro · Klidná ulice v centru Olomouce',
    aptA_badge: 'Světlý apartmán 1+kk',
    detail_back: 'Zpět na hlavní stránku', detail_about: 'O apartmánu',
    aptA_p1: 'Apartmán s ložnicí je světlý a moderně zařízený byt 1+kk ve 2. patře s výhledem do klidné ulice. Ideální volba pro páry, jednotlivce i služební cesty. Byt je vybavený veškerým potřebným vybavením pro pohodlný a příjemný pobyt v srdci Olomouce.',
    aptA_p2: 'Po náročném dni plném poznávání Olomouce se můžete těšit na odpočinek v pohodlné posteli s kvalitním povlečením. Kuchyň je plně vybavená – najdete zde lednici, mikrovlnnou troubu, varnou desku, rychlovarnou konvici a veškeré nádobí.',
    aptA_p3: 'Apartmán se nachází v docházkové vzdálenosti od všech hlavních památek, restaurací i obchodů. Přesto je ulice klidná a tichá, takže vás nic neruší.',
    btn_book_booking: 'Rezervovat na Booking.com', btn_book_airbnb: 'Rezervovat na Airbnb',
    info_bed: '1× manželská postel', info_capacity: 'Maximální kapacita: 2 osoby',
    info_size_a: 'Velikost: cca 35 m²', info_floor: '2. patro (bez výtahu)',
    // Detail B
    aptB_title: 'Apartmán s ložnicí a terasou', aptB_address: '2. patro · S vlastní terasou a designovou stěnou',
    aptB_badge: 'Soukromá terasa',
    aptB_p1: 'Apartmán s ložnicí a terasou je stylově zařízený byt 1+kk ve 2. patře, který vyniká především svou vlastní terasou – ideálním místem pro ranní kávu nebo večerní odpočinek. Výrazná designová stěna dodává bytu jedinečný charakter a moderní šmrnc.',
    aptB_p2: 'Byt je vybaven samostatnou ložnicí s pohodlnou manželskou postelí, plně vybavenou kuchyní a moderní koupelnou. Terasa je orientovaná do klidného dvora, takže si zde můžete vychutnat klid a soukromí.',
    aptB_p3: 'Stejně jako druhý apartmán se i tento byt nachází v samém centru Olomouce, jen pár minut chůze od Horního náměstí, Sloupu Nejsvětější Trojice a dalších památek.',
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
    apt_a_name: 'Apartment with bedroom',
    apt_a_desc: 'Bright and modern 1+kk apartment on the 2nd floor overlooking a quiet street. Ideal for couples and business travelers.',
    apt_b_name: 'Apartment with bedroom and terrace',
    apt_b_desc: 'Stylish 1+kk apartment on the 2nd floor with a bedroom and private terrace. A striking feature wall gives it a unique character.',
    badge_terrace: 'Private terrace',
    f_wifi: 'Free Wi-Fi', f_kitchen: 'Equipped kitchen', f_bath: 'Private bathroom',
    f_tv: 'Smart TV', f_bed: 'Comfortable bed', f_center: 'City center',
    f_wash: 'Washing machine', f_fridge: 'Fridge', f_terrace: 'Private terrace', f_design: 'Design wall',
    price_label: 'According to Booking.com', price_note: 'or directly with us — best price guarantee',
    btn_detail: 'Apartment detail',
    price_eyebrow: 'Price list', price_title_1: 'Prices via', price_title_2: 'Booking.com',
    price_sub: 'Current prices can be found on Booking.com — for direct bookings by e-mail or phone we guarantee the best price.',
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
    book_both: 'Both apartments', book_a: 'Apartment with bedroom', book_b: 'Apartment with bedroom and terrace',
    book_direct_title: 'Contact us', book_direct_sub: 'Booking on request by agreement',
    contact_eyebrow: 'Contact', contact_title_1: 'We are here', contact_title_2: 'for you',
    contact_sub_card: 'Olomouc, Czech Republic',
    label_phone: 'Phone', label_email: 'E-mail',
    contact_or: 'Or book directly via:',
    footer_copy: '© 2026 4U Centre Apartments s.r.o. All rights reserved.',
    cookie_title: 'Cookies', cookie_text: 'This website uses only essential cookies for proper functioning and to store your language preference. We do not use any tracking or marketing cookies.',
    cookie_accept: 'Got it', cookie_decline: 'Decline',
    aptA_title: 'Apartment with bedroom', aptA_address: '2nd floor · Quiet street in the center of Olomouc',
    aptA_badge: 'Bright 1+kk apartment',
    detail_back: 'Back to main page', detail_about: 'About the apartment',
    aptA_p1: 'The Apartment with bedroom is a bright and modernly furnished 1+kk studio on the 2nd floor overlooking a quiet street. An ideal choice for couples, solo travelers and business trips. The apartment is equipped with everything you need for a comfortable stay in the heart of Olomouc.',
    aptA_p2: 'After a busy day exploring Olomouc, you can look forward to rest in a comfortable bed with quality bedding. The kitchen is fully equipped — you will find a fridge, microwave, hob, kettle and all utensils.',
    aptA_p3: 'The apartment is within walking distance of all the main sights, restaurants and shops. Yet the street is quiet and peaceful, so nothing disturbs you.',
    btn_book_booking: 'Book on Booking.com', btn_book_airbnb: 'Book on Airbnb',
    info_bed: '1× double bed', info_capacity: 'Maximum capacity: 2 persons',
    info_size_a: 'Size: approx. 35 m²', info_floor: '2nd floor (no elevator)',
    aptB_title: 'Apartment with bedroom and terrace', aptB_address: '2nd floor · With private terrace and design wall',
    aptB_badge: 'Private terrace',
    aptB_p1: 'The Apartment with bedroom and terrace is a stylishly furnished 1+kk studio on the 2nd floor, distinguished above all by its own terrace — the ideal spot for morning coffee or evening relaxation. A striking design wall gives the apartment a unique character and modern flair.',
    aptB_p2: 'The apartment features a separate bedroom with a comfortable double bed, a fully equipped kitchen and a modern bathroom. The terrace faces a quiet courtyard, so you can enjoy peace and privacy.',
    aptB_p3: "Like our second apartment, this one is located in the very center of Olomouc, just a few minutes' walk from the Upper Square, the Holy Trinity Column and other attractions.",
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
    apt_a_name: 'Apartment mit Schlafzimmer',
    apt_a_desc: 'Helles und modernes 1+kk Apartment im 2. Stock mit Blick auf eine ruhige Straße. Ideal für Paare und Geschäftsreisende.',
    apt_b_name: 'Apartment mit Schlafzimmer und Terrasse',
    apt_b_desc: 'Stylisches 1+kk Apartment im 2. Stock mit Schlafzimmer und eigener Terrasse. Eine markante Designwand verleiht einen einzigartigen Charakter.',
    badge_terrace: 'Private Terrasse',
    f_wifi: 'Kostenloses WLAN', f_kitchen: 'Ausgestattete Küche', f_bath: 'Eigenes Bad',
    f_tv: 'Smart TV', f_bed: 'Bequemes Bett', f_center: 'Stadtzentrum',
    f_wash: 'Waschmaschine', f_fridge: 'Kühlschrank', f_terrace: 'Private Terrasse', f_design: 'Designwand',
    price_label: 'Laut Booking.com', price_note: 'oder direkt bei uns — Bestpreisgarantie',
    btn_detail: 'Apartment-Detail',
    price_eyebrow: 'Preisliste', price_title_1: 'Preise laut', price_title_2: 'Booking.com',
    price_sub: 'Aktuelle Preise finden Sie auf Booking.com — bei Direktbuchung per E-Mail oder Telefon garantieren wir Ihnen den besten Preis.',
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
    book_both: 'Beide Apartments', book_a: 'Apartment mit Schlafzimmer', book_b: 'Apartment mit Schlafzimmer und Terrasse',
    book_direct_title: 'Schreiben Sie uns', book_direct_sub: 'Buchung auf Anfrage nach Vereinbarung',
    contact_eyebrow: 'Kontakt', contact_title_1: 'Wir sind', contact_title_2: 'für Sie da',
    contact_sub_card: 'Olomouc, Tschechische Republik',
    label_phone: 'Telefon', label_email: 'E-Mail',
    contact_or: 'Oder buchen Sie direkt über:',
    footer_copy: '© 2026 4U Centre Apartments s.r.o. Alle Rechte vorbehalten.',
    cookie_title: 'Cookies', cookie_text: 'Diese Website verwendet nur notwendige Cookies für die korrekte Funktion und zur Speicherung Ihrer Sprachpräferenz. Wir verwenden keine Tracking- oder Marketing-Cookies.',
    cookie_accept: 'Verstanden', cookie_decline: 'Ablehnen',
    aptA_title: 'Apartment mit Schlafzimmer', aptA_address: '2. Stock · Ruhige Straße im Zentrum von Olomouc',
    aptA_badge: 'Helles 1+kk Apartment',
    detail_back: 'Zurück zur Hauptseite', detail_about: 'Über das Apartment',
    aptA_p1: 'Das Apartment mit Schlafzimmer ist eine helle und modern eingerichtete 1+kk-Wohnung im 2. Stock mit Blick auf eine ruhige Straße. Ideal für Paare, Alleinreisende und Geschäftsreisen. Die Wohnung ist mit allem ausgestattet, was Sie für einen angenehmen Aufenthalt im Herzen von Olomouc benötigen.',
    aptA_p2: 'Nach einem ereignisreichen Tag in Olomouc können Sie sich auf eine erholsame Nacht in einem bequemen Bett mit hochwertiger Bettwäsche freuen. Die Küche ist voll ausgestattet — Kühlschrank, Mikrowelle, Kochplatte, Wasserkocher und sämtliches Geschirr.',
    aptA_p3: 'Das Apartment liegt in Gehweite zu allen wichtigen Sehenswürdigkeiten, Restaurants und Geschäften. Dennoch ist die Straße ruhig und still.',
    btn_book_booking: 'Bei Booking.com buchen', btn_book_airbnb: 'Bei Airbnb buchen',
    info_bed: '1× Doppelbett', info_capacity: 'Maximale Kapazität: 2 Personen',
    info_size_a: 'Größe: ca. 35 m²', info_floor: '2. Stock (kein Aufzug)',
    aptB_title: 'Apartment mit Schlafzimmer und Terrasse', aptB_address: '2. Stock · Mit eigener Terrasse und Designwand',
    aptB_badge: 'Private Terrasse',
    aptB_p1: 'Das Apartment mit Schlafzimmer und Terrasse ist eine stilvoll eingerichtete 1+kk-Wohnung im 2. Stock, die vor allem durch ihre eigene Terrasse besticht – der ideale Ort für einen morgendlichen Kaffee oder ein abendliches Entspannen. Eine markante Designwand verleiht der Wohnung einen einzigartigen Charakter.',
    aptB_p2: 'Die Wohnung verfügt über ein separates Schlafzimmer mit bequemem Doppelbett, eine voll ausgestattete Küche und ein modernes Badezimmer. Die Terrasse ist zum ruhigen Innenhof ausgerichtet.',
    aptB_p3: 'Wie unser zweites Apartment befindet sich auch diese Wohnung im Herzen von Olomouc, nur wenige Gehminuten vom Oberen Ring, der Dreifaltigkeitssäule und anderen Sehenswürdigkeiten entfernt.',
    info_terrace: 'Eigene Terrasse', info_size_b: 'Größe: ca. 38 m²'
  }
};

/* ---------- ROZŠÍŘENÉ PŘEKLADY (v2: garance, FAQ, GDPR, podmínky) ---------- */
Object.assign(I18N.cs, {
  footer_credit: 'Web vytvořil',
  nav_faq: 'FAQ',
  guarantee: 'Garance nejlepší ceny při přímé rezervaci',
  book_direct_title: 'Napište nám',
  footer_gdpr: 'Ochrana osobních údajů', footer_terms: 'Obchodní podmínky', footer_faq: 'FAQ',
  faq_eyebrow: 'Máte otázky?', faq_title_1: 'Časté', faq_title_2: 'dotazy',
  faq_sub: 'Odpovědi na nejčastější otázky našich hostů. Nenašli jste, co hledáte? Ozvěte se nám.',
  faq_q1: 'Jak mohu rezervovat pobyt?',
  faq_a1: 'Nejjednodušeji přes Booking.com nebo Airbnb. Při přímé rezervaci e-mailem nebo telefonem vám navíc garantujeme nejlepší cenu.',
  faq_q2: 'V kolik hodin je check-in a check-out?',
  faq_a2: 'Check-in je obvykle možný od 15:00, check-out do 10:00. Na jiném čase se lze individuálně domluvit — napište nám předem.',
  faq_q3: 'Jak probíhá předání klíčů?',
  faq_a3: 'Podrobné pokyny k příjezdu a předání klíčů vám zašleme před příjezdem. Vše najdete také v sekci Check-in.',
  faq_q4: 'Kde mohu zaparkovat?',
  faq_a4: 'V okolí apartmánů je k dispozici veřejné parkování. Rádi vám před příjezdem doporučíme nejbližší možnosti.',
  faq_q5: 'Je Wi-Fi zdarma?',
  faq_a5: 'Ano, v obou apartmánech je rychlá Wi-Fi připojení zcela zdarma.',
  faq_q6: 'Mohu přijet s domácím mazlíčkem?',
  faq_a6: 'Pobyt s mazlíčkem je možný po předchozí domluvě. Kontaktujte nás prosím před rezervací.',
  faq_q7: 'Je v apartmánech povoleno kouření?',
  faq_a7: 'Kouření je ve všech vnitřních prostorách zakázáno. Hosté apartmánu s ložnicí a terasou mohou využít soukromou terasu.',
  faq_q8: 'Pro kolik osob jsou apartmány vhodné?',
  faq_a8: 'Každý apartmán je určen maximálně pro 2 osoby a nabízí pohodlnou manželskou postel.',
  faq_q9: 'Jak mohu zrušit rezervaci?',
  faq_a9: 'Rezervace přes Booking.com nebo Airbnb se řídí storno podmínkami dané platformy. U přímých rezervací platí naše obchodní podmínky.',
  gdpr_title_1: 'Ochrana', gdpr_title_2: 'osobních údajů',
  gdpr_sub: 'Informace o zpracování osobních údajů (GDPR)',
  gdpr_intro: 'Správcem osobních údajů je společnost 4U Centre Apartments s.r.o., se sídlem v Olomouci (dále jen „správce"). V případě dotazů ke zpracování osobních údajů nás kontaktujte na e-mailu 4u.apartmentsss@gmail.com nebo telefonicky na +420 728 948 738.',
  gdpr_h1: 'Jaké údaje zpracováváme',
  gdpr_p1: 'Zpracováváme pouze údaje nezbytné pro poskytnutí ubytování: jméno a příjmení, kontaktní údaje (telefon, e-mail), údaje o rezervaci a pobytu a v zákonem stanovených případech údaje z dokladu totožnosti pro evidenci ubytovaných hostů.',
  gdpr_h2: 'Účel a právní základ zpracování',
  gdpr_p2: 'Údaje zpracováváme za účelem vyřízení rezervace a poskytnutí ubytování (plnění smlouvy), komunikace s hostem a plnění zákonných povinností — zejména vedení evidenční knihy hostů, ohlašovací povinnosti a účetnictví.',
  gdpr_h3: 'Doba uchování',
  gdpr_p3: 'Osobní údaje uchováváme pouze po dobu nezbytnou ke splnění uvedených účelů a po dobu stanovenou právními předpisy (např. evidenční kniha 6 let, účetní doklady dle zákona o účetnictví).',
  gdpr_h4: 'Cookies',
  gdpr_p4: 'Tento web používá pouze nezbytné technické cookies — pro uložení jazykové preference a vašeho souhlasu s cookies. Nepoužíváme žádné analytické, sledovací ani marketingové cookies třetích stran.',
  gdpr_h5: 'Předávání údajů',
  gdpr_p5: 'Osobní údaje nepředáváme třetím stranám s výjimkou případů stanovených zákonem. Při rezervaci přes Booking.com nebo Airbnb zpracovávají vaše údaje také tyto platformy dle svých vlastních zásad ochrany osobních údajů.',
  gdpr_h6: 'Vaše práva',
  gdpr_p6: 'Máte právo na přístup ke svým údajům, jejich opravu či výmaz, omezení zpracování, přenositelnost a právo vznést námitku. Se stížností se můžete obrátit na Úřad pro ochranu osobních údajů (uoou.gov.cz). Pro uplatnění práv nás kontaktujte e-mailem.',
  legal_updated: 'Poslední aktualizace: červenec 2026',
  terms_title_1: 'Obchodní', terms_title_2: 'podmínky',
  terms_sub: 'Podmínky ubytování a přímých rezervací',
  terms_h1: 'Základní ustanovení',
  terms_p1: 'Provozovatelem ubytování je společnost 4U Centre Apartments s.r.o., se sídlem v Olomouci. Tyto obchodní podmínky se vztahují na přímé rezervace uzavřené e-mailem nebo telefonicky. Rezervace přes Booking.com či Airbnb se řídí podmínkami dané platformy.',
  terms_h2: 'Rezervace a platba',
  terms_p2: 'Rezervace je závazná okamžikem jejího potvrzení ze strany provozovatele. Platba probíhá dle domluvy — bankovním převodem předem, nebo v hotovosti při příjezdu. Provozovatel je oprávněn požadovat zálohu.',
  terms_h3: 'Ceny a garance nejlepší ceny',
  terms_p3: 'Ceny ubytování se řídí aktuální nabídkou. Při přímé rezervaci garantujeme cenu stejnou nebo nižší, než je aktuální cena na rezervačních platformách.',
  terms_h4: 'Check-in a check-out',
  terms_p4: 'Check-in je možný od 15:00, check-out do 10:00, nedohodnou-li se strany jinak. Pokyny k předání klíčů obdrží host před příjezdem.',
  terms_h5: 'Storno podmínky',
  terms_p5: 'Není-li dohodnuto jinak, lze přímou rezervaci bezplatně zrušit nejpozději 7 dní před plánovaným příjezdem. Při pozdějším zrušení může být účtována zaplacená záloha.',
  terms_h6: 'Práva a povinnosti hosta',
  terms_p6: 'Host je povinen dodržovat maximální kapacitu apartmánu (2 osoby), zákaz kouření ve vnitřních prostorách, noční klid v době 22:00–6:00 a odpovídá za škody, které v apartmánu způsobí.',
  terms_h7: 'Závěrečná ustanovení',
  terms_p7: 'Právní vztahy neupravené těmito podmínkami se řídí právním řádem České republiky. Podmínky jsou platné a účinné od data uvedeného níže.'
});
Object.assign(I18N.en, {
  footer_credit: 'Website by',
  nav_faq: 'FAQ',
  guarantee: 'Best price guarantee for direct booking',
  book_direct_title: 'Contact us',
  footer_gdpr: 'Privacy policy', footer_terms: 'Terms & conditions', footer_faq: 'FAQ',
  faq_eyebrow: 'Any questions?', faq_title_1: 'Frequently asked', faq_title_2: 'questions',
  faq_sub: "Answers to the questions our guests ask most often. Can't find what you need? Get in touch.",
  faq_q1: 'How can I book my stay?',
  faq_a1: 'The easiest way is via Booking.com or Airbnb. For direct bookings by e-mail or phone we additionally guarantee the best price.',
  faq_q2: 'What are the check-in and check-out times?',
  faq_a2: 'Check-in is usually available from 3:00 PM, check-out until 10:00 AM. Other times can be arranged individually — just let us know in advance.',
  faq_q3: 'How does the key handover work?',
  faq_a3: 'We will send you detailed arrival and key handover instructions before your stay. You can also find everything in the Check-in section.',
  faq_q4: 'Where can I park?',
  faq_a4: 'Public parking is available near the apartments. We will gladly recommend the closest options before your arrival.',
  faq_q5: 'Is Wi-Fi free?',
  faq_a5: 'Yes, both apartments offer fast Wi-Fi completely free of charge.',
  faq_q6: 'Can I bring a pet?',
  faq_a6: 'Stays with pets are possible by prior arrangement. Please contact us before booking.',
  faq_q7: 'Is smoking allowed in the apartments?',
  faq_a7: 'Smoking is prohibited in all indoor areas. Guests of the apartment with bedroom and terrace may use the private terrace.',
  faq_q8: 'How many people can stay in the apartments?',
  faq_a8: 'Each apartment accommodates a maximum of 2 persons and offers a comfortable double bed.',
  faq_q9: 'How can I cancel my booking?',
  faq_a9: 'Bookings made via Booking.com or Airbnb follow the cancellation policy of the given platform. Direct bookings are governed by our terms and conditions.',
  gdpr_title_1: 'Privacy', gdpr_title_2: 'policy',
  gdpr_sub: 'Information on personal data processing (GDPR)',
  gdpr_intro: 'The personal data controller is 4U Centre Apartments s.r.o., based in Olomouc (the "controller"). For any questions regarding data processing, contact us at 4u.apartmentsss@gmail.com or by phone at +420 728 948 738.',
  gdpr_h1: 'What data we process',
  gdpr_p1: 'We process only data necessary for providing accommodation: name and surname, contact details (phone, e-mail), booking and stay details and, where required by law, identity document data for the guest register.',
  gdpr_h2: 'Purpose and legal basis',
  gdpr_p2: 'We process data to handle your booking and provide accommodation (performance of contract), to communicate with you and to fulfil legal obligations — in particular the guest register, reporting duties and accounting.',
  gdpr_h3: 'Retention period',
  gdpr_p3: 'We keep personal data only for the time necessary to fulfil the stated purposes and for periods required by law (e.g. the guest register for 6 years, accounting documents under the Accounting Act).',
  gdpr_h4: 'Cookies',
  gdpr_p4: 'This website uses only essential technical cookies — to store your language preference and cookie consent. We do not use any third-party analytics, tracking or marketing cookies.',
  gdpr_h5: 'Data sharing',
  gdpr_p5: 'We do not share personal data with third parties except where required by law. If you book via Booking.com or Airbnb, these platforms also process your data under their own privacy policies.',
  gdpr_h6: 'Your rights',
  gdpr_p6: 'You have the right to access, rectify or erase your data, restrict processing, data portability and the right to object. You may lodge a complaint with the Czech Office for Personal Data Protection (uoou.gov.cz). To exercise your rights, contact us by e-mail.',
  legal_updated: 'Last updated: July 2026',
  terms_title_1: 'Terms &', terms_title_2: 'conditions',
  terms_sub: 'Accommodation and direct booking conditions',
  terms_h1: 'General provisions',
  terms_p1: 'The accommodation is operated by 4U Centre Apartments s.r.o., based in Olomouc. These terms apply to direct bookings made by e-mail or phone. Bookings via Booking.com or Airbnb are governed by the terms of the given platform.',
  terms_h2: 'Booking and payment',
  terms_p2: 'A booking becomes binding upon confirmation by the operator. Payment is made as agreed — by bank transfer in advance or in cash upon arrival. The operator may request a deposit.',
  terms_h3: 'Prices and best price guarantee',
  terms_p3: 'Accommodation prices follow the current offer. For direct bookings we guarantee a price equal to or lower than the current price on booking platforms.',
  terms_h4: 'Check-in and check-out',
  terms_p4: 'Check-in is available from 3:00 PM, check-out until 10:00 AM, unless agreed otherwise. Key handover instructions are provided before arrival.',
  terms_h5: 'Cancellation policy',
  terms_p5: 'Unless agreed otherwise, a direct booking can be cancelled free of charge no later than 7 days before the planned arrival. For later cancellations, the paid deposit may be charged.',
  terms_h6: 'Guest rights and obligations',
  terms_p6: 'Guests must respect the maximum capacity of the apartment (2 persons), the indoor smoking ban and quiet hours between 10 PM and 6 AM, and are liable for any damage caused in the apartment.',
  terms_h7: 'Final provisions',
  terms_p7: 'Legal relations not covered by these terms are governed by the laws of the Czech Republic. The terms are valid and effective from the date stated below.'
});
Object.assign(I18N.de, {
  footer_credit: 'Website erstellt von',
  nav_faq: 'FAQ',
  guarantee: 'Bestpreisgarantie bei Direktbuchung',
  book_direct_title: 'Schreiben Sie uns',
  footer_gdpr: 'Datenschutz', footer_terms: 'AGB', footer_faq: 'FAQ',
  faq_eyebrow: 'Haben Sie Fragen?', faq_title_1: 'Häufige', faq_title_2: 'Fragen',
  faq_sub: 'Antworten auf die häufigsten Fragen unserer Gäste. Nicht fündig geworden? Kontaktieren Sie uns.',
  faq_q1: 'Wie kann ich buchen?',
  faq_a1: 'Am einfachsten über Booking.com oder Airbnb. Bei Direktbuchung per E-Mail oder Telefon garantieren wir Ihnen zusätzlich den besten Preis.',
  faq_q2: 'Wann sind Check-in und Check-out?',
  faq_a2: 'Check-in ist in der Regel ab 15:00 Uhr möglich, Check-out bis 10:00 Uhr. Andere Zeiten sind nach individueller Absprache möglich.',
  faq_q3: 'Wie funktioniert die Schlüsselübergabe?',
  faq_a3: 'Detaillierte Anreise- und Übergabeinformationen senden wir Ihnen vor der Ankunft. Alles finden Sie auch im Bereich Check-in.',
  faq_q4: 'Wo kann ich parken?',
  faq_a4: 'In der Nähe der Apartments stehen öffentliche Parkplätze zur Verfügung. Gerne empfehlen wir Ihnen vor der Anreise die nächstgelegenen Optionen.',
  faq_q5: 'Ist WLAN kostenlos?',
  faq_a5: 'Ja, in beiden Apartments ist schnelles WLAN völlig kostenlos.',
  faq_q6: 'Kann ich mit Haustier anreisen?',
  faq_a6: 'Aufenthalte mit Haustier sind nach vorheriger Absprache möglich. Bitte kontaktieren Sie uns vor der Buchung.',
  faq_q7: 'Ist Rauchen in den Apartments erlaubt?',
  faq_a7: 'Rauchen ist in allen Innenräumen verboten. Gäste des Apartments mit Schlafzimmer und Terrasse können die private Terrasse nutzen.',
  faq_q8: 'Für wie viele Personen sind die Apartments geeignet?',
  faq_a8: 'Jedes Apartment ist für maximal 2 Personen ausgelegt und bietet ein bequemes Doppelbett.',
  faq_q9: 'Wie kann ich meine Buchung stornieren?',
  faq_a9: 'Buchungen über Booking.com oder Airbnb unterliegen den Stornobedingungen der jeweiligen Plattform. Für Direktbuchungen gelten unsere AGB.',
  gdpr_title_1: 'Datenschutz', gdpr_title_2: 'erklärung',
  gdpr_sub: 'Informationen zur Verarbeitung personenbezogener Daten (DSGVO)',
  gdpr_intro: 'Verantwortlicher für die Datenverarbeitung ist die 4U Centre Apartments s.r.o. mit Sitz in Olomouc (der „Verantwortliche"). Bei Fragen zur Datenverarbeitung kontaktieren Sie uns unter 4u.apartmentsss@gmail.com oder telefonisch unter +420 728 948 738.',
  gdpr_h1: 'Welche Daten wir verarbeiten',
  gdpr_p1: 'Wir verarbeiten nur die für die Unterbringung notwendigen Daten: Vor- und Nachname, Kontaktdaten (Telefon, E-Mail), Buchungs- und Aufenthaltsdaten sowie, soweit gesetzlich vorgeschrieben, Ausweisdaten für das Gästeverzeichnis.',
  gdpr_h2: 'Zweck und Rechtsgrundlage',
  gdpr_p2: 'Wir verarbeiten Daten zur Abwicklung der Buchung und Bereitstellung der Unterkunft (Vertragserfüllung), zur Kommunikation mit dem Gast und zur Erfüllung gesetzlicher Pflichten — insbesondere Gästeverzeichnis, Meldepflichten und Buchhaltung.',
  gdpr_h3: 'Speicherdauer',
  gdpr_p3: 'Personenbezogene Daten speichern wir nur so lange, wie es für die genannten Zwecke erforderlich ist, und gemäß den gesetzlichen Fristen (z. B. Gästeverzeichnis 6 Jahre, Buchhaltungsunterlagen nach dem Rechnungslegungsgesetz).',
  gdpr_h4: 'Cookies',
  gdpr_p4: 'Diese Website verwendet nur notwendige technische Cookies — zur Speicherung Ihrer Sprachpräferenz und Ihrer Cookie-Einwilligung. Wir verwenden keine Analyse-, Tracking- oder Marketing-Cookies von Drittanbietern.',
  gdpr_h5: 'Weitergabe von Daten',
  gdpr_p5: 'Wir geben personenbezogene Daten nicht an Dritte weiter, außer in gesetzlich vorgeschriebenen Fällen. Bei Buchungen über Booking.com oder Airbnb verarbeiten auch diese Plattformen Ihre Daten gemäß ihren eigenen Datenschutzrichtlinien.',
  gdpr_h6: 'Ihre Rechte',
  gdpr_p6: 'Sie haben das Recht auf Auskunft, Berichtigung oder Löschung Ihrer Daten, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Beschwerden können Sie bei der tschechischen Datenschutzbehörde (uoou.gov.cz) einreichen. Zur Ausübung Ihrer Rechte kontaktieren Sie uns per E-Mail.',
  legal_updated: 'Letzte Aktualisierung: Juli 2026',
  terms_title_1: 'Allgemeine', terms_title_2: 'Geschäftsbedingungen',
  terms_sub: 'Bedingungen für Unterkunft und Direktbuchungen',
  terms_h1: 'Grundbestimmungen',
  terms_p1: 'Betreiber der Unterkunft ist die 4U Centre Apartments s.r.o. mit Sitz in Olomouc. Diese Bedingungen gelten für Direktbuchungen per E-Mail oder Telefon. Buchungen über Booking.com oder Airbnb unterliegen den Bedingungen der jeweiligen Plattform.',
  terms_h2: 'Buchung und Zahlung',
  terms_p2: 'Eine Buchung wird mit der Bestätigung durch den Betreiber verbindlich. Die Zahlung erfolgt nach Vereinbarung — per Banküberweisung im Voraus oder in bar bei der Ankunft. Der Betreiber kann eine Anzahlung verlangen.',
  terms_h3: 'Preise und Bestpreisgarantie',
  terms_p3: 'Die Unterkunftspreise richten sich nach dem aktuellen Angebot. Bei Direktbuchung garantieren wir einen Preis, der gleich oder niedriger ist als der aktuelle Preis auf den Buchungsplattformen.',
  terms_h4: 'Check-in und Check-out',
  terms_p4: 'Check-in ist ab 15:00 Uhr möglich, Check-out bis 10:00 Uhr, sofern nichts anderes vereinbart wurde. Informationen zur Schlüsselübergabe erhält der Gast vor der Anreise.',
  terms_h5: 'Stornobedingungen',
  terms_p5: 'Sofern nichts anderes vereinbart wurde, kann eine Direktbuchung bis spätestens 7 Tage vor der geplanten Anreise kostenlos storniert werden. Bei späterer Stornierung kann die gezahlte Anzahlung einbehalten werden.',
  terms_h6: 'Rechte und Pflichten des Gastes',
  terms_p6: 'Der Gast ist verpflichtet, die maximale Kapazität des Apartments (2 Personen), das Rauchverbot in den Innenräumen und die Nachtruhe von 22:00 bis 6:00 Uhr einzuhalten, und haftet für von ihm verursachte Schäden.',
  terms_h7: 'Schlussbestimmungen',
  terms_p7: 'Rechtsverhältnisse, die durch diese Bedingungen nicht geregelt sind, unterliegen dem Recht der Tschechischen Republik. Die Bedingungen sind ab dem unten angegebenen Datum gültig und wirksam.'
});

/* ---------- KREDIT V PATIČCE: web vytvořil 4uweb ---------- */
(function footerCredit() {
  const copy = document.querySelector('.footer-copy');
  if (!copy) return;
  const credit = document.createElement('div');
  credit.style.cssText = 'margin-top:14px;text-align:center;font-size:0.68rem;color:rgba(255,255,255,0.35);display:flex;align-items:center;justify-content:center;gap:8px;';
  const label = document.createElement('span');
  label.setAttribute('data-i18n', 'footer_credit');
  label.textContent = 'Web vytvořil';
  const link = document.createElement('a');
  link.href = 'https://www.4uweb.cz';
  link.target = '_blank';
  link.rel = 'noopener';
  link.setAttribute('aria-label', '4uweb — tvorba webů');
  link.style.cssText = "font-family:'DM Sans','Segoe UI',sans-serif;font-weight:800;font-size:0.92rem;letter-spacing:-0.02em;color:#fff;text-decoration:none;display:inline-flex;align-items:baseline;transition:opacity 0.2s;";
  link.innerHTML = '4uweb<span style="color:#FFB400;font-size:1.15em;line-height:0;">.</span>';
  link.addEventListener('mouseenter', () => link.style.opacity = '0.75');
  link.addEventListener('mouseleave', () => link.style.opacity = '1');
  credit.appendChild(label);
  credit.appendChild(link);
  copy.insertAdjacentElement('afterend', credit);
})();

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
