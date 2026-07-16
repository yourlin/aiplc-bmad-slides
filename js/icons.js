// 内联 SVG 图标库（线性风格，24×24，stroke=currentColor 由 CSS 上色）。
// 不依赖任何外部资源，随页面一起加载，企业内网可用。
const ICONS = {
  agenda: '<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1.5"/><circle cx="3.5" cy="12" r="1.5"/><circle cx="3.5" cy="18" r="1.5"/>',
  brain: '<path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3 2.5 2.5 0 0 0 3-2.5V5.5A2.5 2.5 0 0 0 9 3Z"/><path d="M15 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3"/>',
  skills: '<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/>',
  org: '<rect x="9" y="3" width="6" height="4" rx="1"/><rect x="3" y="17" width="6" height="4" rx="1"/><rect x="15" y="17" width="6" height="4" rx="1"/><path d="M12 7v5M6 17v-2h12v2M12 12v3"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.3 1 2.5h6c0-1.2.3-1.8 1-2.5A6 6 0 0 0 12 3Z"/>',
  customer: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  pipeline: '<circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="12" r="2.5"/><path d="M7.5 12h9"/><path d="M13 8l4 4-4 4"/>',
  steps: '<path d="M4 20v-4h4v-4h4V8h4V4h4"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
  puzzle: '<path d="M10 4a2 2 0 1 1 4 0v1h3a1 1 0 0 1 1 1v3h1a2 2 0 1 1 0 4h-1v3a1 1 0 0 1-1 1h-3v-1a2 2 0 1 0-4 0v1H6a1 1 0 0 1-1-1v-3H4a2 2 0 1 1 0-4h1V6a1 1 0 0 1 1-1h4V4Z"/>',
  hotel: '<path d="M3 21h18M5 21V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M10 21v-3a2 2 0 0 1 4 0v3"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8"/><path d="M12 8S10 3 7.5 4.5 12 8 12 8Zm0 0s2-5 4.5-3.5S12 8 12 8Z"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 0Z"/><path d="M12 15 9 12c1-4.5 4-8 10-9 1 6-2.5 9-7 10Z"/><path d="M15 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>',
};

// 封面用的大号装饰插画（抽象编排/节点网络，呼应 AI-PLC「从想法到系统」）。
const COVER_ART = `
<svg viewBox="0 0 400 300" fill="none" aria-hidden="true">
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ff9900"/><stop offset="1" stop-color="#4d9fff"/>
    </linearGradient>
  </defs>
  <g stroke="url(#g1)" stroke-width="1.5" opacity="0.9">
    <path d="M60 150 H150 M250 90 H330 M250 210 H330"/>
    <path d="M150 150 C200 150 200 90 250 90" />
    <path d="M150 150 C200 150 200 210 250 210" />
  </g>
  <g fill="url(#g1)">
    <circle cx="60" cy="150" r="10"/>
    <circle cx="150" cy="150" r="14"/>
    <circle cx="250" cy="90" r="8"/>
    <circle cx="250" cy="210" r="8"/>
    <circle cx="330" cy="90" r="6"/>
    <circle cx="330" cy="210" r="6"/>
  </g>
  <g stroke="#4d9fff" stroke-width="1" opacity="0.35" fill="none">
    <circle cx="150" cy="150" r="30"/><circle cx="150" cy="150" r="46"/>
  </g>
</svg>`;
