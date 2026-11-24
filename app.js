"use strict";

const cards = [
  {
    number: "I", name: "Маг Штопки", symbol: "🪡", accent: "coral",
    kicker: "Ловкость · починка · второй шанс",
    prediction: "В первые месяцы 2027 года к тебе вернётся замысел, о котором почти удалось забыть. Случайная встреча подскажет недостающий стежок — и то, что казалось завершённым, станет началом чего-то удивительно большого.",
    advice: "Не спеши начинать с нуля. Сначала найди ту самую нитку, которая ещё способна соединить всё важное.",
    charm: "контрастная красная нить",
    share: "Забытый замысел вернётся и неожиданно станет началом чего-то большого."
  },
  {
    number: "II", name: "Дама Подследников", symbol: "🥿", accent: "plum",
    kicker: "Деликатность · стратегия · невидимый комфорт",
    prediction: "Самый важный знак 2027 года появится тихо: в коротком сообщении, случайном взгляде или неожиданном приглашении. Ты узнаешь его по странному чувству, будто всё уже начинает складываться в твою пользу.",
    advice: "Не раскрывай все карты сразу. Иногда самый уверенный шаг — тот, которого никто не услышал.",
    charm: "молочный подследник",
    share: "Твой главный знак появится тихо — и запустит цепочку счастливых совпадений."
  },
  {
    number: "III", name: "Королева Колготок", symbol: "♕", accent: "gold",
    kicker: "Элегантность · выдержка · запасная пара",
    prediction: "2027 год позовёт тебя туда, где ещё непривычно быть в центре внимания. Одна встреча откроет дверь, которой не было в планах, — и тебе удивительно понравится то, что окажется за ней.",
    advice: "Держи запасной план рядом, но выходи так, словно он тебе никогда не понадобится.",
    charm: "тонкие чёрные колготки",
    share: "Одна встреча откроет незапланированную дверь — и тебе понравится то, что за ней."
  },
  {
    number: "IV", name: "Хранитель Уюта", symbol: "⌂", accent: "navy",
    kicker: "Спокойствие · порядок · надёжная опора",
    prediction: "В 2027 году одно небольшое изменение наполнит привычное пространство новым смыслом. Когда в доме или делах станет чуть свободнее, появится знак, который подскажет: хорошая перемена уже совсем близко.",
    advice: "Оставь свободным место для того, чего ещё нет. Хорошие перемены любят, когда их ждут.",
    charm: "маленький ключ с золотой лентой",
    share: "Освободи немного места: хорошая перемена уже ищет дорогу к тебе."
  },
  {
    number: "V", name: "Иерофант Гольфов", symbol: "🧦", accent: "sage",
    kicker: "Традиции · мудрость · высокая планка",
    prediction: "Фраза, услышанная когда-то давно, внезапно обретёт смысл в 2027 году. Следуя знакомой подсказке по-своему, ты найдёшь короткий путь к цели, которая раньше казалась далёкой.",
    advice: "Прислушивайся к опыту, но не отдавай ему право выбирать твою дорогу.",
    charm: "гольфы с ромбами",
    share: "Старая подсказка откроет новый путь к цели, которая раньше казалась далёкой."
  },
  {
    number: "VI", name: "Влюблённые Носки", symbol: "♥", accent: "coral",
    kicker: "Совпадение · близость · одна пара",
    prediction: "В 2027 году тебя ждёт редкое совпадение — человек, идея или место отзовутся ощущением «это моё». Не пытайся объяснить его сразу: некоторые пары узнают друг друга раньше, чем разум успевает вмешаться.",
    advice: "Выбирай то, рядом с чем можно оставаться собой, даже если рисунок не совпадает до последней полоски.",
    charm: "два носка из одной пары",
    share: "Тебя ждёт редкое совпадение, которое сердце узнает раньше разума."
  },
  {
    number: "VII", name: "Колесница Полосок", symbol: "⇢", accent: "navy",
    kicker: "Движение · темп · яркий маршрут",
    prediction: "Новый маршрут появится почти случайно: из билета, разговора или смелого приглашения. Согласившись, ты окажешься ближе к мечте, которую пока не получалось произнести вслух.",
    advice: "Выбери направление заранее, чтобы не тормозить пятками в самый интересный момент.",
    charm: "полосатые дорожные носки",
    share: "Случайный маршрут приведёт тебя ближе к мечте, которую пока не получалось назвать вслух."
  },
  {
    number: "VIII", name: "Сила Махрового Носка", symbol: "✹", accent: "gold",
    kicker: "Тепло · опора · мягкая мощь",
    prediction: "Твоя сила в 2027 году проявится мягко, но её невозможно будет не заметить. Спокойствие поможет пройти длинный путь и получить результат, который раньше требовал слишком много борьбы.",
    advice: "Сначала согрейся и восстанови силы — горы никуда не уйдут.",
    charm: "тёплый махровый носок",
    share: "Твоя тихая сила проведёт тебя дальше, чем любые попытки бороться со всем сразу."
  },
  {
    number: "IX", name: "Отшельник из-под Кровати", symbol: "☾", accent: "plum",
    kicker: "Пауза · поиски · уединение",
    prediction: "Ответ, который ты ищешь, уже находится рядом, но откроется только в минуту тишины. Вместе с ним найдётся нечто давно потерянное — возможно, предмет, а возможно, твоя собственная смелость.",
    advice: "Оставь себе пространство без чужих голосов и не бойся заглянуть под привычные вещи.",
    charm: "одинокий серый носок",
    share: "В тишине найдётся ответ — и вместе с ним вернётся что-то очень важное."
  },
  {
    number: "X", name: "Колесо Стирки", symbol: "◉", accent: "sage",
    kicker: "Цикл · перемены · неожиданный отжим",
    prediction: "Один неожиданный поворот 2027 года изменит привычный ритм, но именно он вынесет тебя на счастливую полосу. Позже ты поймёшь: судьба просто переключила режим на более подходящий.",
    advice: "Доверяй переменам, но перед новым оборотом обязательно проверь карманы.",
    charm: "мешок для деликатной стирки",
    share: "Неожиданный поворот вынесет тебя на счастливую полосу и сменит привычный ритм."
  },
  {
    number: "XI", name: "Справедливость Пары", symbol: "⚖", accent: "navy",
    kicker: "Баланс · честность · левая и правая",
    prediction: "В 2027 году тебе вернётся то, что было честно заслужено. Важный разговор, письмо или документ поставят всё на свои места — и итог окажется приятнее ожиданий.",
    advice: "Не соглашайся быть вторым носком в чужой паре и честно называй свою цену.",
    charm: "идеально симметричная пара",
    share: "Важная новость поставит всё на свои места и вернёт тебе заслуженное."
  },
  {
    number: "XII", name: "Носок на Звёздной Нити", symbol: "✦", accent: "coral",
    kicker: "Пауза · перспектива · тайная подготовка",
    prediction: "Пауза в начале 2027 года окажется тайной подготовкой. Пока внешне ничего не меняется, судьба переставляет детали — и вскоре перед тобой откроется вариант, которого раньше просто не было.",
    advice: "Не торопи то, чему нужно созреть. Тихая пауза тоже меняет форму вещей.",
    charm: "деревянная прищепка",
    share: "Тихая пауза готовит вариант, которого раньше просто не существовало."
  },
  {
    number: "XIII", name: "Новая Пара", symbol: "✧", accent: "plum",
    kicker: "Обновление · первый шаг · свободное место",
    prediction: "Одно спокойное прощание освободит дорогу для нового начала. Оно придёт быстрее, чем ты ожидаешь, и с первых шагов будет ощущаться так, будто давно ждало именно тебя.",
    advice: "Освободи руки для нового — оно уже примеряет дорогу к тебе.",
    charm: "новая пара с этикеткой",
    share: "Новое начало уже ждёт момента, когда ты освободишь для него дорогу."
  },
  {
    number: "XIV", name: "Ровный Узор", symbol: "≈", accent: "sage",
    kicker: "Ритм · гармония · точное совпадение",
    prediction: "В 2027 году маленькие шаги начнут складываться в большое чудо. Не ускоряя события, однажды ты заметишь: путь уже привёл именно туда, куда давно хотелось попасть.",
    advice: "Поддерживай свой ритм и оставляй в нём место для приятных неожиданностей.",
    charm: "компрессионный гольф",
    share: "Маленькие шаги незаметно сложатся в большое чудо и приведут тебя к мечте."
  },
  {
    number: "XV", name: "Искушение Подарка", symbol: "🎁", accent: "coral",
    kicker: "Любопытство · выбор · яркий сюрприз",
    prediction: "2027 год предложит тебе красивое искушение, за которым скрывается настоящая возможность. Если решиться не из страха упустить, а из любопытства, этот выбор подарит историю, которую захочется рассказывать друзьям.",
    advice: "Перед согласием спроси себя: это знак судьбы или просто очень хорошая упаковка?",
    charm: "яркая ценовая этикетка",
    share: "За красивым искушением скрывается возможность и история, которую захочется рассказать."
  },
  {
    number: "XVI", name: "Снежный Переворот", symbol: "❄", accent: "gold",
    kicker: "Перемены · новый вид · счастливый поворот",
    prediction: "Один план внезапно изменится и на мгновение собьёт тебя с толку. Но за поворотом откроется вид гораздо шире прежнего — иногда судьба переставляет декорации, чтобы показать лучший путь.",
    advice: "Отпусти старую конструкцию и посмотри, какой простор она так долго закрывала.",
    charm: "пустой ящик органайзера",
    share: "Смена планов откроет вид шире прежнего и покажет гораздо лучший путь."
  },
  {
    number: "XVII", name: "Звезда на Пятке", symbol: "★", accent: "navy",
    kicker: "Надежда · заметность · удачный принт",
    prediction: "В 2027 году твоё имя прозвучит в разговоре, на котором тебя не будет. Кто-то заметит твой талант и передаст знак дальше — не пропусти предложение, о котором пока даже не догадываешься.",
    advice: "Не прячь лучшее из скромности. Звёздам тоже нужен момент, чтобы выйти на свет.",
    charm: "носок с золотой звездой",
    share: "Твой талант заметят и передадут знак дальше — готовься к неожиданному предложению."
  },
  {
    number: "XVIII", name: "Луна в Катышках", symbol: "☽", accent: "plum",
    kicker: "Интуиция · сомнения · ночная стирка",
    prediction: "Не все события 2027 года сразу покажут своё значение. Интуиция приведёт тебя к находке, которая сначала покажется случайностью, а позже станет ключом к важному решению.",
    advice: "Дай сомнениям переночевать. Утром катышки окажутся меньше, а путь — заметнее.",
    charm: "мягкие домашние носки",
    share: "Случайная находка окажется ключом к важному решению — доверься интуиции."
  },
  {
    number: "XIX", name: "Солнце на Мысках", symbol: "☀", accent: "gold",
    kicker: "Радость · ясность · тёплая прогулка",
    prediction: "В 2027 году наступит светлая полоса, когда нужные люди и возможности будут появляться почти одновременно. Разреши себе радоваться без оглядки: это не затишье, а настоящее везение.",
    advice: "Позволь радости быть простой и не ищи складку там, где всё уже сидит ровно.",
    charm: "солнечно-жёлтые носки",
    share: "Нужные люди и возможности появятся одновременно — это настоящее везение."
  },
  {
    number: "XX", name: "Возвращение Потерянной Пары", symbol: "↻", accent: "sage",
    kicker: "Второй шанс · возвращение · лучший финал",
    prediction: "В 2027 году одна дверь из прошлого откроется снова, но уже на твоих условиях. Второй шанс окажется не повторением, а возможностью завершить историю именно так, как когда-то хотелось.",
    advice: "Отдели своё от чужого: белое, цветное и чужие проблемы требуют разных режимов.",
    charm: "белоснежная пара",
    share: "Дверь из прошлого откроется снова — теперь на твоих условиях и с лучшим финалом."
  },
  {
    number: "XXI", name: "Мир в Ящике Комода", symbol: "◎", accent: "navy",
    kicker: "Завершение · гармония · всё по парам",
    prediction: "Большой цикл завершится, и все разрозненные события внезапно сложатся в ясную картину. За последней точкой уже виден новый горизонт — возможно, гораздо дальше первоначального плана.",
    advice: "Отпразднуй завершение прежде, чем снова заполнять ящик новыми задачами.",
    charm: "идеально сложенный комплект",
    share: "Все события сложатся в ясную картину, а за финальной точкой откроется новый горизонт."
  },
  {
    number: "XXII", name: "Валет Укороченных", symbol: "♞", accent: "coral",
    kicker: "Лёгкость · дерзость · открытая щиколотка",
    prediction: "Спонтанная идея 2027 года покажется слишком смелой ровно до того момента, пока ты её не попробуешь. Она откроет новую сторону тебя и приведёт к людям, с которыми легко дышится.",
    advice: "Разреши себе сделать короче путь, список правил и объяснения окружающим.",
    charm: "яркие укороченные носки",
    share: "Смелая идея откроет новую сторону тебя и приведёт к людям, с которыми легко дышится."
  },
  {
    number: "XXIII", name: "Букет Парных Носков", symbol: "✿", accent: "sage",
    kicker: "Подарок · согласие · приятная встреча",
    prediction: "В 2027 году тебя ждёт подарок, смысл которого раскроется не сразу. Вместе с ним в жизнь войдёт больше заботы, тёплых встреч и людей, рядом с которыми хочется оставаться подольше.",
    advice: "Принимай заботу без фразы «ну зачем же». Иногда ответ — именно затем.",
    charm: "букет из парных носков",
    share: "Неожиданный подарок приведёт к тёплым встречам и людям, рядом с которыми хочется остаться."
  },
  {
    number: "XXIV", name: "Туз Непарных", symbol: "✦", accent: "plum",
    kicker: "Свобода · оригинальность · счастливая случайность",
    prediction: "Самая счастливая случайность 2027 года произойдёт, когда ты перестанешь стараться совпасть с чужими ожиданиями. Именно твоя необычность станет тайным знаком, по которому тебя найдёт нужная возможность.",
    advice: "Не ищи идеальную пару любой ценой. Иногда контраст и есть твой настоящий стиль.",
    charm: "два разных ярких носка",
    share: "Твоя необычность станет тайным знаком, по которому тебя найдёт нужная возможность."
  },
  {
    number: "XXV", name: "Хрустальный Носок", symbol: "◇", accent: "navy",
    kicker: "Желание · ясность · первый отблеск",
    prediction: "В 2027 году давнее желание впервые покажет, что уже движется навстречу. Небольшая новость, случайная фраза или почти незаметное совпадение станут первым отблеском большого исполнения.",
    advice: "Не торопи чудо объяснениями. Сначала позволь ему проявиться целиком.",
    charm: "маленькая стеклянная подвеска",
    share: "Давнее желание подаст первый знак — и окажется гораздо ближе, чем кажется."
  },
  {
    number: "XXVI", name: "Полночная Петля", symbol: "∞", accent: "plum",
    kicker: "Связь · совпадение · скрытый узел",
    prediction: "Два события, которые казались совершенно не связанными, в одну полночь сложатся в единый узор. Ты поймёшь, зачем судьба так долго оставляла одну петлю незавершённой.",
    advice: "Замечай повторяющиеся знаки: иногда судьба не повторяется, а настойчиво показывает направление.",
    charm: "серебряная петля из нити",
    share: "Два случайных события соединятся и откроют смысл, которого раньше не было видно."
  },
  {
    number: "XXVII", name: "Снежный След", symbol: "❄", accent: "sage",
    kicker: "Дорога · приглашение · новый горизонт",
    prediction: "Неожиданное приглашение изменит привычный маршрут 2027 года. Следуя за ним, ты окажешься в месте, где одна встреча или идея откроет совсем другой горизонт.",
    advice: "Не бойся свернуть с расчищенной дорожки, если первый след почему-то кажется твоим.",
    charm: "серебристая дорожная лента",
    share: "Неожиданное приглашение оставит след, который приведёт к новому горизонту."
  },
  {
    number: "XXVIII", name: "Шар Тайного Желания", symbol: "○", accent: "coral",
    kicker: "Тайна · намерение · сияние изнутри",
    prediction: "Желание, о котором ты почти никому не рассказываешь, получит в 2027 году неожиданного союзника. Всё начнётся с тихого разговора, после которого невозможное перестанет казаться таким далёким.",
    advice: "Береги желание от лишнего шума, но не закрывай дверь тому, кто способен помочь ему сбыться.",
    charm: "прозрачный ёлочный шар",
    share: "Тайное желание найдёт союзника и впервые покажет путь к исполнению."
  },
  {
    number: "XXIX", name: "Бургундская Пара", symbol: "◆", accent: "coral",
    kicker: "Признание · стиль · уверенное совпадение",
    prediction: "В 2027 году твой выбор заметят именно потому, что он не похож на остальные. Смелая деталь, решение или идея приведут к предложению, в котором совпадут признание и настоящая свобода.",
    advice: "Не приглушай свой цвет ради чужой палитры. Нужные люди узнают тебя по нему.",
    charm: "пара носков цвета бургунди",
    share: "Твой смелый выбор заметят — и он приведёт к предложению, созданному словно для тебя."
  },
  {
    number: "XXX", name: "Иней на Резинке", symbol: "❄", accent: "gold",
    kicker: "Пауза · красота · счастливое созревание",
    prediction: "То, что на время замедлится, не окажется потерянным. Под тонким слоем тишины будет созревать возможность, которая проявится внезапно и окажется красивее первоначального плана.",
    advice: "Не стирай иней раньше времени: иногда именно пауза создаёт самый точный узор.",
    charm: "серебряная снежинка",
    share: "Под зимней тишиной уже созревает возможность красивее первоначального плана."
  },
  {
    number: "XXXI", name: "Первый Узор Года", symbol: "✦", accent: "navy",
    kicker: "Увлечение · мастерство · новая история",
    prediction: "Случайное увлечение в начале 2027 года начнёт незаметно менять твой ритм. К концу года оно может стать делом, знакомством или историей, без которой уже трудно представить свою жизнь.",
    advice: "Начни с одной петли и не требуй от первого узора совершенства.",
    charm: "моток серебристо-синей пряжи",
    share: "Новое увлечение начнётся с мелочи, а станет одной из главных историй года."
  },
  {
    number: "XXXII", name: "Созвездие Счастливой Пары", symbol: "★", accent: "plum",
    kicker: "Совпадение · союз · редкое везение",
    prediction: "В 2027 году человек, идея и нужный момент окажутся в одной точке. Такое совпадение случается редко: ты узнаешь его по ощущению, будто звёзды наконец сложились в знакомый рисунок.",
    advice: "Когда всё совпадёт, не ищи подвох. Иногда хороший знак действительно означает хорошее.",
    charm: "две серебряные звезды",
    share: "Человек, идея и нужный момент совпадут — звёзды сложатся в счастливую пару."
  }
];

