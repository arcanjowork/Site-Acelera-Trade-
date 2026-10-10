/* Layout compartilhado (header, menu, CTA, footer, cookies) + utilitários das notícias. */

const CONTATO = {
  email: "contato@aceleratrade.com.br",
  whatsapp: "https://wa.me/5500000000000",
  instagram: "#",
  youtube: "#",
  linkedin: "#",
  areaTrader: "#"
};

// Ícones (Material Icons, mesmo estilo do site de referência)
const ICONS = {
  chart: '<svg viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>',
  dollar: '<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>',
  wallet: '<svg viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14c1.1 0 2 .9 2 2v1h-9a2 2 0 00-2 2v8a2 2 0 002 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>',
  school: '<svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>',
  person: '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>',
  expand: '<svg viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/></svg>',
  verified: '<svg viewBox="0 0 24 24"><path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 00-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 001 7.2 31 31 0 00.5 12 31 31 0 001 16.8a3 3 0 002.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 002.1-2.1 31 31 0 00.5-4.8 31 31 0 00-.5-4.8zM9.7 15V9l5.9 3-5.9 3z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9.5h4V21H3V9.5zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4V9.5z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4zM12 21.8a9.8 9.8 0 01-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1112 21.8zM20.5 3.5A12 12 0 001.7 18L0 24l6.2-1.6A12 12 0 0024 12c0-3.2-1.2-6.2-3.5-8.5z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3.3l-7.2 8.2L22 21h-6.6l-5.2-6.8L4.3 21H1l7.7-8.8L.8 3h6.8l4.7 6.2L17.5 3z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5V6.6c0-.9.6-1.1 1-1.1h2.6V1.5H14C10 1.5 9.2 4.4 9.2 6.3v2.2H6.5v4h2.7V22.5H14V12.5h3.3l.4-4H14z"/></svg>'
};

// Logo da Acelera Trade (versão clara e negativa)
function logoSvg(negativo) {
  const texto = negativo ? "#ffffff" : "#2f2f2f";
  const sub = negativo ? "#cfcfcf" : "#5f5f5f";
  return `<svg viewBox="0 0 190 46" role="img" aria-label="Acelera Trade">
    <path d="M2 6h12l13 17-13 17H2l13-17z" fill="#fec934"/>
    <path d="M17 6h12l13 17-13 17H17l13-17z" fill="${texto}"/>
    <text x="50" y="26" font-family="Barlow, sans-serif" font-size="27" font-weight="600" fill="${texto}" letter-spacing="-.3">acelera</text>
    <text x="51" y="41" font-family="Barlow, sans-serif" font-size="11" font-weight="500" fill="${sub}" letter-spacing="5.6">TRADE</text>
  </svg>`;
}

// Serviços: aparecem no menu "Planos", nas abas da home e no rodapé.
const SERVICOS = [
  { id: "mini-indice", icon: "chart", nome: "Avaliação Mini-índice (WIN)" },
  { id: "mini-dolar", icon: "dollar", nome: "Avaliação Mini-dólar (WDO)" },
  { id: "conta-financiada", icon: "wallet", nome: "Conta Financiada com até 90% do lucro" },
  { id: "mentoria", icon: "school", nome: "Mentoria de Gestão de Risco" }
];

const NAV = [
  { href: "index.html#sobre", label: "Sobre" },
  { label: "Planos", sub: true },
  { href: "noticias.html", label: "Blog", key: "noticias" },
  { href: "index.html#contato", label: "Contato" }
];

