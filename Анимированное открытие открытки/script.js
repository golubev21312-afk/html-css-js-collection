// ── Bilingual data ─────────────────────────────────────────────────────────
const data_en = [
  {
    place: 'Switzerland Alps',
    title: 'SAINT',
    title2: 'ANTONIEN',
    description: 'Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It\'s a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.',
    image: 'https://assets.codepen.io/3685267/timed-cards-1.jpg'
  },
  {
    place: 'Japan Alps',
    title: 'NANGANO',
    title2: 'PREFECTURE',
    description: 'Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country\'s best powder.',
    image: 'https://assets.codepen.io/3685267/timed-cards-2.jpg'
  },
  {
    place: 'Sahara Desert - Morocco',
    title: 'MARRAKECH',
    title2: 'MEROUGA',
    description: 'The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.',
    image: 'https://assets.codepen.io/3685267/timed-cards-3.jpg'
  },
  {
    place: 'Sierra Nevada - USA',
    title: 'YOSEMITE',
    title2: 'NATIONAL PARK',
    description: 'Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.',
    image: 'https://assets.codepen.io/3685267/timed-cards-4.jpg'
  },
  {
    place: 'Tarifa - Spain',
    title: 'LOS LANCES',
    title2: 'BEACH',
    description: 'Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach\'s long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.',
    image: 'https://assets.codepen.io/3685267/timed-cards-5.jpg'
  },
  {
    place: 'Cappadocia - Turkey',
    title: 'GÖREME',
    title2: 'VALLEY',
    description: 'Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.',
    image: 'https://assets.codepen.io/3685267/timed-cards-6.jpg'
  },
]

const data_ru = [
  {
    place: 'Швейцарские Альпы',
    title: 'СЕНТ',
    title2: 'АНТОНЬЕН',
    description: 'Затерянный в Швейцарских Альпах, Сент-Антоньен — идеальное убежище для тех, кто ищет покой и приключения. Зимой это скрытая жемчужина для внетрассового катания, а в тёплые месяцы — пышные тропы для пеших прогулок и горного велоспорта.',
    image: 'https://assets.codepen.io/3685267/timed-cards-1.jpg'
  },
  {
    place: 'Японские Альпы',
    title: 'НАГАНО',
    title2: 'ПРЕФЕКТУРА',
    description: 'Префектура Нагано, расположенная среди величественных Японских Альп, — культурная сокровищница с историческими святынями и храмами, особенно знаменитым Дзэнко-дзи. Регион также является центром горных лыж и сноуборда с лучшим пухляком в стране.',
    image: 'https://assets.codepen.io/3685267/timed-cards-2.jpg'
  },
  {
    place: 'Сахара — Марокко',
    title: 'МАРРАКЕШ',
    title2: 'МЕРЗУГА',
    description: 'Путешествие от шумных базаров и дворцов Марракеша к безмолвным, усыпанным звёздами пескам Мерзуги открывает многогранную красоту Марокко. Верблюжьи трекинги и ночёвки в пустыне дарят незабываемое погружение в кочевую жизнь.',
    image: 'https://assets.codepen.io/3685267/timed-cards-3.jpg'
  },
  {
    place: 'Сьерра-Невада — США',
    title: 'ЙОСЕМИТИ',
    title2: 'НАЦПАРК',
    description: 'Йосемитский национальный парк — витрина американской природы: гранитные монолиты, секвойи-великаны и гремящие водопады. Парк открыт для активного отдыха круглый год — от скалолазания до неспешных прогулок по долине.',
    image: 'https://assets.codepen.io/3685267/timed-cards-4.jpg'
  },
  {
    place: 'Тарифа — Испания',
    title: 'ЛОС-ЛАНСЕС',
    title2: 'ПЛЯЖ',
    description: 'Пляж Лос-Лансес в Тарифе — прибрежный рай с постоянными ветрами, всемирно известный среди кайтсёрферов и виндсёрферов. Длинные песчаные берега идеальны для отдыха, а атмосферные бары и кафе создают живой курортный дух.',
    image: 'https://assets.codepen.io/3685267/timed-cards-5.jpg'
  },
  {
    place: 'Каппадокия — Турция',
    title: 'ГЁРЕМЕ',
    title2: 'ДОЛИНА',
    description: 'Долина Гёреме в Каппадокии — исторический феномен на фоне уникального ландшафта, где ветер и вода тысячелетиями лепили причудливые скалы. Долина знаменита музеями под открытым небом, подземными городами и волшебными полётами на воздушном шаре.',
    image: 'https://assets.codepen.io/3685267/timed-cards-6.jpg'
  },
]

const nav_en = {
  brand: 'Globe Express',
  items: ['Home', 'Holidays', 'Destinations', 'Flights', 'Offers', 'Contact'],
  discover: 'Discover Location',
}
const nav_ru = {
  brand: 'Глоб Экспресс',
  items: ['Главная', 'Туры', 'Направления', 'Перелёты', 'Акции', 'Контакты'],
  discover: 'Подробнее',
}