const accentColors = {
  coral: "#d7658c",
  gold: "#d8dcff",
  sage: "#a6d4ef",
  navy: "#8abaff",
  plum: "#c99de9"
};

const storyCardPalettes = {
  coral: ["#851b42", "#250a25"],
  gold: ["#5b598d", "#14132f"],
  sage: ["#365d7d", "#0b1730"],
  navy: ["#29457f", "#0a102d"],
  plum: ["#5e327c", "#170d2d"]
};

let selected = null;
let cachedShareAsset = null;
let shareGeneration = null;
let shareDialogContext = null;
let shareReturnFocus = null;
let cancelScheduledSharePreparation = null;

const deckTitle = document.getElementById("deck-title");
const deckSubtitle = document.getElementById("deck-subtitle");
const readingArea = document.getElementById("reading-area");

function sockMark() {
  return '<span class="sock-mark" aria-hidden="true"></span>';
}

function deckMarkup() {
  return `<div class="deck-grid" aria-label="Колода из 32 карт">${cards.map((_, index) => `
    <button class="deck-card" data-card-index="${index}" aria-label="Выбрать карту ${index + 1}" style="--delay:${(index % 8) * 25}ms">
      <span class="tarot-back-art mini" aria-hidden="true">
        <img src="./assets/tarot-card-back.jpeg" alt="">
      </span>
    </button>`).join("")}
  </div>`;
}

