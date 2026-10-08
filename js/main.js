/* Layout compartilhado (header, ticker, footer) + utilitários das páginas. */

const WHATSAPP = "https://wa.me/5500000000000";

const ICONS = {
  logo: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/></svg>',
  search: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  menu: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  youtube: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="4"/><polygon points="10 9 15 12 10 15" fill="currentColor"/></svg>',
  linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8.01"/><path d="M12 16v-5m0 2a2 2 0 0 1 4 0v3"/></svg>',
  whatsapp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z"/></svg>',
  x: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3.3l-7.2 8.2L22 21h-6.6l-5.2-6.8L4.3 21H1l7.7-8.8L.8 3h6.8l4.7 6.2L17.5 3z"/></svg>',
  link: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>'
};

const NAV = [
  { href: "index.html", label: "Início", key: "home" },
  { href: "index.html#como-funciona", label: "Como funciona", key: "como" },
  { href: "index.html#planos", label: "Planos", key: "planos" },
  { href: "noticias.html", label: "Notícias", key: "noticias" },
  { href: "index.html#contato", label: "Contato", key: "contato" }
];

const TICKER = [
  ["WIN", "131.450", "+0,84%", true],
  ["WDO", "5.412,5", "-0,32%", false],
  ["IBOV", "131.208", "+0,79%", true],
  ["S&P 500", "5.871", "+0,41%", true],
  ["DI1F27", "13,92%", "-0,05", false],
  ["PETR4", "38,74", "+1,12%", true],
  ["VALE3", "61,30", "-0,58%", false],
  ["BTC", "US$ 67.940", "+2,05%", true]
];

function renderLayout() {
  const page = document.body.dataset.page;

  const tickerItems = TICKER.map(([s, v, c, up]) =>
    `<span class="ticker__item">${s}<b>${v}</b><span class="${up ? "up" : "down"}">${up ? "▲" : "▼"} ${c}</span></span>`
  ).join("");

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <div class="ticker" aria-hidden="true"><div class="ticker__track">${tickerItems}${tickerItems}</div></div>
      <header class="header">
        <div class="container header__inner">
          <a href="index.html" class="logo"><span class="logo__mark">${ICONS.logo}</span>Acelera<span>Trade</span></a>
          <nav class="nav" id="nav">
            ${NAV.map(n => `<a href="${n.href}" class="${n.key === page ? "active" : ""}">${n.label}</a>`).join("")}
          </nav>
          <div class="header__cta">
            <a href="#" class="btn btn--ghost">Entrar</a>
            <a href="index.html#planos" class="btn btn--primary">Começar avaliação</a>
            <button class="menu-toggle" aria-label="Abrir menu" id="menu-toggle">${ICONS.menu}</button>
          </div>
        </div>
      </header>`;
    document.getElementById("menu-toggle").addEventListener("click", () => {
      document.getElementById("nav").classList.toggle("open");
    });
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <footer class="footer" id="contato">
        <div class="container">
          <div class="footer__grid">
            <div class="footer__about">
              <a href="index.html" class="logo"><span class="logo__mark">${ICONS.logo}</span>Acelera<span>Trade</span></a>
              <p>Mesa proprietária que acelera traders: prove sua consistência na avaliação e opere com o nosso capital.</p>
              <div class="socials">
                <a href="#" aria-label="Instagram">${ICONS.instagram}</a>
                <a href="#" aria-label="YouTube">${ICONS.youtube}</a>
                <a href="#" aria-label="LinkedIn">${ICONS.linkedin}</a>
                <a href="${WHATSAPP}" aria-label="WhatsApp">${ICONS.whatsapp}</a>
              </div>
            </div>
            <div>
              <h5>Empresa</h5>
              <ul><li><a href="index.html#como-funciona">Como funciona</a></li><li><a href="index.html#planos">Planos</a></li><li><a href="noticias.html">Notícias</a></li><li><a href="#">Trabalhe conosco</a></li></ul>
            </div>
            <div>
              <h5>Suporte</h5>
              <ul><li><a href="#">Central de ajuda</a></li><li><a href="#">Regras da avaliação</a></li><li><a href="#">Perguntas frequentes</a></li><li><a href="${WHATSAPP}">Fale no WhatsApp</a></li></ul>
            </div>
            <div>
              <h5>Legal</h5>
              <ul><li><a href="#">Termos de uso</a></li><li><a href="#">Política de privacidade</a></li><li><a href="#">Aviso de risco</a></li></ul>
            </div>
          </div>
          <div class="footer__bottom">
            <span>© ${new Date().getFullYear()} Acelera Trade. Todos os direitos reservados.</span>
            <span>contato@aceleratrade.com.br</span>
          </div>
          <p class="disclaimer">Aviso de risco: operações em mercados de renda variável e derivativos envolvem riscos e podem resultar em perdas. Resultados passados não garantem resultados futuros. O conteúdo deste site tem caráter informativo e educacional e não constitui recomendação de investimento.</p>
        </div>
      </footer>`;
  }
}

