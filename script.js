/* ==========================================================================
   Bagdar landing — CONFIG + мәтіндер + мінез-құлық
   ==========================================================================
   ↓↓↓ БАРЛЫҚ СІЛТЕМЕ ОСЫ ЖЕРДЕ. Бос жолдарды кейін толтырасың. ↓↓↓ */

const CONFIG = {
  /* Telegram негізгі канал (COMMUNITY.md-дегі «Bagdar 🧭») */
  channelUrl: "https://t.me/+4JQfovDwTO0xNmEy",

  /* Roadmap-бот. Базада нақты қолданушылар бар — жұмыс істеп тұрған бот.
     Ескерту: BotFather-де /setname арқылы атын «Bagdar» деп өзгертуге болады. */
  botUrl: "https://t.me/testingbotkaz_bot",

  /* Амбассадорлыққа өтінім: бот ішіндегі 6 сұрақтық ағын (handlers/ambassador.py).
     Сыртқы форма керек емес — студент Telegram-нан шықпайды. */
  ambassadorFormUrl: "https://t.me/testingbotkaz_bot?start=amb",

  /* Серіктестік хат жазатын пошта */
  partnerEmail: "raissovbeka@gmail.com",

  /* Соцсеттер. Бос қалса — footer-дегі батырма мүлдем көрсетілмейді. */
  instagramUrl: "https://instagram.com/_raissov1",
  threadsUrl: "",

  /* Сайттың канондық мекенжайы (SEO/OG үшін) */
  siteUrl: "https://bagdar-rho.vercel.app/",

  /* Сілтеме әлі жоқ болса батырмада шығатын жазу */
  pendingLabel: "жақында"
};

/* ==========================================================================
   МӘТІНДЕР — бір орында. Орысша нұсқа қосу үшін: TEXTS.ru = {...} қосып,
   LANG = "ru" деп қой (немесе ?lang=ru параметрін қолдан).
   ========================================================================== */

