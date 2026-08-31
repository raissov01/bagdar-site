# Bagdar — лендинг сайт 🧭

**Bagdar** — Қазақстан студенттеріне арналған дамушы орта: жеке даму roadmap-боты,
университет қауымдастықтары және мүмкіндіктер (грант, тағылымдама, конкурс) агрегаторы.

**Жанды сайт:** https://bagdar-rho.vercel.app/
**Репозиторий:** https://github.com/raissov01/bagdar-site

Бұл — жобаның таныстыру сайты. Мақсаты: студенттерді Telegram-каналға және ботқа
бағыттау, амбассадорларды тарту, серіктестер мен грант комиссияларына жобаны таныстыру.

---

## Мазмұны

- [Файл құрылымы](#файл-құрылымы)
- [CONFIG — сілтемелерді толтыру](#config--сілтемелерді-толтыру)
- [Мәтіндерді өзгерту](#мәтіндерді-өзгерту)
- [Орысша нұсқа қосу](#орысша-нұсқа-қосу)
- [Локал іске қосу](#локал-іске-қосу)
- [Деплой: Vercel](#деплой-vercel)
- [Деплой: GitHub Pages](#деплой-github-pages)
- [Жеке домен (bagdar.kz)](#жеке-домен-bagdarkz)
- [Мекенжай ауысқанда МІНДЕТТІ түрде](#мекенжай-ауысқанда-міндетті-түрде)
- [OG баннерді қайта жасау](#og-баннерді-қайта-жасау)
- [Өнімділік](#өнімділік)

---

## Файл құрылымы

```
bagdar-site/
├── index.html            # барлық секция (қаңқа + контент)
├── styles.css            # дизайн-жүйе: түстер, типографика, компоненттер
├── script.js             # CONFIG + барлық мәтін (TEXTS) + анимациялар
├── favicon.svg           # компас/шеврон иконкасы
├── apple-touch-icon.png  # 180×180 iOS иконкасы
├── og.png                # 1200×630 бөлісу баннері (Telegram preview)
├── og-template.html      # og.png-ді қайта генерациялау үлгісі
├── robots.txt
├── sitemap.xml
└── fonts/                # Inter (variable 400–800), өз серверімізде
    ├── inter-cyrillic.woff2
    ├── inter-cyrillic-ext.woff2
    └── inter-latin.woff2
```

Фреймворк жоқ, build қадамы жоқ, тәуелділік жоқ. Файлдарды кез келген статикалық
хостингке тастасаң жеткілікті.

---

## CONFIG — сілтемелерді толтыру

**Барлық сілтеме бір жерде**: `script.js` файлының ең басында.

```js
const CONFIG = {
  channelUrl: "https://t.me/+4JQfovDwTO0xNmEy",  // Telegram канал
  botUrl: "",             // мыс. "https://t.me/bagdar_bot"
  ambassadorFormUrl: "",  // Google Forms / Tally сілтемесі
  partnerEmail: "",       // мыс. "partners@bagdar.kz"
  instagramUrl: "",
  threadsUrl: "",
  siteUrl: "https://bagdar.kz/",
  pendingLabel: "жақында"
};
```

**Бос қалдырсаң не болады:** сол сілтемеге байланған батырма автоматты түрде
«жақында» күйіне өтеді — солғын болып, басылмайды. Сайт сынбайды. Мәнін жазып,
файлды сақтасаң — батырма бірден жұмыс істей бастайды.

Сілтемелер HTML-ге қалай байланады:

| Батырма / элемент | Атрибут |
|---|---|
| Header «Қосылу», hero «Telegram-каналға қосылу», footer Telegram | `data-link="channelUrl"` |
| Hero «Ботты ашу», чек-лист CTA | `data-link="botUrl"` |
| «Амбассадорлыққа өтінім қалдыру» | `data-link="ambassadorFormUrl"` |
| Серіктестер «Хат жазу» | `data-mailto` (CONFIG.partnerEmail-ден `mailto:` құралады) |
| Footer Instagram / Threads | `data-link="instagramUrl"` / `data-link="threadsUrl"` |

---

## Мәтіндерді өзгерту

Барлық мәтін **екі жерде**, әдейі:

1. `index.html` ішінде — әдепкі (fallback) мәтін. JavaScript өшірулі болса да,
   іздеу жүйелері мен Telegram осыны көреді.
2. `script.js` → `TEXTS.kk` — бет ашылғанда осы мәтіндер қойылады.

**Маңызды:** мәтінді өзгертсең, екеуін де өзгерт (кілт бойынша, мыс. `hero.title.1`).
Әйтпесе қолданушы `TEXTS`-тегі нұсқаны, ал Google HTML-дегі нұсқаны көреді.

---

## Орысша нұсқа қосу

1. `script.js` ішінде `TEXTS.kk`-ны көшіріп, `TEXTS.ru` жаса — кілттер сол күйінде
   қалсын, мәндерін орысшаға аудар.
2. Тексеру: `index.html?lang=ru` деп аш.
3. Тіл ауыстырғышты қосу үшін header-ге батырма қойып, `?lang=ru` сілтемесін бер
   (немесе `localStorage`-қа сақта).

Логика `script.js`-те дайын тұр: `const LANG = ?lang параметрі || html lang || "kk"`.

---

## Локал іске қосу

```bash
cd bagdar-site
python3 -m http.server 8777
# → http://127.0.0.1:8777
```

`file://` арқылы ашсаң қаріптер жүктелмеуі мүмкін — жергілікті сервер қолдан.

---

## Деплой: Vercel

Ең жылдам жол (сайт статикалық, баптау қажет емес):

```bash
cd bagdar-site
vercel --prod
```

Сұрақтарға: Scope → өз аккаунтың, Link to existing project? → **N**,
Project name → `bagdar`, Directory → `./`, Build командасы → өткізіп жібер (Enter).

Кейін әр өзгерістен соң қайта шығару: `vercel --prod`.

GitHub репозиторийін Vercel-ге байласаң (vercel.com → Add New → Project → Import),
`main`-ге әр push автоматты деплой болады.

---

## Деплой: GitHub Pages

### 1-қадам. Репозиторий жасау

```bash
cd bagdar-site
git init
git add .
git commit -m "Bagdar лендинг сайты"
gh repo create bagdar-site --public --source=. --push
```

`gh` жоқ болса: github.com → **New repository** → аты `bagdar-site` → **Public** →
Create, содан кейін:

```bash
git remote add origin git@github.com:<пайдаланушы>/bagdar-site.git
git branch -M main
git push -u origin main
```

### 2-қадам. Pages-ті қосу

1. Репозиторий бетінде жоғарыдан **Settings** таңдa.
2. Сол жақ мәзірден **Pages** бөліміне өт.
3. **Build and deployment → Source** тізімінен **Deploy from a branch** таңда.
4. **Branch** тізімінен `main`, папка ретінде **/ (root)** қой → **Save**.
5. 1–2 минут күт. Беттің жоғарысында жасыл жолақпен мекенжай шығады:
   `https://<пайдаланушы>.github.io/bagdar-site/`

### 3-қадам. Мекенжайды сайтқа жазу

Pages берген сілтемені `index.html`-ге жаз — [келесі бөлімді](#мекенжай-ауысқанда-міндетті-түрде) қара.

### Жаңарту

```bash
git add .
git commit -m "мәтін жаңартылды"
git push
```

Push болған соң 1 минут ішінде сайт жаңарады.

---

## Жеке домен (bagdar.kz)

### GitHub Pages-те

1. **Домен провайдерінің** (мыс. hoster.kz, ps.kz) DNS панелін аш.
2. `bagdar.kz` (apex) үшін **4 A-жазба** қос:

   ```
   A  @  185.199.108.153
   A  @  185.199.109.153
   A  @  185.199.110.153
   A  @  185.199.111.153
   ```

3. `www.bagdar.kz` үшін **CNAME**:

   ```
   CNAME  www  <пайдаланушы>.github.io
   ```

4. GitHub → репозиторий → **Settings → Pages → Custom domain** өрісіне `bagdar.kz`
   жазып **Save** бас. Репозиторийде автоматты түрде `CNAME` файлы пайда болады.
5. DNS тарағанша күт (15 минуттан бірнеше сағатқа дейін). Тексеру:
   `dig bagdar.kz +short`
6. Тексеру біткен соң **Enforce HTTPS** белгісін қой (сертификат тегін, автоматты).

### Vercel-де

1. Vercel панелі → жоба → **Settings → Domains → Add** → `bagdar.kz`.
2. Vercel көрсеткен жазбаларды DNS-ке қос:

   ```
   A      @    76.76.21.21
   CNAME  www  cname.vercel-dns.com
   ```

3. Сертификат автоматты беріледі.

**Екеуін де қатар ұстамаған дұрыс** — домен бір жерге ғана бағытталсын.

---

## Мекенжай ауысқанда МІНДЕТТІ түрде

Қазіргі мекенжай: **https://bagdar-rho.vercel.app/**

`index.html` ішіндегі `<head>` блогында **8 жерде** осы мекенжай жазылған:
`canonical`, `og:url`, `og:image`, `twitter:image`, JSON-LD (`url`, `logo`, `image`).

Мекенжай өзгерсе бәрін ауыстыр:

```bash
# bagdar.kz доменін байлағанда:
sed -i 's|https://bagdar-rho.vercel.app/|https://bagdar.kz/|g' index.html robots.txt sitemap.xml script.js

# немесе GitHub Pages-ке көшкенде:
sed -i 's|https://bagdar-rho.vercel.app/|https://raissov01.github.io/bagdar-site/|g' index.html robots.txt sitemap.xml script.js
```

`script.js` ішіндегі `CONFIG.siteUrl` де сол мекенжай болсын.

**Неге маңызды:** `og:image` **абсолют** сілтеме болуы шарт. Дұрыс болмаса
Telegram-да сілтеме суретсіз, «жалаңаш» күйде ашылады.

Тексеру: Telegram-ға сілтемені жіберіп көр. Preview ескі күйде қалса —
[@WebpageBot](https://t.me/WebpageBot) арқылы кэшті тазарт (`/update` командасы).

---

## OG баннерді қайта жасау

Баннердің мәтінін өзгерту керек болса — `og-template.html`-ді өңде де, жергілікті
сервер қосулы тұрғанда мынаны орында:

```bash
python3 -m http.server 8777 &
google-chrome --headless=new --disable-gpu --hide-scrollbars \
  --window-size=1200,630 --virtual-time-budget=5000 \
  --screenshot=og.png http://127.0.0.1:8777/og-template.html
```

Файл 150 КБ-тан асып кетсе, кішірейт:

```bash
python3 -c "from PIL import Image; im=Image.open('og.png'); \
im.quantize(colors=200).save('og.png', optimize=True)"
```

---

## Өнімділік

Lighthouse (mobile preset, нақты өлшеу):

| Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|
| 99 | 100 | 100 | 100 |

Неге жылдам:

- Фреймворк жоқ, JS небәрі ~6 КБ, build қадамы жоқ
- Inter қаріпі **өз серверімізде** (variable 400–800) — сыртқы сұраныс мүлдем жоқ,
  Google Fonts-қа тәуелділік жоқ
- Растрлық сурет жоқ: барлық иконка — эмодзи мен CSS/SVG (og.png тек бөлісуге)
- CLS = 0, анимациялар тек `opacity`/`transform` арқылы
- `prefers-reduced-motion` сақталады

**Қолжетімділік ескертуі:** ақ мәтін жарқын coral `#F96167` фонында тек 3.03:1
контраст береді — WCAG AA талабынан төмен. Сондықтан батырмаларға қараңғылау
`--coral-btn: #CE3A41` (4.9:1), ұсақ coral мәтінге `--coral-text: #C4353C` (5.4:1)
қолданылады. Жаңа элемент қосқанда осыны ұмытпа.

---

## Түстер

| Айнымалы | Мәні | Қолданысы |
|---|---|---|
| `--navy` | `#2F3C7E` | басым түс, батырмалар, акценттер |
| `--navy-900` | `#1B2447` | тақырыптар, қою секциялар, footer |
| `--coral` | `#F96167` | акцент: «Бағдар», шеврондар, иконкалар |
| `--coral-btn` | `#CE3A41` | негізгі батырманың фоны (AA контраст) |
| `--gold` | `#F9E795` | қосалқы: сандар, маркерлер, амбассадор блогы |

Шеврон (`›`) — бүкіл сайттағы өтпелі визуал мотив: eyebrow белгілерінде,
батырмаларда, тізім маркерлерінде, қадамдар арасында, hero мен амбассадор
блогының фонында.