/* ---------- Utilitários de notícias ---------- */

function formatDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

function initials(name) {
  return name.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// Hash simples para gerar uma capa única e estável para cada notícia.
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

const CATEGORY_COLORS = {
  "Acelera Trade": ["#00e08a", "#00b4ff"],
  "Mercado": ["#00b4ff", "#7c5cff"],
  "Educação": ["#ffb020", "#ff5e7e"],
  "Traders": ["#00e08a", "#d4ff3a"],
  "Eventos": ["#7c5cff", "#ff5e7e"]
};

// Capa gerada em SVG: grade + gráfico de candles, cores pela categoria.
function coverSvg(noticia) {
  let seed = hash(noticia.id);
  const rand = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const [c1, c2] = CATEGORY_COLORS[noticia.categoria] || ["#00e08a", "#00b4ff"];
  const W = 640, H = 360, n = 22, step = W / n;
  let price = H * (0.45 + rand() * 0.2);
  const trend = rand() > 0.35 ? -1 : 1;
  let candles = "", line = "";
  for (let i = 0; i < n; i++) {
    const open = price;
    const close = Math.max(40, Math.min(H - 40, open + (rand() - 0.5) * 50 + trend * 6));
    const high = Math.min(open, close) - rand() * 18;
    const low = Math.max(open, close) + rand() * 18;
    const x = i * step + step / 2;
    const up = close < open;
    const col = up ? c1 : "#ff4d6d";
    candles += `<line x1="${x}" y1="${high}" x2="${x}" y2="${low}" stroke="${col}" stroke-width="2" opacity=".7"/>`;
    candles += `<rect x="${x - step * 0.28}" y="${Math.min(open, close)}" width="${step * 0.56}" height="${Math.max(3, Math.abs(close - open))}" rx="2" fill="${col}" opacity="${up ? 0.9 : 0.6}"/>`;
    line += `${i ? "L" : "M"}${x},${close} `;
    price = close;
  }
  const gid = "g" + hash(noticia.id + "x");
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${escapeHtml(noticia.categoria)}">
    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}" stop-opacity=".28"/><stop offset="1" stop-color="${c2}" stop-opacity=".12"/></linearGradient>
      <pattern id="${gid}p" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity=".05"/></pattern>
    </defs>
    <rect width="${W}" height="${H}" fill="#0b1020"/>
    <rect width="${W}" height="${H}" fill="url(#${gid})"/>
    <rect width="${W}" height="${H}" fill="url(#${gid}p)"/>
    ${candles}
    <path d="${line}" fill="none" stroke="${c2}" stroke-width="2.5" opacity=".85"/>
  </svg>`;
}

function cardHtml(n) {
  return `
    <a class="card" href="noticia.html?id=${encodeURIComponent(n.id)}">
      <div class="thumb">${coverSvg(n)}<span class="thumb__tag">${escapeHtml(n.categoria)}</span></div>
      <div class="card__body">
        <h3>${escapeHtml(n.titulo)}</h3>
        <p>${escapeHtml(n.resumo)}</p>
        <div class="meta"><span>${formatDate(n.data)}</span><span class="dot"></span><span>${n.leitura} min de leitura</span></div>
      </div>
    </a>`;
}

function sortedNews() {
  return [...NOTICIAS].sort((a, b) => b.data.localeCompare(a.data));
}

function setupNewsletter() {
  document.querySelectorAll("[data-newsletter]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const msg = form.parentElement.querySelector("small");
      form.reset();
      if (msg) { msg.textContent = "Inscrição confirmada! Você vai receber nossas próximas notícias."; msg.classList.add("form-msg"); }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderLayout();
  setupNewsletter();
});
