// 四个核心心理维度：
// empathy: 共情与温暖 | logic: 理性与秩序 | adventure: 探索与热情 | calm: 沉静与内省

const QUESTIONS = [
  {
    tag: "潜意识场景 · 01",
    text: "周末难得完全空闲，没有任何待办事项，你最想怎么度过？",
    options: [
      { text: "约上三五好友去新开的网红店打卡、聊八卦", scores: { empathy: 2, adventure: 2 } },
      { text: "窝在沙发里看一部治愈系电影或听着雨声发呆", scores: { calm: 3, empathy: 1 } },
      { text: "趁机整理房间、复盘近期计划，把生活理顺", scores: { logic: 3, calm: 1 } },
      { text: "来一场说走就走的短途兜风，去没去过的地方", scores: { adventure: 3, calm: 1 } }
    ]
  },
  {
    tag: "情绪反应 · 02",
    text: "当好朋友深夜发消息向你倾诉烦恼时，你的第一反应是？",
    options: [
      { text: "立刻共情安抚，陪 TA 一起吐槽直到心情变好", scores: { empathy: 3, adventure: 1 } },
      { text: "认真听完后，帮 TA 拆解问题并给出可执行建议", scores: { logic: 3, empathy: 1 } },
      { text: "安静地陪伴倾听，给 TA 一个不被评判的安全空间", scores: { calm: 3, empathy: 1 } },
      { text: "拉 TA 出去吃顿夜宵或打局游戏，直接转移注意力", scores: { adventure: 3, empathy: 1 } }
    ]
  },
  {
    tag: "旅行直觉 · 03",
    text: "如果可以瞬间传送到一个地方放松三天，你会选择？",
    options: [
      { text: "日落时分的海边小镇，吹着温柔的晚风", scores: { empathy: 2, calm: 2 } },
      { text: "充满未知与挑战的雪山徒步或热带雨林", scores: { adventure: 3, logic: 1 } },
      { text: "人迹罕至的北欧木屋，抬头就能看见极光", scores: { calm: 3, logic: 1 } },
      { text: "霓虹闪烁的国际大都市，体验最新潮的艺术展", scores: { adventure: 2, logic: 2 } }
    ]
  },
  {
    tag: "决策模式 · 04",
    text: "面对一个重要但充满不确定性的新机会，你通常会？",
    options: [
      { text: "先列出利弊清单，评估风险和回报后再决定", scores: { logic: 3, calm: 1 } },
      { text: "相信直觉！心动了就先冲，办法总比困难多", scores: { adventure: 3, empathy: 1 } },
      { text: "问问身边信任的人的看法，听听大家的感受", scores: { empathy: 3, logic: 1 } },
      { text: "先独处几天，问问自己内心真正想要的是什么", scores: { calm: 3, logic: 1 } }
    ]
  },
  {
    tag: "社交能量 · 05",
    text: "在一个大部分人都不认识的聚会上，你通常处于什么状态？",
    options: [
      { text: "自然地找人聊天，很快就能和大家打成一片", scores: { adventure: 2, empathy: 2 } },
      { text: "照顾角落里同样尴尬的人，和 TA 成为临时搭子", scores: { empathy: 3, calm: 1 } },
      { text: "安静观察全场，只在感兴趣的话题上简短发言", scores: { calm: 2, logic: 2 } },
      { text: "礼貌社交一阵子，心里默默倒计时准备提前溜走", scores: { calm: 3, logic: 1 } }
    ]
  },
  {
    tag: "美学偏好 · 06",
    text: "以下哪一种画面最能让你瞬间感到治愈？",
    options: [
      { text: "傍晚橘粉色的晚霞铺满整片天空", scores: { empathy: 3, adventure: 1 } },
      { text: "清晨阳光透过树叶洒在微湿的青苔上", scores: { calm: 3, empathy: 1 } },
      { text: "极简设计的建筑线条与干净利落的光影", scores: { logic: 3, calm: 1 } },
      { text: "烟花在夜空中绽放、人群欢呼的那一秒", scores: { adventure: 3, empathy: 1 } }
    ]
  },
  {
    tag: "压力释放 · 07",
    text: "当你感到非常疲惫、压力山大时，什么最能帮你回血？",
    options: [
      { text: "关掉手机，彻底独处，谁也不联系", scores: { calm: 3, logic: 1 } },
      { text: "找最亲近的人抱一抱，或者大哭一场释放情绪", scores: { empathy: 3, calm: 1 } },
      { text: "去运动、唱歌或大吃一顿，把多巴胺拉满", scores: { adventure: 3, empathy: 1 } },
      { text: "把焦虑写成清单，逐一划掉可控的小事", scores: { logic: 3, calm: 1 } }
    ]
  },
  {
    tag: "团队角色 · 08",
    text: "在团队合作完成一个有趣的项目时，你最擅长扮演？",
    options: [
      { text: "脑洞大开的创意发起者，不断提出新点子", scores: { adventure: 3, empathy: 1 } },
      { text: "把控节奏的规划者，让一切井井有条", scores: { logic: 3, adventure: 1 } },
      { text: "润滑气氛的协调者，让每个人都感到被尊重", scores: { empathy: 3, calm: 1 } },
      { text: "沉稳可靠的幕后专家，默默攻克最难的部分", scores: { calm: 2, logic: 2 } }
    ]
  },
  {
    tag: "潜意识隐喻 · 09",
    text: "如果此刻你走进一家神秘的杂货店，只能带走一件物品，你会选？",
    options: [
      { text: "一本能记录所有人温暖回忆的复古相册", scores: { empathy: 3, calm: 1 } },
      { text: "一块能看清未来十天走势的透明水晶表", scores: { logic: 3, adventure: 1 } },
      { text: "一张可以通往任意未知世界的单程车票", scores: { adventure: 3, calm: 1 } },
      { text: "一盏能让人听见自己内心声音的月光灯", scores: { calm: 3, empathy: 1 } }
    ]
  },
  {
    tag: "人生信条 · 10",
    text: "以下哪句话最能引起你此刻的共鸣？",
    options: [
      { text: "世界很大，我想趁热去爱、去闯、去体验一切。", scores: { adventure: 3, empathy: 1 } },
      { text: "保持清醒与克制，是对自己最好的温柔。", scores: { logic: 3, calm: 1 } },
      { text: "真正的力量，往往诞生于安静而深邃的内心。", scores: { calm: 3, logic: 1 } },
      { text: "人与人之间真诚的联结，才是生活最动人的光。", scores: { empathy: 3, calm: 1 } }
    ]
  }
];