const TEXTS = {
  kk: {
    "nav.problem": "Мәселе",
    "nav.what": "Не береді",
    "nav.how": "Қалай жұмыс істейді",
    "nav.ambassador": "Амбассадор",

    "header.join": "Қосылу",

    "hero.badge": "Қазақстан студенттеріне арналған дамушы орта",
    "hero.title.1": "Университет бар.",
    "hero.title.2": "Бағдар",
    "hero.title.3": "— бізден",
    "hero.text": "ҰБТ-дан кейін бағыт жоғалмасын. Bagdar саған жеке даму жоспарын құрады, дедлайндарды еске салады және универіңдегі қауымдастыққа қосады.",
    "hero.cta.primary": "Telegram-каналға қосылу",
    "hero.cta.secondary": "Ботты ашу",
    "hero.note": "Тегін · Тіркелу 2 минут · Бәрі қазақша",
    "hero.chip.1": "Жеке roadmap",
    "hero.chip.2": "Дедлайн ескертулері",
    "hero.chip.3": "Универ қауымдастығы",
    "hero.chip.4": "24 қадамдық чек-лист",

    "problem.eyebrow": "Мәселе",
    "problem.title": "Универге түсу — финиш емес, старт",
    "problem.lead": "ҰБТ біткен соң қолыңнан ұстайтын ешкім жоқ. Мүмкіндіктер бар, бірақ олар ондаған чат пен сайтқа шашылған — тапқанша дедлайн өтіп кетеді.",
    "problem.stat.1.num": "82%",
    "problem.stat.1.text": "студент «университетте не істеу керегін білмедім» дейді",
    "problem.stat.2.num": "55%",
    "problem.stat.2.text": "«менторым жоқ, бірақ маған керек» деп жауап берген",
    "problem.stat.3.num": "36%",
    "problem.stat.3.text": "грант, тағылымдама немесе конкурстың дедлайнын өткізіп алған",
    "problem.quote": "Іздесең таппайсың, тапқанда дедлайны өтіп кеткен болып шығады",
    "problem.quote.author": "— ЕҰУ студенті",

    "what.eyebrow": "Bagdar не береді",
    "what.title": "Үш құрал — бір экожүйеде",
    "what.lead": "Қауымдастық — жалғыз қалмау үшін. Бот — жоспарды ұстап тұру үшін. Mini App — күнделікті студенттік өмірді жеңілдету үшін.",
    "what.card.1.title": "Қауымдастық",
    "what.card.1.text": "Әр университетте өз чаты мен амбассадоры бар. Сұрағыңа жауап беретін, тәжірибесімен бөлісетін нақты адамдар.",
    "what.card.1.li.1": "Универ бойынша бөлек чаттар",
    "what.card.1.li.2": "Айына бір офлайн кездесу",
    "what.card.1.li.3": "Аға буынмен байланыс",
    "what.card.1.tag": "Жұмыс істеп тұр",
    "what.card.2.title": "Roadmap-бот",
    "what.card.2.text": "6 сұрақтан кейін мақсатыңа сай семестрлік жоспар құрады, қадамдарды белгілеп отырасың, дедлайндарды өзі еске салады.",
    "what.card.2.li.1": "Жеке даму жоспары",
    "what.card.2.li.2": "Грант, тағылымдама, конкурс дедлайндары",
    "what.card.2.li.3": "XP және прогресс-трекер",
    "what.card.2.tag": "Жұмыс істеп тұр",
    "what.card.3.title": "Mini App",
    "what.card.3.text": "Telegram ішіндегі қосымша: бірге оқитын серіктес табу және студентке қолжетімді жерлердің навигаторы.",
    "what.card.3.li.1": "Study buddy — оқу серіктесі",
    "what.card.3.li.2": "Арзан жерлер навигаторы",
    "what.card.3.li.3": "«Отдам даром» — заттарды тегін беру және алу",
    "what.card.3.li.4": "Жеңілдіктер мен студенттік ұсыныстар",
    "what.card.3.tag": "Дамып жатыр",

    "how.eyebrow": "Қалай жұмыс істейді",
    "how.title": "Бес қадам — бір ырғақ",
    "how.lead": "Күрделі ештеңе жоқ: тіркелесің де, аптасына бірнеше минут бөлесің.",
    "how.step.1.title": "Тіркелесің",
    "how.step.1.text": "Ботта 6 сұрақ — курсың, универің, мақсаттарың. 2 минут.",
    "how.step.2.title": "Жеке жоспар аласың",
    "how.step.2.text": "Мақсатыңа сай roadmap: нақты қадамдар, нақты реті.",
    "how.step.3.title": "Апталық ырғақпен жүресің",
    "how.step.3.text": "Апта сайын шағын тапсырма мен еске салу келеді.",
    "how.step.4.title": "XP жинайсың",
    "how.step.4.text": "Әр орындалған қадам — ұпай, деңгей және көрінетін прогресс.",
    "how.step.5.title": "Мүмкіндікті жіберіп алмайсың",
    "how.step.5.text": "Профиліңе сай грант пен тағылымдама дедлайнға дейін хабарланады.",

    "checklist.eyebrow": "Чек-лист",
    "checklist.title": "Студент кезінде үлгеретін 24 қадам",
    "checklist.lead": "Алты бағыт бойынша жиналған тізім. Ботта әрқайсысы саған қарай бейімделіп, жеке жоспарға айналады.",
    "checklist.cat.1": "Білім мен тәжірибе",
    "checklist.cat.1.count": "8 қадам",
    "checklist.cat.2": "Қаржылық сауат",
    "checklist.cat.2.count": "3 қадам",
    "checklist.cat.3": "Жеке даму",
    "checklist.cat.3.count": "5 қадам",
    "checklist.cat.4": "Денсаулық",
    "checklist.cat.4.count": "2 қадам",
    "checklist.cat.5": "Жаңа мүмкіндіктер",
    "checklist.cat.5.count": "3 қадам",
    "checklist.cat.6": "Естеліктер",
    "checklist.cat.6.count": "3 қадам",
    "checklist.cta.title": "Толық жеке жоспарыңды ботта ал",
    "checklist.cta.text": "Тізім саған қарай бейімделеді — курсың мен мақсатыңа сай.",
    "checklist.cta.btn": "Ботты ашу",

    "amb.eyebrow": "Амбассадорлық",
    "amb.title": "Универіңнің көшбасшысы бол",
    "amb.lead": "Әр университетте Bagdar-дың өз өкілі бар. Ол — қауымдастықты жинайтын, кездесу ұйымдастыратын және студенттерге бағыт көрсететін адам. Сол сен болуың мүмкін.",
    "amb.do.title": "Не істейсің",
    "amb.do.1": "Универіңдегі Bagdar чатын жүргізесің",
    "amb.do.2": "Айына бір рет офлайн кездесу ұйымдастырасың",
    "amb.do.3": "Универіңдегі мүмкіндіктер мен жаңалықтарды бөлісесің",
    "amb.do.4": "Жаңа студенттерді қауымдастыққа қосасың",
    "amb.gain.title": "Не аласың",
    "amb.gain.1": "Ресми сертификат және ұсыныс хат (recommendation letter)",
    "amb.gain.2": "Bagdar ивенттері мен серіктес іс-шараларға қолжетімділік",
    "amb.gain.3": "Нақты көшбасшылық тәжірибе — CV-ге жазуға болатын",
    "amb.gain.4": "Басқа универдегі амбассадорлармен желі",
    "amb.cta": "Амбассадорлыққа өтінім қалдыру",
    "amb.note": "Өтінім 3 минут · Жауапты бір апта ішінде береміз",

    "partners.eyebrow": "Серіктестерге",
    "partners.title": "Студенттік аудиторияға тікелей жол",
    "partners.lead": "Bagdar — Қазақстанның белсенді студенттері жиналған орта. Компаниялар, EdTech жобалар мен білім ұйымдарымен ұзақмерзімді серіктестікке ашықпыз.",
    "partners.card.1.title": "HR-брендинг",
    "partners.card.1.text": "Тағылымдама мен вакансияларыңды дәл мақсатты аудиторияға жеткізу, бренд туралы ақпарат, кездесулер мен экскурсиялар.",
    "partners.card.2.title": "EdTech серіктестік",
    "partners.card.2.text": "Курстарың мен өнімдеріңді roadmap ішіне интеграциялау: студент қадамға келгенде — сенің шешіміңді көреді.",
    "partners.card.3.title": "Студенттік жеңілдіктер",
    "partners.card.3.text": "Жеңілдік бағдарламасына қосыл: Mini App арқылы студенттер сенің ұсынысыңды тауып, тікелей келеді.",
    "partners.contact.title": "Серіктестік туралы сөйлесейік",
    "partners.contact.text": "Презентация мен аудитория статистикасын жібереміз.",
    "partners.contact.btn": "Хат жазу",

    "footer.tagline": "Қазақстан студенттеріне арналған дамушы орта: қауымдастық, roadmap-бот және мүмкіндіктер.",
    "footer.nav.title": "Бөлімдер",
    "footer.nav.checklist": "24 қадам",
    "footer.nav.partners": "Серіктестерге",
    "footer.social.title": "Байланыс",
    "footer.copy": "© Bagdar 2026",
    "footer.made": "Қазақстан студенттері үшін жасалды"
  }
};