function chooseCard(index, button) {
  if (selected !== null) return;
  selected = index;
  deckTitle.textContent = "Карта выбрала тебя";
  deckSubtitle.textContent = "Шёлковая нить уже связала твоё предсказание.";
  button?.classList.add("chosen");
  button?.closest(".deck-grid")?.classList.add("is-choosing");
  launchSparkBurst(button);
  window.setTimeout(() => renderReading(index), 480);
}

function launchSparkBurst(button) {
  if (!button) return;
  const burst = document.createElement("span");
  burst.className = "spark-burst";
  burst.setAttribute("aria-hidden", "true");

  const colors = ["#ffffff", "#c9dbff", "#d5bdf4", "#8b2348"];
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const sparkCount = reducedMotion ? 6 : 22;
  const fragment = document.createDocumentFragment();
  let finalSpark = null;

  if (reducedMotion) burst.classList.add("is-reduced");

  for (let index = 0; index < sparkCount; index += 1) {
    const spark = document.createElement("i");
    const angle = (360 / sparkCount) * index + (index % 3) * 4;
    const distance = reducedMotion ? 30 + (index % 3) * 5 : 68 + (index % 6) * 11;
    const size = 3 + (index % 4) * 1.4;
    spark.style.setProperty("--spark-angle", `${angle}deg`);
    spark.style.setProperty("--spark-distance", `${distance}px`);
    spark.style.setProperty("--spark-delay", `${reducedMotion ? 0 : (index % 5) * 12}ms`);
    spark.style.setProperty("--spark-size", `${size}px`);
    spark.style.setProperty("--spark-color", colors[index % colors.length]);
    fragment.appendChild(spark);
    finalSpark = spark;
  }

  burst.appendChild(fragment);
  button.appendChild(burst);

  const cleanup = () => burst.remove();
  finalSpark?.addEventListener("animationend", cleanup, { once: true });
  window.setTimeout(cleanup, reducedMotion ? 320 : 950);
}