const RESULTS = [
  {
    id: "coral",
    name: "日落珊瑚橙",
    en: "SUNSET CORAL · 温暖的造梦者",
    code: "#FF7E67",
    gradient: "linear-gradient(135deg, #ff7e67 0%, #ffb085 100%)",
    accent: "#ff7e67",
    tags: ["#天生共情力", "#治愈系能量", "#浪漫理想主义"],
    desc: "你像傍晚六点的落日余晖，自带柔和而炽热的感染力。你对人的情绪极其敏锐，总能在不经意间察觉别人的委屈并递上一份恰到好处的温柔。虽然偶尔会因为太在意他人而内耗，但你骨子里的真诚与热爱，让你成为身边人最想靠近的避风港。",
    love: "在感情里细腻且重仪式感，渴望双向奔赴的深度理解，一旦认定就会毫无保留地付出。",
    match: { name: "深海静谧蓝", color: "#3b82f6" },
    quote: "你不需要刻意发光，因为你温柔对待世界的样子，本身就是光。"
  },
  {
    id: "mint",
    name: "极光薄荷绿",
    en: "AURORA MINT · 自由的探索家",
    code: "#10B981",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
    accent: "#10b981",
    tags: ["#反骨与自由", "#好奇心爆棚", "#高能量行动派"],
    desc: "你的灵魂像一阵穿过森林的清爽微风，拒绝被任何标签和规则框住。你对世界充满旺盛的好奇心，喜欢新鲜感、冒险和打破常规的瞬间。和你在一起永远不会无聊，因为你总能把平凡的日子过出电影般的惊喜感。",
    love: "讨厌束缚与猜忌，最理想的关系是既能一起疯闹看世界，又能各自独立闪耀。",
    match: { name: "星云幻梦紫", color: "#8b5cf6" },
    quote: "风往哪儿吹不重要，重要的是你永远拥有出发的勇气。"
  },
  {
    id: "ocean",
    name: "深海静谧蓝",
    en: "DEEP OCEAN BLUE · 清醒的思考者",
    code: "#3B82F6",
    gradient: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
    accent: "#3b82f6",
    tags: ["#人间清醒", "#逻辑掌控者", "#外冷内热"],
    desc: "你拥有如深海般沉静而笃定的内核。在喧嚣浮躁的环境里，你总能保持难得的理智与边界感，一眼看穿事情的本质。不熟悉你的人可能觉得你有些高冷，但只有走进你内心的人才知道，你的理性背后藏着极其可靠与深情的温柔。",
    love: "慢热但长情，不轻易许诺，但说出口的每一件事都会稳稳做到。",
    match: { name: "日落珊瑚橙", color: "#ff7e67" },
    quote: "不必急着向世界证明什么，深海从不喧哗，却自有万钧之力。"
  },
  {
    id: "nebula",
    name: "星云幻梦紫",
    en: "NEBULA VIOLET · 神秘的灵感捕手",
    code: "#8B5CF6",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #c084fc 100%)",
    accent: "#8b5cf6",
    tags: ["#直觉天才", "#独特审美", "#精神世界丰富"],
    desc: "你的内心住着一座装满星辰的秘密花园。你既有天马行空的想象力，又有敏锐到近乎第六感的洞察力。你常常能看到别人忽略的细节与美感，在独处时反而最能迸发出惊人的创造力，是人群中气质最独特、最难被复制的存在。",
    love: "极度看重精神共鸣，一句懂你的话，胜过千百句流于表面的甜言蜜语。",
    match: { name: "极光薄荷绿", color: "#10b981" },
    quote: "你与众不同的频率，正是用来吸引真正懂你之人的信号。"
  },
  {
    id: "amber",
    name: "琥珀暖阳金",
    en: "AMBER SUNLIGHT · 闪耀的破局者",
    code: "#F59E0B",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
    accent: "#f59e0b",
    tags: ["#天生领袖气质", "#执行力拉满", "#乐观笃定"],
    desc: "你兼具热情的行动力与清晰的判断力，就像正午穿透云层的暖阳。面对困难你很少陷入无意义的抱怨，而是迅速找到突破口并带动身边人一起向前。你自带令人安心的气场，是团队和朋友眼中永远可以信赖的主心骨。",
    love: "坦荡直接、大方热烈，喜欢势均力敌、彼此成就的高质量亲密关系。",
    match: { name: "月光银灰白", color: "#64748b" },
    quote: "你所热爱的与你所坚持的，终将把你带向闪闪发光的地方。"
  },
  {
    id: "moon",
    name: "月光银灰白",
    en: "MOONLIGHT SILVER · 治愈的观察者",
    code: "#64748B",
    gradient: "linear-gradient(135deg, #475569 0%, #94a3b8 100%)",
    accent: "#64748b",
    tags: ["#松弛感大师", "#内心秩序", "#温柔克制"],
    desc: "你像静谧夜晚的柔和月光，不争不抢，却拥有让人瞬间安静下来的神奇力量。你很懂得与自己相处，不会被外界的焦虑轻易裹挟。你追求刚刚好的生活节奏，在喧嚣的世界里守住了自己最珍贵的松弛与通透。",
    love: "追求细水长流的安稳，不爱戏剧化的拉扯，最珍惜彼此尊重的舒适感。",
    match: { name: "琥珀暖阳金", color: "#f59e0b" },
    quote: "慢一点也没关系，属于你的风景，会在最恰当的时刻向你走来。"
  }
];