function renderLayout() {
  const page = document.body.dataset.page;

  document.body.insertAdjacentHTML("afterbegin", `
    <div id="preloader"><div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div></div>`);
  window.addEventListener("load", () => document.getElementById("preloader").classList.add("hide"));
  setTimeout(() => document.getElementById("preloader").classList.add("hide"), 2500);

  const servicosMenu = SERVICOS.map(s =>
    `<li class="nav-item"><a href="index.html?plano=${s.id}#servicos">${ICONS[s.icon]} ${s.nome}</a></li>`).join("");

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <div class="header">
        <div class="wrap header-content">
          <a href="index.html" class="logo">${logoSvg(false)}</a>
          <div class="nav-overlay" id="nav-overlay"></div>
          <nav class="nav" id="nav">
            <div class="nav__top"><p class="nav__welcome">Bem-vindo(a)!</p><button class="nav__close" id="nav-close">FECHAR ${ICONS.close}</button></div>
            <ul>
              ${NAV.map(n => n.sub
                ? `<li class="nav-expand"><a href="#0" class="has-subnav">${n.label} ${ICONS.expand}</a><ul class="nav-expand-content">${servicosMenu}</ul></li>`
                : `<li><a href="${n.href}" class="${n.key === page ? "active" : ""}">${n.label}</a></li>`).join("")}
            </ul>
            <div class="nav__actions">
              <a href="${CONTATO.whatsapp}" class="btn btn--outline">Fale conosco</a>
              <a href="${CONTATO.areaTrader}" class="btn btn--ghost">${ICONS.person} Área do trader</a>
            </div>
          </nav>
          <div class="header-actions">
            <a href="${CONTATO.areaTrader}" class="btn btn--ghost">${ICONS.person} Área do trader</a>
            <a href="${CONTATO.whatsapp}" class="btn btn--outline">Fale conosco</a>
          </div>
          <button class="toggle-menu" id="toggle-menu" aria-label="Abrir menu"><h4>Menu</h4><div><span></span><span></span><span></span></div></button>
        </div>
      </div>`;

    const nav = document.getElementById("nav");
    const overlay = document.getElementById("nav-overlay");
    const toggle = open => { nav.classList.toggle("open", open); overlay.classList.toggle("open", open); };
    document.getElementById("toggle-menu").addEventListener("click", () => toggle(true));
    document.getElementById("nav-close").addEventListener("click", () => toggle(false));
    overlay.addEventListener("click", () => toggle(false));
    header.querySelector(".has-subnav").addEventListener("click", e => {
      e.preventDefault();
      e.currentTarget.parentElement.classList.toggle("open");
    });
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="cta col-af" id="contato">
        <div class="wrap cta-content">
          <div>
            <h4 class="title-common">Como podemos ajudá-lo?</h4>
            <p class="desc-common">A Acelera Trade ajuda você a transformar disciplina em resultado! Temos um time de especialistas pronto para tirar suas dúvidas sobre avaliação, conta financiada e saques.</p>
          </div>
          <div><a href="${CONTATO.whatsapp}" class="btn">Entre em contato</a></div>
        </div>
      </div>
      <div class="footer">
        <div class="wrap footer-content">
          <div class="footer-about">
            <a href="index.html" class="logo">${logoSvg(true)}</a>
            <p class="desc-common">Mesa proprietária que avalia, financia e acompanha traders nos mercados de mini-índice, mini-dólar e derivativos da B3.</p>
            <div class="socials">
              <a class="social" href="${CONTATO.instagram}" aria-label="Instagram">${ICONS.instagram}</a>
              <a class="social" href="${CONTATO.youtube}" aria-label="YouTube">${ICONS.youtube}</a>
              <a class="social" href="${CONTATO.linkedin}" aria-label="LinkedIn">${ICONS.linkedin}</a>
            </div>
          </div>
          <div>
            <h5>Fale conosco</h5>
            <ul><li><a href="mailto:${CONTATO.email}">${CONTATO.email}</a></li><li><a href="${CONTATO.whatsapp}">WhatsApp</a></li></ul>
          </div>
          <div>
            <h5>Planos</h5>
            <ul>${SERVICOS.map(s => `<li><a href="index.html?plano=${s.id}#servicos">${s.nome}</a></li>`).join("")}</ul>
          </div>
        </div>
      </div>
      <div class="end">
        <div class="wrap"><span><b>© ${new Date().getFullYear()}.</b> Todos os direitos reservados</span><a href="#">Privacidade e termos</a></div>
      </div>
      <div class="disclaimer"><div class="wrap">Aviso de risco: operações em renda variável e derivativos envolvem riscos e podem resultar em perdas. Resultados passados não garantem resultados futuros. O conteúdo deste site tem caráter informativo e não constitui recomendação de investimento.</div></div>`;
  }

  // Aviso de cookies
  let aceitou = false;
  try { aceitou = localStorage.getItem("cookies-ok") === "1"; } catch (e) {}
  if (!aceitou) {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="cookies-container" id="cookies">
        <div class="cookies-content">
          <p>Utilizamos cookies para melhorar a sua experiência em nosso site. Ao continuar navegando você concorda com a nossa <a href="#">política de privacidade</a>.</p>
          <button class="btn cookies-save" id="cookies-save">Continuar e fechar</button>
        </div>
      </div>`);
    document.getElementById("cookies-save").addEventListener("click", () => {
      try { localStorage.setItem("cookies-ok", "1"); } catch (e) {}
      document.getElementById("cookies").classList.add("hide");
    });
  }
}

/* ---------- Utilitários de notícias ---------- */

const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
function formatDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${String(d).padStart(2, "0")} de ${MESES[m - 1]}, ${y}`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

// Capa da notícia: usa "imagem" se existir; senão gera uma capa escura com gráfico de candles.
function coverHtml(n) {
  if (n.imagem) return `<img src="${escapeHtml(n.imagem)}" alt="${escapeHtml(n.titulo)}" loading="lazy">`;
  let seed = hash(n.id);
  const rand = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const W = 640, H = 400, count = 26, step = W / count;
  const tones = [["#0b1424", "#1d3557"], ["#101828", "#24324d"], ["#0e1a2b", "#1f4061"], ["#121212", "#2f3b4f"]];
  const [bg1, bg2] = tones[hash(n.id + "t") % tones.length];
  let price = H * (0.5 + rand() * 0.15), candles = "", line = "";
  const trend = rand() > 0.4 ? -1 : 1;
  for (let i = 0; i < count; i++) {
    const open = price;
    const close = Math.max(60, Math.min(H - 60, open + (rand() - 0.5) * 46 + trend * 5));
    const high = Math.min(open, close) - rand() * 16, low = Math.max(open, close) + rand() * 16;
    const x = i * step + step / 2, up = close < open, col = up ? "#fec934" : "#e8e8e8";
    candles += `<line x1="${x}" y1="${high}" x2="${x}" y2="${low}" stroke="${col}" stroke-width="1.5" opacity=".55"/>`;
    candles += `<rect x="${x - step * .27}" y="${Math.min(open, close)}" width="${step * .54}" height="${Math.max(2, Math.abs(close - open))}" rx="1.5" fill="${col}" opacity="${up ? .8 : .35}"/>`;
    line += `${i ? "L" : "M"}${x},${close} `;
    price = close;
  }
  let bokeh = "";
  for (let i = 0; i < 7; i++) bokeh += `<circle cx="${rand() * W}" cy="${rand() * H}" r="${20 + rand() * 50}" fill="#fff" opacity="${.03 + rand() * .05}"/>`;
  const g = "c" + hash(n.id + "g");
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg2}"/><stop offset="1" stop-color="${bg1}"/></linearGradient>
      <pattern id="${g}h" width="56" height="64" patternUnits="userSpaceOnUse"><path d="M28 0l28 16v32L28 64 0 48V16z" fill="none" stroke="#7fb3ff" stroke-opacity=".07"/></pattern>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#${g})"/>
    <rect width="${W}" height="${H}" fill="url(#${g}h)"/>
    ${bokeh}${candles}
    <path d="${line}" fill="none" stroke="#fec934" stroke-width="2" opacity=".6"/>
  </svg>`;
}

function postUrl(n) { return `noticia.html?id=${encodeURIComponent(n.id)}`; }

// Bloco igual ao da referência: 1 notícia grande à esquerda + 2 menores à direita.
function noticiasBlockHtml(list) {
  if (!list.length) return `<p class="empty-list">Nenhuma notícia encontrada.</p>`;
  const [first, ...rest] = list;
  return `
    <a class="post-feature" href="${postUrl(first)}">
      <div class="cover">${coverHtml(first)}</div>
      <div class="post-feature__info"><span class="post-date">${formatDate(first.data)}</span><h3 class="title-common">${escapeHtml(first.titulo)}</h3></div>
    </a>
    ${rest.map(n => `
    <a class="post-item" href="${postUrl(n)}">
      <div class="thumb cover">${coverHtml(n)}</div>
      <div><span class="post-date">${formatDate(n.data)}</span><h3 class="title-common">${escapeHtml(n.titulo)}</h3></div>
    </a>`).join("")}`;
}

function sortedNews() {
  return [...NOTICIAS].sort((a, b) => b.data.localeCompare(a.data));
}

function setupNewsletter() {
  document.querySelectorAll("[data-newsletter]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      form.reset();
      const msg = form.querySelector("small");
      if (msg) { msg.textContent = "Inscrição confirmada! Você vai receber nossas próximas notícias."; msg.classList.add("ok"); }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderLayout();
  setupNewsletter();
});