function scheduleShareAsset(card, index, shareButton) {
  cancelScheduledSharePreparation?.();
  cancelScheduledSharePreparation = null;

  shareButton.disabled = true;
  shareButton.setAttribute("aria-busy", "true");
  shareButton.innerHTML = "Готовим изображение…";

  const prepare = () => {
    cancelScheduledSharePreparation = null;
    prepareShareAsset(card, index)
      .then(() => {
        if (selected !== index || !shareButton.isConnected) return;
        shareButton.disabled = false;
        shareButton.removeAttribute("aria-busy");
        shareButton.innerHTML = 'Поделиться <span aria-hidden="true">↗</span>';
      })
      .catch((error) => {
        if (selected === index && shareButton.isConnected) {
          shareButton.disabled = false;
          shareButton.removeAttribute("aria-busy");
          shareButton.innerHTML = 'Поделиться <span aria-hidden="true">↗</span>';
          document.getElementById("share-status").textContent = "PNG подготовится при открытии меню публикации.";
        }
        console.error("Не удалось заранее подготовить PNG", error);
      });
  };

  if (typeof window.requestIdleCallback === "function") {
    const handle = window.requestIdleCallback(prepare, { timeout: 1200 });
    cancelScheduledSharePreparation = () => window.cancelIdleCallback?.(handle);
  } else {
    const handle = window.setTimeout(prepare, 80);
    cancelScheduledSharePreparation = () => window.clearTimeout(handle);
  }
}