const LANG = new URLSearchParams(location.search).get("lang") || document.documentElement.lang || "kk";

/* ========================================================================== */

(function () {
  "use strict";

  const dict = TEXTS[LANG] || TEXTS.kk;

  /* --- 1. Мәтіндерді орнына қою --------------------------------------- */
  function applyTexts() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value != null) el.textContent = value;
    });
  }

  /* --- 2. CONFIG-тегі сілтемелерді байлау ----------------------------- */
  function applyLinks() {
    document.querySelectorAll("[data-link]").forEach((el) => {
      const key = el.dataset.link;
      const url = CONFIG[key];

      if (url) {
        el.setAttribute("href", url);
        if (/^https?:/i.test(url)) {
          el.setAttribute("target", "_blank");
          el.setAttribute("rel", "noopener");
        }
        el.classList.remove("is-pending");
        el.removeAttribute("aria-disabled");
      } else if (el.classList.contains("social")) {
        /* Соцсеть әлі жоқ — батырманы footer-ден алып таста (солғын тұрғаннан жақсы) */
        el.remove();
      } else {
        /* Сілтеме әлі жоқ — батырманы «жақында» күйіне қой */
        el.setAttribute("href", "#");
        el.classList.add("is-pending");
        el.setAttribute("aria-disabled", "true");
        el.setAttribute("title", CONFIG.pendingLabel);
      }
    });

    /* mailto: бөлек — email өрісінен құралады */
    document.querySelectorAll("[data-mailto]").forEach((el) => {
      const mail = CONFIG.partnerEmail;
      if (mail) {
        el.setAttribute("href", "mailto:" + mail);
        el.classList.remove("is-pending");
        const label = el.querySelector("[data-mail-label]");
        if (label) label.textContent = mail;
      } else {
        el.setAttribute("href", "#");
        el.classList.add("is-pending");
        el.setAttribute("aria-disabled", "true");
        el.setAttribute("title", CONFIG.pendingLabel);
      }
    });
  }

  /* --- 3. Scroll-анимациялар (жеңіл fade-in) -------------------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
  }

  /* --- 4. Sticky header көлеңкесі ------------------------------------- */
  function initHeader() {
    const header = document.querySelector(".header");
    if (!header) return;
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "position:absolute;top:0;height:1px;width:1px;";
    document.body.prepend(sentinel);

    if (!("IntersectionObserver" in window)) return;
    new IntersectionObserver(
      ([entry]) => header.classList.toggle("is-stuck", !entry.isIntersecting)
    ).observe(sentinel);
  }

  /* --- Іске қосу ------------------------------------------------------ */
  applyTexts();
  applyLinks();
  initHeader();
  initReveal();
})();
