// 渲染与交互。幻灯片内容见 slides.js，UI 文案见 i18n.js。

const state = {
  idx: 0,
  lang: localStorage.getItem("aiplc-lang") || "zh", // 默认中文
};

const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};

// 转义，防止内容里的 < > 破坏结构
const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

// 生成内联 SVG 图标（线性风格，由 CSS 用 currentColor 上色）
const icon = (name, cls) => {
  const body = ICONS[name];
  if (!body) return "";
  return `<svg class="${cls || "icon"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
};

// 带图标的标题行（有配图时，标题区右侧放一张圆角缩略图）
function titleWithIcon(stage, d, slide) {
  const head = el("div", "slide__head" + (slide.img ? " slide__head--img" : ""));
  const left = el("div", "slide__head-l");
  if (slide.icon) left.appendChild(el("span", "slide__icon", icon(slide.icon, "icon")));
  left.appendChild(el("h2", "slide__title", esc(d.title)));
  head.appendChild(left);
  if (slide.img) {
    const thumb = el("div", "slide__thumb");
    thumb.style.backgroundImage = `url("${IMG_BASE}${slide.img}")`;
    head.appendChild(thumb);
  }
  stage.appendChild(head);
  if (d.subtitle) stage.appendChild(el("p", "slide__subtitle", esc(d.subtitle)));
}

const IMG_BASE = "assets/images/";

function renderSlide(slide, lang) {
  const d = slide[lang];
  const ui = UI[lang];
  const stage = el("section", "slide slide--" + slide.type);
  // 封面带背景图时，给 slide 标记（背景铺到 #stage 容器，见 render()）
  if (slide.type === "cover" && slide.img) stage.classList.add("slide--oncover");

  switch (slide.type) {
    case "cover":
      if (slide.art) stage.appendChild(el("div", "cover__art", COVER_ART));
      else stage.appendChild(el("div", "cover__mark", icon("rocket", "icon icon--xl")));
      stage.appendChild(el("p", "cover__kicker", esc(d.kicker)));
      stage.appendChild(el("h1", "cover__title", esc(d.title)));
      stage.appendChild(el("p", "cover__subtitle", esc(d.subtitle)));
      stage.appendChild(el("p", "cover__desc", esc(d.desc)));
      stage.appendChild(el("p", "cover__foot", esc(d.foot)));
      break;

    case "list": {
      titleWithIcon(stage, d, slide);
      const ol = el("ol", "list");
      d.items.forEach(([h, s]) => {
        const li = el("li", "list__item");
        li.appendChild(el("span", "list__h", esc(h)));
        li.appendChild(el("span", "list__s", esc(s)));
        ol.appendChild(li);
      });
      stage.appendChild(ol);
      break;
    }

    case "twocol": {
      titleWithIcon(stage, d, slide);
      const row = el("div", "twocol");
      [d.left, d.right].forEach((col, i) => {
        const c = el("div", "twocol__col twocol__col--" + (i === 0 ? "old" : "new"));
        c.appendChild(el("h3", "twocol__head", esc(col.head)));
        const ul = el("ul", "twocol__list");
        col.points.forEach((p) => ul.appendChild(el("li", null, esc(p))));
        c.appendChild(ul);
        row.appendChild(c);
      });
      stage.appendChild(row);
      break;
    }

    case "grid": {
      titleWithIcon(stage, d, slide);
      const g = el("div", "grid grid--n" + d.cards.length);
      d.cards.forEach(([h, s]) => {
        const card = el("div", "card");
        card.appendChild(el("h3", "card__h", esc(h)));
        card.appendChild(el("p", "card__s", esc(s)));
        g.appendChild(card);
      });
      stage.appendChild(g);
      break;
    }

    case "stages": {
      titleWithIcon(stage, d, slide);
      const row = el("div", "stages");
      d.stages.forEach(([num, name, en, desc], i) => {
        const s = el("div", "stage");
        s.appendChild(el("span", "stage__num", esc(num)));
        s.appendChild(el("h3", "stage__name", esc(name)));
        s.appendChild(el("span", "stage__en", esc(en)));
        s.appendChild(el("p", "stage__desc", esc(desc)));
        row.appendChild(s);
        if (i < d.stages.length - 1) row.appendChild(el("span", "stage__arrow", "→"));
      });
      stage.appendChild(row);
      break;
    }

    case "pipeline": {
      titleWithIcon(stage, d, slide);
      const row = el("div", "pipe");
      d.steps.forEach(([phase, goal, quick, skill], i) => {
        const s = el("div", "pipe__step");
        s.appendChild(el("h3", "pipe__phase", esc(phase)));
        s.appendChild(el("p", "pipe__goal", esc(goal)));
        s.appendChild(el("div", "pipe__tag pipe__tag--quick", `<b>${esc(ui.stageQuick)}</b>${esc(quick)}`));
        s.appendChild(el("div", "pipe__tag pipe__tag--skill", `<b>${esc(ui.stageSkill)}</b>${esc(skill)}`));
        row.appendChild(s);
        if (i < d.steps.length - 1) row.appendChild(el("span", "pipe__arrow", "→"));
      });
      stage.appendChild(row);
      break;
    }
  }
  return stage;
}

// 给 slide 内可见子元素依次标记 stagger 序号，配合 CSS 做逐个入场
function markStagger(slideNode) {
  const groups = [".list__item", ".card", ".stage", ".pipe__step",
    ".twocol__col", ".cover__kicker", ".cover__title", ".cover__subtitle",
    ".cover__desc", ".cover__foot"];
  const nodes = slideNode.querySelectorAll(groups.join(","));
  nodes.forEach((n, i) => {
    n.classList.add("stagger");
    n.style.setProperty("--d", (i * 60) + "ms");
  });
}

function render(dir) {
  const lang = state.lang;
  const ui = UI[lang];
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  const stageWrap = document.getElementById("stage");
  stageWrap.innerHTML = "";
  const cur = SLIDES[state.idx];
  // 封面背景图铺满整个舞台容器（含内边距区）；其它页清除背景
  if (cur.type === "cover" && cur.img) {
    stageWrap.classList.add("stage--bg");
    stageWrap.style.backgroundImage =
      `linear-gradient(rgba(11,16,32,.72), rgba(11,16,32,.86)), url("${IMG_BASE}${cur.img}")`;
  } else {
    stageWrap.classList.remove("stage--bg");
    stageWrap.style.backgroundImage = "";
  }
  const slideNode = renderSlide(cur, lang);
  // 方向感知转场：1=前进（从右入），-1=后退（从左入），0=原地（淡入）
  slideNode.classList.add(dir === -1 ? "in-left" : dir === 1 ? "in-right" : "in-fade");
  markStagger(slideNode);
  stageWrap.appendChild(slideNode);

  document.getElementById("counter").textContent =
    state.idx + 1 + " " + ui.ofLabel + " " + SLIDES.length;
  document.getElementById("langBtn").textContent = UI[lang].langOther;
  document.getElementById("hint").textContent = ui.hintNav;

  const bar = document.getElementById("progress");
  bar.style.width = ((state.idx + 1) / SLIDES.length) * 100 + "%";

  location.hash = state.idx + 1;
}

function go(n) {
  const target = Math.max(0, Math.min(SLIDES.length - 1, n));
  const dir = target === state.idx ? 0 : target > state.idx ? 1 : -1;
  state.idx = target;
  render(dir);
}

function toggleLang() {
  state.lang = state.lang === "zh" ? "en" : "zh";
  localStorage.setItem("aiplc-lang", state.lang);
  render();
}

// 键盘
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { go(state.idx + 1); e.preventDefault(); }
  else if (e.key === "ArrowLeft" || e.key === "PageUp") { go(state.idx - 1); e.preventDefault(); }
  else if (e.key === "Home") go(0);
  else if (e.key === "End") go(SLIDES.length - 1);
  else if (e.key.toLowerCase() === "l") toggleLang();
  else if (e.key.toLowerCase() === "f") {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  }
});

// 点击左右半屏翻页（避免点到按钮）
document.getElementById("stage").addEventListener("click", (e) => {
  const x = e.clientX / window.innerWidth;
  go(state.idx + (x > 0.5 ? 1 : -1));
});

function init() {
  document.getElementById("langBtn").addEventListener("click", toggleLang);
  document.getElementById("prevBtn").addEventListener("click", () => go(state.idx - 1));
  document.getElementById("nextBtn").addEventListener("click", () => go(state.idx + 1));
  const fromHash = parseInt(location.hash.replace("#", ""), 10);
  if (fromHash >= 1 && fromHash <= SLIDES.length) state.idx = fromHash - 1;
  render();
}

init();