function renderReading(index) {
  const card = cards[index];
  readingArea.innerHTML = `
    <div class="reading" id="reading">
      <div class="reading-celebration" aria-hidden="true">
        <span class="reading-sparkle sparkle-one">✦</span>
        <span class="reading-sparkle sparkle-two">✦</span>
        <span class="reading-sparkle sparkle-three">✦</span>
        <span class="reading-sparkle sparkle-four">✦</span>
        <span class="reading-sparkle sparkle-five">✦</span>
      </div>
      <div class="reading-card-wrap">
        <article class="tarot-front accent-${card.accent}">
          <span class="card-foil" aria-hidden="true"></span>
          <div class="tarot-border">
            <div class="card-constellation" aria-hidden="true">
              <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            </div>
            <span class="card-number">${card.number}</span>
            <div class="card-ornament">
              <div class="symbol-halo"><span class="card-symbol">${card.symbol}</span>${sockMark()}</div>
            </div>
            <div class="front-title"><span class="card-micro-label">Знак 2027</span><h3>${card.name}</h3><p>${card.kicker}</p></div>
            <span class="card-number inverted">${card.number}</span>
          </div>
        </article>
      </div>
      <div class="reading-copy">
        <div class="reading-toast-row" aria-hidden="true">
          <span class="toast-rule"></span>
          <svg class="champagne-toast" viewBox="0 0 150 112" role="presentation">
            <g class="flute flute-left" transform="rotate(-13 56 54)">
              <path d="M31 8h43l-7 47c-2 13-10 21-18 21s-16-8-18-21L31 8Z"/>
              <path class="champagne-fill" d="M35 35h35l-3 20c-2 12-10 18-18 18s-15-6-17-18l3-20Z"/>
              <path d="M49 76v23M37 102h24"/>
              <circle class="champagne-bubble bubble-a" cx="44" cy="53" r="2"/>
              <circle class="champagne-bubble bubble-b" cx="56" cy="46" r="2.5"/>
              <circle class="champagne-bubble bubble-c" cx="62" cy="57" r="1.7"/>
            </g>
            <g class="flute flute-right" transform="rotate(13 96 54)">
              <path d="M77 8h43l-7 47c-2 13-10 21-18 21s-16-8-18-21L77 8Z"/>
              <path class="champagne-fill" d="M81 35h35l-3 20c-2 12-10 18-18 18s-15-6-17-18l3-20Z"/>
              <path d="M95 76v23M83 102h24"/>
              <circle class="champagne-bubble bubble-b" cx="90" cy="54" r="2"/>
              <circle class="champagne-bubble bubble-c" cx="102" cy="46" r="2.5"/>
              <circle class="champagne-bubble bubble-a" cx="108" cy="58" r="1.7"/>
            </g>
          </svg>
          <span class="toast-rule"></span>
        </div>
        <p class="eyebrow">Твой новогодний знак на 2027 год</p>
        <h2>${card.name}</h2>
        <p class="prediction">${card.prediction}</p>
        <div class="reading-details">
          <div><span>Напутствие шёлковой нити</span><p>${card.advice}</p></div>
          <div><span>Талисман 2027 года</span><p>${card.charm}</p></div>
        </div>
        <p class="share-nudge">Эта карта напомнила о ком-то?</p>
        <div class="reading-actions">
          <button class="primary-action share-action" id="share-reading">Поделиться <span aria-hidden="true">↗</span></button>
          <button class="secondary-action" id="reset-reading">Вытянуть карту для друга <span aria-hidden="true">↻</span></button>
        </div>
        <p class="share-status" id="share-status" aria-live="polite"></p>
      </div>
    </div>`;

  const shareButton = document.getElementById("share-reading");
  document.getElementById("reset-reading").addEventListener("click", resetReading);
  shareButton.addEventListener("click", (event) => openShareDialog(card, index, event.currentTarget));
  window.requestAnimationFrame(() => {
    document.getElementById("reading")?.classList.add("revealed");
    window.setTimeout(() => document.getElementById("reading")?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
    scheduleShareAsset(card, index, shareButton);
  });
}

function resetReading() {
  cancelScheduledSharePreparation?.();
  cancelScheduledSharePreparation = null;
  document.getElementById("reading")?.classList.remove("revealed");
  window.setTimeout(() => {
    closeShareDialog(false);
    selected = null;
    cachedShareAsset = null;
    shareGeneration = null;
    shareDialogContext = null;
    deckTitle.textContent = "Выбери карту для друга";
    deckSubtitle.textContent = "Подумай о человеке и доверься первой карте, которая позовёт.";
    readingArea.innerHTML = deckMarkup();
    bindDeck();
    document.getElementById("deck")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 240);
}

function bindDeck() {
  document.querySelectorAll("[data-card-index]").forEach((button) => {
    button.addEventListener("click", () => chooseCard(Number(button.dataset.cardIndex), button));
  });
}

function roundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function wrapText(ctx, text, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function drawCenteredLines(ctx, lines, x, startY, lineHeight) {
  lines.forEach((line, index) => ctx.fillText(line, x, startY + index * lineHeight));
}

function seededRandom(seed) {
  let value = (seed + 1) * 214013 + 2531011;
  return () => {
    value = (value * 1103515245 + 12345) & 0x7fffffff;
    return value / 0x7fffffff;
  };
}

function drawFirBranch(ctx, x, y, direction = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(direction, 1);
  ctx.lineCap = "round";
  ctx.strokeStyle = "#65768c";
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-30, 8);
  ctx.bezierCurveTo(90, 42, 205, 104, 330, 205);
  ctx.stroke();

  for (let i = 0; i < 10; i += 1) {
    const px = 20 + i * 31;
    const py = 25 + i * 17;
    const length = 90 - i * 3;
    ctx.strokeStyle = i % 2 ? "#d8e5f2" : "#8799ae";
    ctx.lineWidth = 11;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px - 12, py + length);
    ctx.moveTo(px + 7, py + 4);
    ctx.lineTo(px + 67, py + length * 0.7);
    ctx.stroke();
    ctx.strokeStyle = "#f3f8ff";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(px - 2, py + 12);
    ctx.lineTo(px - 48, py + length * 0.62);
    ctx.moveTo(px + 12, py + 18);
    ctx.lineTo(px + 78, py + length * 0.52);
    ctx.stroke();
  }
  ctx.restore();
}

function drawSockOrnament(ctx, x, y, scale, color, rotation = 0) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(scale, scale);
  ctx.strokeStyle = "rgba(225,236,250,.92)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(20, -82);
  ctx.lineTo(20, 0);
  ctx.stroke();
  ctx.fillStyle = "#dce7f3";
  ctx.fillRect(8, -3, 24, 9);

  ctx.shadowColor = "rgba(0,0,0,.3)";
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 8;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, 5);
  ctx.lineTo(42, 5);
  ctx.lineTo(42, 66);
  ctx.bezierCurveTo(55, 71, 70, 74, 80, 83);
  ctx.bezierCurveTo(88, 91, 84, 103, 75, 109);
  ctx.lineTo(46, 127);
  ctx.bezierCurveTo(24, 140, 1, 126, 1, 103);
  ctx.closePath();
  ctx.fill();
  ctx.shadowColor = "transparent";

  ctx.fillStyle = "rgba(255,250,241,.78)";
  ctx.beginPath();
  ctx.arc(18, 35, 3, 0, Math.PI * 2);
  ctx.arc(31, 48, 2, 0, Math.PI * 2);
  ctx.arc(17, 63, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawStorySymbol(ctx, symbol, x, y) {
  ctx.save();
  ctx.translate(x, y);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#f5f8ff";
  ctx.fillStyle = "#f5f8ff";
  ctx.lineWidth = 9;

  if (symbol === "★" || symbol === "✦") {
    const points = symbol === "★" ? 5 : 4;
    const outer = 70;
    const inner = symbol === "★" ? 30 : 14;
    ctx.beginPath();
    for (let point = 0; point < points * 2; point += 1) {
      const radius = point % 2 ? inner : outer;
      const angle = -Math.PI / 2 + point * Math.PI / points;
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;
      if (point === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
  } else if (symbol === "❄") {
    for (let arm = 0; arm < 6; arm += 1) {
      ctx.save();
      ctx.rotate(arm * Math.PI / 3);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -70);
      ctx.moveTo(0, -42);
      ctx.lineTo(-15, -57);
      ctx.moveTo(0, -42);
      ctx.lineTo(15, -57);
      ctx.stroke();
      ctx.restore();
    }
  } else if (symbol === "◇" || symbol === "◆") {
    ctx.beginPath();
    ctx.moveTo(0, -72);
    ctx.lineTo(58, 0);
    ctx.lineTo(0, 72);
    ctx.lineTo(-58, 0);
    ctx.closePath();
    if (symbol === "◆") ctx.fill();
    else ctx.stroke();
  } else if (symbol === "○") {
    ctx.beginPath();
    ctx.arc(0, 0, 66, 0, Math.PI * 2);
    ctx.stroke();
  } else {
    ctx.font = "600 132px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(symbol, 0, 0);
  }
  ctx.restore();
}

function createStoryCanvas(card, index) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext("2d");

  const background = ctx.createLinearGradient(0, 0, 1080, 1920);
  background.addColorStop(0, "#09132f");
  background.addColorStop(0.5, "#241348");
  background.addColorStop(1, "#080b27");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, 1080, 1920);

  const glow = ctx.createRadialGradient(540, 570, 30, 540, 570, 690);
  glow.addColorStop(0, "rgba(164,190,255,.25)");
  glow.addColorStop(0.52, "rgba(172,124,221,.12)");
  glow.addColorStop(1, "rgba(164,190,255,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 1080, 1300);

  const random = seededRandom(index);
  for (let i = 0; i < 76; i += 1) {
    const x = 48 + random() * 984;
    const y = 40 + random() * 1760;
    const radius = random() > 0.86 ? 2.2 : 1.1;
    ctx.globalAlpha = 0.2 + random() * 0.55;
    ctx.fillStyle = random() > 0.72 ? "#b9cfff" : "#ffffff";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  drawFirBranch(ctx, 0, 12, 1);
  drawFirBranch(ctx, 1080, 12, -1);
  drawSockOrnament(ctx, 92, 122, 0.66, "#741737", -0.06);
  drawSockOrnament(ctx, 936, 132, 0.62, "#c8d6e7", 0.06);

  ctx.textAlign = "center";
  ctx.fillStyle = "#dce9ff";
  ctx.font = "700 25px Arial, sans-serif";
  ctx.fillText("БРЕСТСКИЕ · НОСОЧНОЕ ТАРО", 540, 84);
  ctx.fillStyle = "rgba(232,238,255,.76)";
  ctx.font = "600 20px Arial, sans-serif";
  ctx.fillText("НОВОГОДНИЙ ЗНАК НА 2027 ГОД", 540, 126);

  const cardX = 250;
  const cardY = 205;
  const cardW = 580;
  const cardH = 870;
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,.45)";
  ctx.shadowBlur = 48;
  ctx.shadowOffsetY = 22;
  const palette = storyCardPalettes[card.accent];
  const cardGradient = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
  cardGradient.addColorStop(0, palette[0]);
  cardGradient.addColorStop(1, palette[1]);
  ctx.fillStyle = cardGradient;
  roundedRect(ctx, cardX, cardY, cardW, cardH, 28);
  ctx.fill();
  ctx.restore();

  const accent = accentColors[card.accent];
  ctx.save();
  roundedRect(ctx, cardX, cardY, cardW, cardH, 28);
  ctx.clip();
  for (let i = 0; i < 44; i += 1) {
    const x = cardX + 36 + random() * (cardW - 72);
    const y = cardY + 36 + random() * (cardH - 72);
    const radius = random() > 0.86 ? 2.8 : 1.25;
    ctx.globalAlpha = 0.22 + random() * 0.54;
    ctx.fillStyle = random() > 0.66 ? "#c6d8ff" : "#ffffff";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  ctx.restore();

  ctx.strokeStyle = "#dce9f8";
  ctx.lineWidth = 5;
  roundedRect(ctx, cardX + 25, cardY + 25, cardW - 50, cardH - 50, 17);
  ctx.stroke();
  ctx.strokeStyle = "rgba(201,218,244,.56)";
  ctx.lineWidth = 2;
  roundedRect(ctx, cardX + 40, cardY + 40, cardW - 80, cardH - 80, 12);
  ctx.stroke();

  ctx.textAlign = "left";
  ctx.fillStyle = "#dce8f8";
  ctx.font = "600 31px 'Cormorant Garamond Local', Georgia, serif";
  ctx.fillText(card.number, cardX + 64, cardY + 82);
  ctx.textAlign = "right";
  ctx.fillText(card.number, cardX + cardW - 64, cardY + cardH - 24);

  ctx.textAlign = "center";
  const ornamentGlow = ctx.createRadialGradient(540, 555, 24, 540, 555, 190);
  ornamentGlow.addColorStop(0, `${accent}88`);
  ornamentGlow.addColorStop(1, "rgba(255,255,255,.025)");
  ctx.fillStyle = ornamentGlow;
  ctx.beginPath();
  ctx.arc(540, 555, 177, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#e5effc";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(540, 555, 170, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(540, 555, 151, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = "rgba(216,231,250,.88)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(540, cardY + 40);
  ctx.lineTo(540, 377);
  ctx.stroke();
  ctx.fillStyle = "#f5f8ff";
  drawStorySymbol(ctx, card.symbol, 540, 555);

  ctx.fillStyle = "#cfdef4";
  ctx.font = "700 19px 'Cormorant Garamond Local', Georgia, serif";
  ctx.fillText("ЗНАК 2027", 540, 826);
  ctx.fillStyle = "#fbf9ff";
  ctx.font = "600 50px 'Cormorant Garamond Local', Georgia, serif";
  const nameLines = wrapText(ctx, card.name, 430);
  drawCenteredLines(ctx, nameLines, 540, 890, 52);

  ctx.fillStyle = "#f4f6ff";
  ctx.font = "500 47px 'Cormorant Garamond Local', Georgia, serif";
  const predictionLines = wrapText(ctx, card.share, 850);
  drawCenteredLines(ctx, predictionLines, 540, 1215, 62);

  ctx.strokeStyle = "rgba(197,216,246,.42)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(150, 1590);
  ctx.lineTo(930, 1590);
  ctx.stroke();

  ctx.fillStyle = "#dce9ff";
  ctx.font = "700 38px Arial, sans-serif";
  ctx.fillText("instagram.com/bchkofficial", 540, 1745);

  return canvas;
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("Не удалось создать изображение")), "image/png");
  });
}

