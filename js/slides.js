// 幻灯片内容数据（中英双语）。内容与渲染分离，便于维护。
// 每张 slide：{ type, zh:{...}, en:{...} }。type 决定渲染布局。
// UI 文案见 js/i18n.js。

const SLIDES = [
  // 1 · 封面
  {
    type: "cover",
    art: true,
    img: "cover.jpg",
    zh: {
      kicker: "AWS · AI-Native 产品创新方法论",
      title: "AI-PLC",
      subtitle: "AI-driven Product Lifecycle",
      desc: "面向产品经理 / 项目经理 / 运营 / 市场 / BPIT 的一日工作坊",
      foot: "Amazon Quick × BMAD · AWS Solutions Architecture",
    },
    en: {
      kicker: "AWS · AI-Native Product Innovation Methodology",
      title: "AI-PLC",
      subtitle: "AI-driven Product Lifecycle",
      desc: "A one-day workshop for PMs, project managers, operations, marketing, and BPIT",
      foot: "Amazon Quick × BMAD · AWS Solutions Architecture",
    },
  },

  // 2 · 议程
  {
    type: "list",
    icon: "agenda",
    zh: {
      title: "工作坊大纲",
      subtitle: "今天我们将一起走完这 6 个话题",
      items: [
        ["AI 时代产品经理需要什么新技能", "角色从「需求传递者」迁移到「意图编译器」"],
        ["研发流程创新与 AI-Native 组织", "四阶段进化：个人提效 → 商业模式重构"],
        ["AI-PLC 是什么", "根植于 AWS Working Backwards / PRFAQ"],
        ["AI-PLC 核心流程", "Discovery → Ideation → Prototype → Validate"],
        ["AI-PLC vs AI-DLC", "产品/业务 与 研发/工程的分层与衔接"],
        ["落地：4 个阶段 × BMAD Skills", "DeepResearch · Brainstorm · Plan · Execute"],
      ],
    },
    en: {
      title: "Workshop Agenda",
      subtitle: "Six topics we'll cover together today",
      items: [
        ["What new skills PMs need in the AI era", "From \"requirements handoff\" to \"intent compiler\""],
        ["Process innovation & the AI-Native org", "Four stages: individual productivity → business-model reinvention"],
        ["What is AI-PLC", "Rooted in AWS Working Backwards / PRFAQ"],
        ["The AI-PLC core process", "Discovery → Ideation → Prototype → Validate"],
        ["AI-PLC vs AI-DLC", "Product/business and R&D/engineering: layering and handoff"],
        ["Landing it: 4 stages × BMAD Skills", "DeepResearch · Brainstorm · Plan · Execute"],
      ],
    },
  },

  // 3 · PM 新技能：角色迁移
  {
    type: "twocol",
    icon: "brain",
    img: "skills.jpg",
    zh: {
      title: "AI 时代，产品经理需要什么新技能？",
      subtitle: "当 AI 能瞬间产出 PRD、原型与代码，PM 的价值从「产出」转向「判断、决策与验证」",
      left: { head: "旧范式 · PM-as-Handoff", points: ["写 PRD → 扔给设计 → 扔给开发 → 等上线", "价值在于「理解业务、传达需求」", "产出物：PRD 文档、评审会、需求池"] },
      right: { head: "新范式 · Intent Compiler", points: ["PM 直接产出可工作原型，并定义产品行为", "意图编译器：把意图编译成机器可读规约", "验证合约设计师：定义「什么是对的」"] },
    },
    en: {
      title: "What new skills do PMs need in the AI era?",
      subtitle: "When AI can instantly produce PRDs, prototypes, and code, a PM's value shifts from \"producing\" to \"judgment, decisions, and validation\"",
      left: { head: "Old paradigm · PM-as-Handoff", points: ["Write PRD → hand to design → hand to dev → wait for launch", "Value lies in \"understanding the business, conveying needs\"", "Deliverables: PRD docs, review meetings, backlog"] },
      right: { head: "New paradigm · Intent Compiler", points: ["The PM directly produces a working prototype and defines product behavior", "Intent Compiler: compile intent into machine-readable specs", "Validation Contract designer: define \"what is correct\""] },
    },
  },

  // 4 · 6 项新核心技能
  {
    type: "grid",
    icon: "skills",
    zh: {
      title: "AI 时代 PM 的 6 项新增核心技能",
      subtitle: "「Writing evals is going to become a core skill for product managers.」— Kevin Weil, OpenAI CPO",
      cards: [
        ["AI Evals 设计", "「AI PM 的新 PRD」，定义什么是好"],
        ["Vibe Coding 原型", "30 分钟从想法到可点击原型"],
        ["模型技术直觉", "Prompt → RAG → 微调，成本-延迟权衡"],
        ["Agent 工作流设计", "映射失败模式与人在环节点"],
        ["数据自助分析", "用 MCP 连数据源，取数不求人"],
        ["负责任 AI 判断", "把安全设计进产品，而非事后补救"],
      ],
    },
    en: {
      title: "6 new core skills for PMs in the AI era",
      subtitle: "\"Writing evals is going to become a core skill for product managers.\" — Kevin Weil, OpenAI CPO",
      cards: [
        ["AI Evals design", "\"The AI PM's new PRD\" — define what good looks like"],
        ["Vibe Coding prototypes", "From idea to clickable prototype in 30 minutes"],
        ["Model & tech intuition", "Prompt → RAG → fine-tuning; cost-latency tradeoffs"],
        ["Agent workflow design", "Map failure modes and human-in-the-loop points"],
        ["Self-service data analysis", "Connect data sources via MCP; pull data yourself"],
        ["Responsible-AI judgment", "Design safety into the product, not bolt it on after"],
      ],
    },
  },

  // 5 · AI-Native 组织四阶段
  {
    type: "stages",
    icon: "org",
    zh: {
      title: "AI-Native 组织进化四阶段",
      subtitle: "从「个人提效」到「商业模式重构」——共同底座：SOP · AI-Native 平台 · Skills 资产 · 效率指标",
      stages: [
        ["01", "个人提效", "Individual", "单点工具，开发者先跑起来"],
        ["02", "工作流程嵌入", "Workflow", "AI 嵌入研发流程，角色横跨多阶段"],
        ["03", "业务闭环重构", "Business Loop", "需求 → 交付 → 运营，端到端重构"],
        ["04", "商业模式重构", "Reinvention", "AI-Native 产品，全新商业模式"],
      ],
    },
    en: {
      title: "Four stages of AI-Native organizational evolution",
      subtitle: "From \"individual productivity\" to \"business-model reinvention\" — shared foundation: SOP · AI-Native platform · Skills assets · efficiency metrics",
      stages: [
        ["01", "Individual productivity", "Individual", "Single-point tools; developers run first"],
        ["02", "Workflow embedding", "Workflow", "AI embedded in R&D; roles span stages"],
        ["03", "Business-loop rebuild", "Business Loop", "Requirements → delivery → operations, end to end"],
        ["04", "Business-model reinvention", "Reinvention", "AI-Native products, brand-new business models"],
      ],
    },
  },

  // 6 · AI-PLC 是什么 + 五大范式转变
  {
    type: "grid",
    icon: "bulb",
    zh: {
      title: "AI-PLC 是什么？",
      subtitle: "一套面向产品经理与业务人员的 AI-Native 方法论——把模糊想法转化为可复用 Skills 或可运行原型。2026 年，AI 的本质变化不在模型能力，而在编排架构。",
      cards: [
        ["从对话到目标", "/goal 取代一问一答"],
        ["从单 Agent 到团队", "Orchestrator + Workers + Validators"],
        ["从 Prompt 到 Skill", "可复用、可积累的知识单元"],
        ["从手动到自动闭环", "验证循环 + 自动修复"],
        ["从一次性到持续学习", "经验积累，改进后续执行"],
        ["根基：Working Backwards", "从客户出发，先写「新闻稿」"],
      ],
    },
    en: {
      title: "What is AI-PLC?",
      subtitle: "An AI-Native methodology for PMs and business people — turning a fuzzy idea into reusable Skills or a runnable prototype. In 2026, AI's essential shift is not model capability but orchestration architecture.",
      cards: [
        ["From chat to goal", "/goal replaces back-and-forth Q&A"],
        ["From single Agent to team", "Orchestrator + Workers + Validators"],
        ["From Prompt to Skill", "Reusable, accumulable knowledge units"],
        ["From manual to auto loop", "Validation loop + auto-repair"],
        ["From one-off to continuous learning", "Accumulate experience, improve later runs"],
        ["Foundation: Working Backwards", "Start from the customer; write the \"press release\" first"],
      ],
    },
  },

  // 7 · Working Backwards 5 问
  {
    type: "list",
    icon: "customer",
    img: "customer.jpg",
    zh: {
      title: "Working Backwards：从客户出发，逆向工作",
      subtitle: "在写下第一行代码之前，先写好「新闻稿」。每篇 PR/FAQ 必须回答 5 个问题：",
      items: [
        ["客户是谁？", "具体的人物画像，不是市场细分"],
        ["客户的问题或机会是什么？", "从客户视角陈述，不是从你的视角"],
        ["最重要的客户收益是什么？", "只挑一个——清晰胜过完整"],
        ["你怎么知道客户的需求？", "靠数据、访谈、行为，不是直觉"],
        ["客户体验是什么样的？", "端到端，包含边界场景与上手"],
      ],
    },
    en: {
      title: "Working Backwards: start from the customer, work in reverse",
      subtitle: "Before writing a line of code, write the \"press release\" first. Every PR/FAQ must answer 5 questions:",
      items: [
        ["Who is the customer?", "A specific persona, not a market segment"],
        ["What is the customer's problem or opportunity?", "Stated from the customer's view, not yours"],
        ["What is the most important customer benefit?", "Pick just one — clarity beats completeness"],
        ["How do you know what the customer needs?", "From data, interviews, behavior — not intuition"],
        ["What is the customer experience?", "End to end, including edge cases and onboarding"],
      ],
    },
  },

  // 8 · 核心流程四步映射
  {
    type: "pipeline",
    icon: "pipeline",
    zh: {
      title: "AI-PLC 核心流程：四步映射",
      subtitle: "每个阶段由 Amazon Quick 内置能力 + BMAD Skill 组合驱动，贯穿全程的是验证测试闭环",
      steps: [
        ["Discovery", "搞清背景", "DeepResearch", "Business Analyst (Mary)"],
        ["Ideation", "做清决策", "Quick Chat", "Brainstorming + PRFAQ Challenge"],
        ["Prototype", "排清顺序", "Plan", "Product Brief + PRD"],
        ["Validate", "做出来", "Execute", "PRD Validator"],
      ],
    },
    en: {
      title: "The AI-PLC core process: four-step mapping",
      subtitle: "Each stage is driven by Amazon Quick built-in capabilities + a BMAD Skill, with a validation loop running throughout",
      steps: [
        ["Discovery", "Understand the context", "DeepResearch", "Business Analyst (Mary)"],
        ["Ideation", "Make the decision", "Quick Chat", "Brainstorming + PRFAQ Challenge"],
        ["Prototype", "Sequence the tasks", "Plan", "Product Brief + PRD"],
        ["Validate", "Build it", "Execute", "PRD Validator"],
      ],
    },
  },

  // 9 · 四阶段能力要点
  {
    type: "grid",
    icon: "steps",
    zh: {
      title: "4 步，从模糊想法到专家系统",
      subtitle: "搞清背景 → 做清决策 → 排清顺序 → 做出来｜每一步都有验证测试兜底",
      cards: [
        ["① DeepResearch", "派 5–8 个 Agent 并行调研，交叉验证，输出带置信度的研究报告"],
        ["② Brainstorm", "一次只问一个问题，5 问 5 决策，把模糊想法逼成明确决策"],
        ["③ Plan（可选）", "生成 DAG 任务依赖图，区分并行 / 串行，复杂时启用"],
        ["④ Execute", "调度子 Agent 并行派发、失败重试、Oracle 终审，产出 Skills 或原型"],
      ],
    },
    en: {
      title: "4 steps: from fuzzy idea to expert system",
      subtitle: "Understand → decide → sequence → build | every step is backed by validation tests",
      cards: [
        ["① DeepResearch", "Dispatch 5–8 Agents to research in parallel, cross-validate, output a research report with confidence levels"],
        ["② Brainstorm", "Ask one question at a time; five questions, five decisions; force a fuzzy idea into clear decisions"],
        ["③ Plan (optional)", "Generate a DAG of task dependencies, separate parallel / sequential; enable when complex"],
        ["④ Execute", "Dispatch sub-Agents in parallel, retry on failure, Oracle final review; produce Skills or a prototype"],
      ],
    },
  },

  // 10 · AI-PLC vs AI-DLC 分层
  {
    type: "twocol",
    icon: "layers",
    zh: {
      title: "AWS 三大工作坊：按人群分层",
      subtitle: "本工作坊聚焦 AI-PLC——帮助产品与业务人员用 AI-Native 思维设计「面向未来的 AI 产品」",
      left: { head: "AI-PLC · 上游（产品 / 业务）", points: ["面向：产品经理 · 运营 · 市场 · BPIT", "定义「做对的产品」", "Research → Explore → Design → Prototype"] },
      right: { head: "AI-DLC · 下游（研发 / 工程）", points: ["面向：架构师 · 开发 · QA · 工程团队", "负责「把产品做对」", "Inception → Construction → Deployment → Operations"] },
    },
    en: {
      title: "AWS's three workshops: layered by audience",
      subtitle: "This workshop focuses on AI-PLC — helping product and business people design \"future-facing AI products\" with AI-Native thinking",
      left: { head: "AI-PLC · upstream (product / business)", points: ["For: PMs · operations · marketing · BPIT", "Defines \"building the right product\"", "Research → Explore → Design → Prototype"] },
      right: { head: "AI-DLC · downstream (R&D / engineering)", points: ["For: architects · developers · QA · engineering", "Handles \"building the product right\"", "Inception → Construction → Deployment → Operations"] },
    },
  },

  // 11 · BMAD 7 个 Skill
  {
    type: "grid",
    icon: "puzzle",
    zh: {
      title: "落地：BMAD Skills Pack 的 7 个 Skill",
      subtitle: "移植到 Amazon Quick Desktop 专用的产品管理 & 创意思维技能包（v6.10.0）",
      cards: [
        ["Brainstorming", "多种创意技法引导头脑风暴"],
        ["Business Analyst (Mary)", "市场调研、竞品分析、需求梳理"],
        ["Product Manager (John)", "驱动 PRD 撰写与需求对齐"],
        ["Product Brief", "引导式发现，一页纸产品概要"],
        ["PRD", "完整产品需求文档，含验证迭代"],
        ["PRFAQ Challenge", "Working Backwards 压测产品概念"],
        ["PRD Validator", "审查、批判 PRD 的完整性与质量"],
      ],
    },
    en: {
      title: "Landing it: the 7 Skills of the BMAD Skills Pack",
      subtitle: "A product-management & creative-thinking skill pack ported for Amazon Quick Desktop (v6.10.0)",
      cards: [
        ["Brainstorming", "Guide brainstorming with multiple ideation techniques"],
        ["Business Analyst (Mary)", "Market research, competitive analysis, requirement grooming"],
        ["Product Manager (John)", "Drive PRD writing and requirement alignment"],
        ["Product Brief", "Guided discovery; one-page product brief"],
        ["PRD", "Full product requirements doc with validation and iteration"],
        ["PRFAQ Challenge", "Stress-test the concept with Working Backwards"],
        ["PRD Validator", "Review and critique a PRD's completeness and quality"],
      ],
    },
  },

  // 12 · 九大行业实战场景
  {
    type: "grid",
    icon: "hotel",
    img: "hotel.jpg",
    zh: {
      title: "实战场景：9 大行业任选其一",
      subtitle: "每个行业自带完整四阶段动手页，以推荐场景为贯穿示例；行业内容为预设，客户可校准替换",
      cards: [
        ["🏨 酒店", "PMS、渠道、收益、客户运营云软件"],
        ["✈️ 机票", "运价、订座、退改、清算平台"],
        ["🛒 跨境电商", "选品、listing、履约、合规与营销"],
        ["📣 广告", "投放、创意、竞价与归因"],
        ["🛍️ 零售", "商品、库存、门店、会员与全渠道"],
        ["🏦 金融", "获客、风控、投顾、合规运营"],
        ["💬 社交媒体", "选题、审核、创作者与变现运营"],
        ["🚗 汽车", "营销、试驾、销售交付与售后"],
        ["🏥 医疗", "患者服务、诊疗支持与合规运营"],
      ],
    },
    en: {
      title: "Hands-on scenarios: pick one of 9 industries",
      subtitle: "Each industry ships a full four-stage lab with a recommended scenario as the through-line; content is a preset customers can calibrate",
      cards: [
        ["🏨 Hotel", "PMS, channels, revenue, customer ops cloud software"],
        ["✈️ Airline", "Fares, booking, changes, settlement platform"],
        ["🛒 Cross-border e-commerce", "Sourcing, listing, fulfillment, compliance & marketing"],
        ["📣 Advertising", "Delivery, creative, bidding & attribution"],
        ["🛍️ Retail", "Merchandise, inventory, stores, membership, omnichannel"],
        ["🏦 Finance", "Acquisition, risk control, advisory, compliance ops"],
        ["💬 Social media", "Topics, moderation, creators & monetization"],
        ["🚗 Automotive", "Marketing, test drives, sales delivery & after-sales"],
        ["🏥 Healthcare", "Patient services, clinical support & compliance ops"],
      ],
    },
  },

  // 13 · 动手操作步骤：每阶段在 Quick 里怎么做
  {
    type: "pipeline",
    icon: "steps",
    zh: {
      title: "动手怎么做：每步在 Quick 里的操作",
      subtitle: "选定行业后，把每步指令直接粘到 Amazon Quick Desktop 对话框；先输触发词进入对应 Skill，再贴具体任务",
      steps: [
        ["① Discovery", "并行调研 + 竞品梳理", "DeepResearch 发起并行调研", "Talk to Mary 出竞品矩阵与机会"],
        ["② Ideation", "逼出决策 + 压测方案", "Help me brainstorm 收敛决策", "Create a PRFAQ 用 5 问压测"],
        ["③ Prototype", "概要 + 完整 PRD", "Create a product brief 出一页纸", "Write a PRD 补流程与页面结构"],
        ["④ Validate", "产出 + 审查闭环", "Execute 调度产出 Skill / 原型", "Validate my PRD 审查并修复"],
      ],
    },
    en: {
      title: "How to do it: the operation in Quick per step",
      subtitle: "After picking an industry, paste each instruction into Amazon Quick Desktop; enter the Skill with its trigger, then paste the task",
      steps: [
        ["① Discovery", "Parallel research + competitor scan", "DeepResearch launches parallel research", "Talk to Mary for a competitor matrix & gaps"],
        ["② Ideation", "Force decisions + stress-test", "Help me brainstorm to converge", "Create a PRFAQ to stress-test with 5 Qs"],
        ["③ Prototype", "Brief + full PRD", "Create a product brief (one-pager)", "Write a PRD with flow & page structure"],
        ["④ Validate", "Build + review loop", "Execute dispatches to build Skill / prototype", "Validate my PRD to review and fix"],
      ],
    },
  },

  // 14 · 工作坊收益
  {
    type: "grid",
    icon: "gift",
    zh: {
      title: "工作坊收益",
      subtitle: "附加价值：团队 AI 思维转变——从「用 AI 做非 AI 产品」到「设计 AI 原生产品」",
      cards: [
        ["01 · 方法论认知", "掌握 AI-Native 产品方法论，了解业界发展趋势"],
        ["02 · 全流程实战", "打通从需求规约到 Agent / Skills 的端到端流程"],
        ["03 · 资产沉淀", "获得一套可复用、可落地的 Skills 与 Pipeline 模板"],
      ],
    },
    en: {
      title: "Workshop outcomes",
      subtitle: "Added value: a shift in team AI thinking — from \"using AI to build non-AI products\" to \"designing AI-native products\"",
      cards: [
        ["01 · Methodology", "Master the AI-Native product methodology and industry trends"],
        ["02 · End-to-end practice", "Go from requirements specification to Agent / Skills, end to end"],
        ["03 · Reusable assets", "Take home reusable, ready-to-apply Skills and Pipeline templates"],
      ],
    },
  },

  // 15 · 结束页
  {
    type: "cover",
    art: false,
    img: "rocket.jpg",
    zh: {
      kicker: "Building AI-Native Organization with AI-PLC & AI-DLC",
      title: "谢谢！",
      subtitle: "让 AI 帮你造工具，从今天开始。",
      desc: "Discovery → Ideation → Prototype → Validate",
      foot: "AWS Solutions Architecture",
    },
    en: {
      kicker: "Building an AI-Native Organization with AI-PLC & AI-DLC",
      title: "Thank you!",
      subtitle: "Let AI build your tools — starting today.",
      desc: "Discovery → Ideation → Prototype → Validate",
      foot: "AWS Solutions Architecture",
    },
  },
];