// 状态管理
let currentIndex = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let currentResult = null;

// DOM 元素
const screens = {
  start: document.getElementById("screen-start"),
  quiz: document.getElementById("screen-quiz"),
  loading: document.getElementById("screen-loading"),
  result: document.getElementById("screen-result")
};

const btnStart = document.getElementById("btn-start");
const btnPrev = document.getElementById("btn-prev");
const btnShare = document.getElementById("btn-share");
const btnRestart = document.getElementById("btn-restart");

const currentQEl = document.getElementById("current-q");
const totalQEl = document.getElementById("total-q");
const progressBar = document.getElementById("progress-bar");
const questionBox = document.getElementById("question-box");
const questionTag = document.getElementById("question-tag");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const loadingTip = document.getElementById("loading-tip");
const toastEl = document.getElementById("toast");

totalQEl.textContent = QUESTIONS.length;

function showScreen(name) {
  Object.values(screens).forEach((el) => el.classList.remove("active"));
  screens[name].classList.add("active");
}

function renderQuestion() {
  const q = QUESTIONS[currentIndex];
  currentQEl.textContent = currentIndex + 1;
  progressBar.style.width = `${((currentIndex + 1) / QUESTIONS.length) * 100}%`;
  btnPrev.disabled = currentIndex === 0;

  questionTag.textContent = q.tag;
  questionText.textContent = q.text;
  optionsList.innerHTML = "";

  const letters = ["A", "B", "C", "D"];
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    if (answers[currentIndex] === idx) {
      btn.classList.add("selected");
    }
    btn.innerHTML = `
      <span class="option-letter">${letters[idx]}</span>
      <span>${opt.text}</span>
    `;
    btn.addEventListener("click", () => selectOption(idx));
    optionsList.appendChild(btn);
  });
}

function selectOption(optionIdx) {
  answers[currentIndex] = optionIdx;
  const allBtns = optionsList.querySelectorAll(".option-btn");
  allBtns.forEach((b, i) => b.classList.toggle("selected", i === optionIdx));

  setTimeout(() => {
    if (currentIndex < QUESTIONS.length - 1) {
      questionBox.classList.add("switching");
      setTimeout(() => {
        currentIndex++;
        renderQuestion();
        questionBox.classList.remove("switching");
      }, 180);
    } else {
      startAnalysis();
    }
  }, 220);
}