function downloadStory(file) {
  if (!(file instanceof File) || !file.size) return false;
  const link = document.createElement("a");
  const objectUrl = URL.createObjectURL(file);
  link.href = objectUrl;
  link.download = file.name;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);
  return true;
}

function slugifyFileName(value) {
  return value
    .toLocaleLowerCase("ru")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "") || "moy-znak";
}

function shareCaption(card) {
  return `Мой знак на 2027 год — «${card.name}». ${card.share}\n\nВытяни свою карту:  https://www.instagram.com/bchkofficial/`;
}

async function prepareShareAsset(card, index) {
  if (cachedShareAsset?.index === index) return cachedShareAsset;
  if (shareGeneration?.index === index) return shareGeneration.promise;

  const promise = (async () => {
    await document.fonts?.ready;
    const canvas = createStoryCanvas(card, index);
    if (canvas.width !== 1080 || canvas.height !== 1920) {
      throw new Error("Неверный размер изображения Stories");
    }
    const blob = await canvasToBlob(canvas);
    if (!blob.size) throw new Error("PNG получился пустым");
    const file = new File(
      [blob],
      `novogodnee-taro-2027-${slugifyFileName(card.name)}.png`,
      { type: "image/png" }
    );
    const asset = { card, index, file, width: canvas.width, height: canvas.height };
    if (selected === index) cachedShareAsset = asset;
    return asset;
  })();

  shareGeneration = { index, promise };
  try {
    return await promise;
  } finally {
    if (shareGeneration?.promise === promise) shareGeneration = null;
  }
}