// ── Language state ──────────────────────────────────────────────────────────
let currentLang = 'en'
function getData()   { return currentLang === 'ru' ? data_ru : data_en }
function getNavData(){ return currentLang === 'ru' ? nav_ru  : nav_en  }

// ── DOM helpers ─────────────────────────────────────────────────────────────
const _ = (id) => document.getElementById(id)

// ── Generate cards (images same for both langs) ─────────────────────────────
const cards = data_en.map((i, index) =>
  `<div class="card" id="card${index}" style="background-image:url(${i.image})"></div>`
).join('')

const cardContents = data_en.map((i, index) =>
  `<div class="card-content" id="card-content-${index}">
    <div class="content-start"></div>
    <div class="content-place">${i.place}</div>
    <div class="content-title-1">${i.title}</div>
    <div class="content-title-2">${i.title2}</div>
  </div>`
).join('')

const sildeNumbers = data_en.map((_, index) =>
  `<div class="item" id="slide-item-${index}">${index + 1}</div>`
).join('')

_('demo').innerHTML = cards + cardContents
_('slide-numbers').innerHTML = sildeNumbers

// ── Switch language ─────────────────────────────────────────────────────────
function switchLang(lang) {
  currentLang = lang

  const n = getNavData()
  const d = getData()

  // Nav brand & items
  const brandEl = document.getElementById('nav-brand')
  if (brandEl) brandEl.textContent = n.brand

  const navItems = document.querySelectorAll('.nav-item')
  navItems.forEach((el, i) => { if (n.items[i]) el.textContent = n.items[i] })

  // Discover buttons
  document.querySelectorAll('.discover').forEach(btn => { btn.textContent = n.discover })

  // Update small card labels
  d.forEach((item, i) => {
    const place = document.querySelector(`#card-content-${i} .content-place`)
    const t1    = document.querySelector(`#card-content-${i} .content-title-1`)
    const t2    = document.querySelector(`#card-content-${i} .content-title-2`)
    if (place) place.textContent = item.place
    if (t1)    t1.textContent    = item.title
    if (t2)    t2.textContent    = item.title2
  })

  // Update currently visible details panel
  const detailsActive = detailsEven ? '#details-even' : '#details-odd'
  const current = d[order[0]]
  if (current) {
    document.querySelector(`${detailsActive} .place-box .text`).textContent = current.place
    document.querySelector(`${detailsActive} .title-1`).textContent          = current.title
    document.querySelector(`${detailsActive} .title-2`).textContent          = current.title2
    document.querySelector(`${detailsActive} .desc`).textContent             = current.description
  }

  // Toggle button style
  const btn = document.getElementById('lang-btn')
  if (btn) btn.classList.toggle('ru', lang === 'ru')
}

// ── GSAP setup ──────────────────────────────────────────────────────────────
const range = (n) => Array(n).fill(0).map((i, j) => i + j)
const set   = gsap.set

function getCard(index)        { return `#card${index}` }
function getCardContent(index) { return `#card-content-${index}` }
function getSliderItem(index)  { return `#slide-item-${index}` }

function animate(target, duration, properties) {
  return new Promise((resolve) => {
    gsap.to(target, { ...properties, duration, onComplete: resolve })
  })
}

let order = [0, 1, 2, 3, 4, 5]
let detailsEven = true

let offsetTop  = 200
let offsetLeft = 700
let cardWidth  = 200
let cardHeight = 300
let gap        = 40
let numberSize = 50
const ease     = 'sine.inOut'

function init() {
  const [active, ...rest] = order
  const detailsActive   = detailsEven ? '#details-even' : '#details-odd'
  const detailsInactive = detailsEven ? '#details-odd'  : '#details-even'
  const { innerHeight: height, innerWidth: width } = window
  offsetTop  = height - 430
  offsetLeft = width  - 830

  gsap.set('#pagination', { top: offsetTop + 330, left: offsetLeft, y: 200, opacity: 0, zIndex: 60 })
  gsap.set('nav', { y: -200, opacity: 0 })
  gsap.set(getCard(active), { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight })
  gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 })
  gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 })
  gsap.set(detailsInactive, { opacity: 0, zIndex: 12 })
  gsap.set(`${detailsInactive} .text`, { y: 100 })
  gsap.set(`${detailsInactive} .title-1`, { y: 100 })
  gsap.set(`${detailsInactive} .title-2`, { y: 100 })
  gsap.set(`${detailsInactive} .desc`, { y: 50 })
  gsap.set(`${detailsInactive} .cta`, { y: 60 })
  gsap.set('.progress-sub-foreground', { width: 500 * (1 / order.length) * (active + 1) })

  rest.forEach((i, index) => {
    gsap.set(getCard(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap),
      y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10,
    })
    gsap.set(getCardContent(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap), zIndex: 40, y: offsetTop + cardHeight - 100,
    })
    gsap.set(getSliderItem(i), { x: (index + 1) * numberSize })
  })

  gsap.set('.indicator', { x: -window.innerWidth })

  const startDelay = 0.6
  gsap.to('.cover', {
    x: width + 400, delay: 0.5, ease,
    onComplete: () => { setTimeout(() => { loop() }, 500) },
  })
  rest.forEach((i, index) => {
    gsap.to(getCard(i), { x: offsetLeft + index * (cardWidth + gap), zIndex: 30, ease, delay: startDelay })
    gsap.to(getCardContent(i), { x: offsetLeft + index * (cardWidth + gap), zIndex: 40, ease, delay: startDelay })
  })
  gsap.to('#pagination', { y: 0, opacity: 1, ease, delay: startDelay })
  gsap.to('nav', { y: 0, opacity: 1, ease, delay: startDelay })
  gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay })
}