function startAnalysis() {
  showScreen("loading");
  const tips = [
    "正在解析你的直觉选择...",
    "正在计算四维心理能量分布...",
    "正在生成你的专属灵魂底色报告..."
  ];
  let step = 0;
  loadingTip.textContent = tips[0];

  const timer = setInterval(() => {
    step++;
    if (step < tips.length) {
      loadingTip.textContent = tips[step];
    } else {
      clearInterval(timer);
      computeAndShowResult();
    }
  }, 550);
}

function computeAndShowResult() {
  const totals = { empathy: 0, logic: 0, adventure: 0, calm: 0 };

  answers.forEach((optIdx, qIdx) => {
    const opt = QUESTIONS[qIdx].options[optIdx];
    Object.entries(opt.scores).forEach(([key, val]) => {
      totals[key] += val;
    });
  });

  // 排序找出主维度和次维度
  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const primary = sorted[0][0];
  const secondary = sorted[1][0];

  // 根据主次维度匹配 6 种灵魂色彩
  let resultId = "coral";
  if (primary === "empathy") {
    resultId = secondary === "calm" ? "nebula" : "coral";
  } else if (primary === "adventure") {
    resultId = secondary === "logic" ? "amber" : "mint";
  } else if (primary === "logic") {
    resultId = secondary === "adventure" ? "amber" : "ocean";
  } else if (primary === "calm") {
    resultId = secondary === "empathy" ? "nebula" : "moon";
  }

  currentResult = RESULTS.find((r) => r.id === resultId) || RESULTS[0];
  renderResult(currentResult, totals);
  showScreen("result");
}

function renderResult(res, totals) {
  document.getElementById("result-poster").style.background = res.gradient;
  document.getElementById("result-code").textContent = res.code;
  document.getElementById("result-name").textContent = res.name;
  document.getElementById("result-en").textContent = res.en;
  document.getElementById("result-desc").textContent = res.desc;
  document.getElementById("result-love").textContent = res.love;
  document.getElementById("result-quote").textContent = res.quote;

  const tagsEl = document.getElementById("result-tags");
  tagsEl.innerHTML = res.tags.map((t) => `<span>${t}</span>`).join("");

  const matchEl = document.getElementById("result-match");
  matchEl.innerHTML = `
    <span class="match-dot" style="background:${res.match.color}"></span>
    <span>${res.match.name}</span>
  `;

  // 计算四维百分比（归一化到 45% - 98% 区间，视觉更友好）
  const maxPossible = 24;
  const traitMeta = [
    { key: "empathy", label: "共情温暖度", color: "#ff7e67" },
    { key: "adventure", label: "探索行动力", color: "#10b981" },
    { key: "logic", label: "理性洞察力", color: "#3b82f6" },
    { key: "calm", label: "沉静松弛感", color: "#8b5cf6" }
  ];

  const traitsGrid = document.getElementById("traits-grid");
  traitsGrid.innerHTML = traitMeta
    .map((t) => {
      const pct = Math.min(98, Math.max(42, Math.round((totals[t.key] / maxPossible) * 100 + 22)));
      return `
        <div class="trait-row">
          <div class="trait-head">
            <span>${t.label}</span>
            <span>${pct}%</span>
          </div>
          <div class="trait-bar-bg">
            <div class="trait-bar-fill" data-width="${pct}%" style="background:${t.color}"></div>
          </div>
        </div>
      `;
    })
    .join("");

  // 触发进度条动画
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.querySelectorAll(".trait-bar-fill").forEach((bar) => {
        bar.style.width = bar.dataset.width;
      });
    }, 80);
  });
}

function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 2200);
}

// 事件绑定
btnStart.addEventListener("click", () => {
  currentIndex = 0;
  answers.fill(null);
  renderQuestion();
  showScreen("quiz");
});

btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

btnRestart.addEventListener("click", () => {
  currentIndex = 0;
  answers.fill(null);
  showScreen("start");
});

btnShare.addEventListener("click", async () => {
  if (!currentResult) return;
  const shareText = `✨ 我在「灵魂色彩心理测试」中测出的灵魂底色是：【${currentResult.name}】(${currentResult.en})\n关键词：${currentResult.tags.join(" ")}\n灵魂契合色：${currentResult.match.name}\n“${currentResult.quote}”`;

  try {
    await navigator.clipboard.writeText(shareText);
    showToast("结果已复制，快去发给朋友吧！");
  } catch {
    showToast("复制失败，请手动截屏分享～");
  }
});