function canShareFile(file) {
  if (typeof navigator.share !== "function" || typeof navigator.canShare !== "function") return false;
  try {
    return navigator.canShare({ files: [file] });
  } catch {
    return false;
  }
}

const shareModal = document.getElementById("share-modal");
const shareSheet = shareModal?.querySelector(".share-sheet");
const shareNativeButton = document.getElementById("share-native");
const shareDownloadButton = document.getElementById("share-download");
const shareCopyButton = document.getElementById("share-copy");
const shareNativeHint = document.getElementById("share-native-hint");
const shareModalStatus = document.getElementById("share-modal-status");

function updateShareDialog(asset) {
  const supported = canShareFile(asset.file);
  shareDownloadButton.disabled = false;
  shareNativeButton.disabled = !supported;
  shareNativeHint.textContent = supported
    ? "Откроется системное меню. Выберите Instagram, Threads или другое приложение."
    : "На этом устройстве скачайте PNG и добавьте его в Instagram вручную.";
  shareModalStatus.textContent = "Карточка 1080×1920 готова.";
}

function openShareDialog(card, index, trigger) {
  shareDialogContext = { card, index };
  shareReturnFocus = trigger || document.activeElement;
  shareNativeButton.disabled = true;
  shareDownloadButton.disabled = true;
  shareNativeHint.textContent = "Откроется системное меню. Выберите Instagram, Threads или другое приложение.";
  shareModalStatus.textContent = "Создаём вертикальную карточку для Stories…";
  shareModal.hidden = false;
  document.body.classList.add("share-modal-open");
  window.requestAnimationFrame(() => shareModal.classList.add("is-open"));
  shareSheet.focus();

  prepareShareAsset(card, index)
    .then((asset) => {
      if (shareDialogContext?.index === index && !shareModal.hidden) updateShareDialog(asset);
    })
    .catch((error) => {
      shareModalStatus.textContent = "Не удалось создать PNG. Закройте окно и попробуйте ещё раз.";
      console.error(error);
    });
}