let clicks = 0

function step() {
  return new Promise((resolve) => {
    order.push(order.shift())
    detailsEven = !detailsEven

    const detailsActive   = detailsEven ? '#details-even' : '#details-odd'
    const detailsInactive = detailsEven ? '#details-odd'  : '#details-even'
    const data = getData()

    document.querySelector(`${detailsActive} .place-box .text`).textContent = data[order[0]].place
    document.querySelector(`${detailsActive} .title-1`).textContent          = data[order[0]].title
    document.querySelector(`${detailsActive} .title-2`).textContent          = data[order[0]].title2
    document.querySelector(`${detailsActive} .desc`).textContent             = data[order[0]].description

    gsap.set(detailsActive, { zIndex: 22 })
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease })
    gsap.to(`${detailsActive} .text`,    { y: 0, delay: 0.1,  duration: 0.7, ease })
    gsap.to(`${detailsActive} .title-1`, { y: 0, delay: 0.15, duration: 0.7, ease })
    gsap.to(`${detailsActive} .title-2`, { y: 0, delay: 0.15, duration: 0.7, ease })
    gsap.to(`${detailsActive} .desc`,    { y: 0, delay: 0.3,  duration: 0.4, ease })
    gsap.to(`${detailsActive} .cta`,     { y: 0, delay: 0.35, duration: 0.4, onComplete: resolve, ease })
    gsap.set(detailsInactive, { zIndex: 12 })

    const [active, ...rest] = order
    const prv = rest[rest.length - 1]

    gsap.set(getCard(prv),  { zIndex: 10 })
    gsap.set(getCard(active), { zIndex: 20 })
    gsap.to(getCard(prv), { scale: 1.5, ease })
    gsap.to(getCardContent(active), { y: offsetTop + cardHeight - 10, opacity: 0, duration: 0.3, ease })
    gsap.to(getSliderItem(active), { x: 0, ease })
    gsap.to(getSliderItem(prv), { x: -numberSize, ease })
    gsap.to('.progress-sub-foreground', { width: 500 * (1 / order.length) * (active + 1), ease })

    gsap.to(getCard(active), {
      x: 0, y: 0, ease, width: window.innerWidth, height: window.innerHeight, borderRadius: 0,
      onComplete: () => {
        const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap)
        gsap.set(getCard(prv), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, zIndex: 30, borderRadius: 10, scale: 1 })
        gsap.set(getCardContent(prv), { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40 })
        gsap.set(getSliderItem(prv), { x: rest.length * numberSize })
        gsap.set(detailsInactive, { opacity: 0 })
        gsap.set(`${detailsInactive} .text`,    { y: 100 })
        gsap.set(`${detailsInactive} .title-1`, { y: 100 })
        gsap.set(`${detailsInactive} .title-2`, { y: 100 })
        gsap.set(`${detailsInactive} .desc`,    { y: 50 })
        gsap.set(`${detailsInactive} .cta`,     { y: 60 })
        clicks -= 1
        if (clicks > 0) { step() }
      },
    })

    rest.forEach((i, index) => {
      if (i !== prv) {
        const xNew = offsetLeft + index * (cardWidth + gap)
        gsap.set(getCard(i), { zIndex: 30 })
        gsap.to(getCard(i),        { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, ease, delay: 0.1 * (index + 1) })
        gsap.to(getCardContent(i), { x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40, ease, delay: 0.1 * (index + 1) })
        gsap.to(getSliderItem(i),  { x: (index + 1) * numberSize, ease })
      }
    })
  })
}

async function loop() {
  await animate('.indicator', 2, { x: 0 })
  await animate('.indicator', 0.8, { x: window.innerWidth, delay: 0.3 })
  set('.indicator', { x: -window.innerWidth })
  await step()
  loop()
}

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

async function loadImages() {
  const promises = data_en.map(({ image }) => loadImage(image))
  return Promise.all(promises)
}

async function start() {
  try {
    await loadImages()
    init()
  } catch (error) {
    console.error('One or more images failed to load', error)
  }
}

start()

// ── Language button ─────────────────────────────────────────────────────────
document.getElementById('lang-btn').addEventListener('click', function () {
  const newLang = currentLang === 'en' ? 'ru' : 'en'
  switchLang(newLang)
})