function closeShareDialog(restoreFocus = true) {
  if (!shareModal || shareModal.hidden) return;
  shareModal.classList.remove("is-open");
  document.body.classList.remove("share-modal-open");
  window.setTimeout(() => {
    shareModal.hidden = true;
    if (restoreFocus) shareReturnFocus?.focus?.();
  }, 180);
}

async function shareInApplication() {
  const asset = cachedShareAsset;
  if (!asset || !canShareFile(asset.file)) {
    shareModalStatus.textContent = "На этом устройстве скачайте PNG и добавьте его в Instagram вручную.";
    return;
  }

  try {
    await navigator.share({
      files: [asset.file],
      title: "Мой новогодний знак на 2027 год",
      text: shareCaption(asset.card)
    });
    shareModalStatus.textContent = "Карточка передана в выбранное приложение.";
  } catch (error) {
    if (error?.name === "AbortError") {
      shareModalStatus.textContent = "";
    } else {
      shareModalStatus.textContent = "Не получилось открыть меню. Скачайте PNG и загрузите его вручную.";
      console.error(error);
    }
  }
}

function downloadPreparedStory() {
  const asset = cachedShareAsset;
  if (!asset) {
    shareModalStatus.textContent = "PNG ещё готовится. Подождите секунду.";
    return;
  }
  if (downloadStory(asset.file)) {
    shareModalStatus.textContent = "PNG сохранён в папку «Загрузки».";
  } else {
    shareModalStatus.textContent = "Не удалось запустить скачивание. Попробуйте ещё раз.";
  }
}

function copyTextFallback(text) {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();
  return copied;
}

async function copyShareCaption() {
  const card = shareDialogContext?.card;
  if (!card) return;
  const text = shareCaption(card);
  try {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        if (!copyTextFallback(text)) throw new Error("Копирование не поддерживается");
      }
    } else if (!copyTextFallback(text)) {
      throw new Error("Копирование не поддерживается");
    }
    shareModalStatus.textContent = "Подпись и ссылка скопированы.";
  } catch (error) {
    shareModalStatus.textContent = "Не удалось скопировать. Выберите текст и скопируйте его вручную.";
    console.error(error);
  }
}

shareModal?.querySelectorAll("[data-share-close]").forEach((button) => {
  button.addEventListener("click", () => closeShareDialog());
});
shareNativeButton?.addEventListener("click", shareInApplication);
shareDownloadButton?.addEventListener("click", downloadPreparedStory);
shareCopyButton?.addEventListener("click", copyShareCaption);

shareModal?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    closeShareDialog();
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = [...shareSheet.querySelectorAll("button:not([disabled]), [href], [tabindex]:not([tabindex='-1'])")]
    .filter((element) => !element.hidden);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

readingArea.innerHTML = deckMarkup();
bindDeck();

document.getElementById("postcard-friend")?.addEventListener("click", () => {
  if (selected !== null) resetReading();
  else document.getElementById("deck")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

const postcardVisual = document.querySelector(".postcard-visual");
if (postcardVisual) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const latest = entries[entries.length - 1];
      postcardVisual.classList.toggle("is-in-view", latest.isIntersecting);
    });
    observer.observe(postcardVisual);
  } else {
    const updateVisibility = () => {
      const { top, bottom } = postcardVisual.getBoundingClientRect();
      postcardVisual.classList.toggle("is-in-view", bottom > 0 && top < window.innerHeight);
    };
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    updateVisibility();
  }
}
