/* Layout compartilhado (header, menu, footer) + utilitários do site. */

const CONTATO = {
  telefone: "(11) 91711-8101",
  whatsapp: "5511917118101",
  email: "contato.vecgroup@gmail.com",
  instagram: "aceleratrade"
};
const WHATS_URL = (texto = "Olá! Quero agendar um diagnóstico com a Acelera Trade.") =>
  `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(texto)}`;

// Ícones no estilo "linha" usados na apresentação (base Lucide).
const PATHS = {
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  cap: '<path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  crown: '<path d="M11.56 3.27a.5.5 0 0 1 .88 0l2.95 5.6a1 1 0 0 0 1.52.3l4.27-3.67a.5.5 0 0 1 .8.52l-2.83 10.25a1 1 0 0 1-.96.73H5.81a1 1 0 0 1-.96-.73L2.02 6.02a.5.5 0 0 1 .8-.52l4.27 3.67a1 1 0 0 0 1.52-.3z"/><path d="M5 21h14"/>',
  clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  report: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/>',
  presentation: '<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/>',
  route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  store: '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-2-1 2.7 2.7 0 0 1-2 1 2.7 2.7 0 0 1-2-1 2.7 2.7 0 0 1-2 1 2.7 2.7 0 0 1-2-1 2.7 2.7 0 0 1-2 1 2.7 2.7 0 0 1-2-1 2.7 2.7 0 0 1-2 1 2 2 0 0 1-2-2V7"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  userCheck: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  fileCheck: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/>',
  gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  eye: '<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>',
  trending: '<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>',
  factory: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  check: '<path d="M20 6 9 17l-5-5"/>'
};
const icon = name => `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${PATHS[name] || ""}</svg>`;
const WA_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zM20.5 3.5A12 12 0 0 0 1.7 18L0 24l6.2-1.6A12 12 0 0 0 24 12c0-3.2-1.2-6.2-3.5-8.5z"/></svg>';

function logoHtml(neg) {
  return `<a href="index.html" class="logo ${neg ? "logo--neg" : ""}" aria-label="Acelera Trade - início">
    <span class="logo__mark">${icon("zap")}</span>
    <span class="logo__name">ACELERA <b>TRADE</b></span>
    <span class="logo__tag">Consultoria de Performance em Trade Marketing</span>
  </a>`;
}

// Menu "Serviços": agrupado como na apresentação comercial.
const MENU_SERVICOS = [
  { grupo: "Pessoas", itens: [
    ["rocket", "Onboarding Visionário", "#pessoas"],
    ["cap", "Acelera Merchandising", "#pessoas"],
    ["crown", "Liderança de campo", "#pessoas"]
  ] },
  { grupo: "Processos e dados", itens: [
    ["clipboard", "Formulários de coleta", "#processos"],
    ["database", "Estruturação de BKO", "#processos"],
    ["report", "Relatórios de alta performance", "#processos"],
    ["presentation", "Metodologia de reports", "#processos"],
    ["route", "Roteirização", "#processos"]
  ] },
  { grupo: "Por público", itens: [
    ["factory", "Para indústrias", "?para=industrias#publico"],
    ["building", "Para agências de trade", "?para=agencias#publico"],
    ["search", "Diagnóstico de performance", "#proximo-passo"]
  ] }
];

const NAV = [
  ["Sobre", "index.html#quem-somos"],
  ["Serviços", null],
  ["Resultados", "index.html#resultados"],
  ["Blog", "noticias.html", "noticias"],
  ["Contato", "index.html#contato"]
];

function renderLayout() {
  const page = document.body.dataset.page;
  const href = h => (h.startsWith("#") || h.startsWith("?")) ? `index.html${h}` : h;

  const mega = MENU_SERVICOS.map(g => `<div><h6>${g.grupo}</h6>${g.itens.map(([ic, t, h]) =>
    `<a href="${href(h)}">${icon(ic)}${t}</a>`).join("")}</div>`).join("");

  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <header class="header" id="header">
        <div class="wrap header-content">
          ${logoHtml(false)}
          <div class="nav-overlay" id="nav-overlay"></div>
          <nav class="nav" id="nav" aria-label="Menu principal">
            <div class="nav__top"><span>Menu</span><button id="nav-close" aria-label="Fechar menu">${icon("close")}</button></div>
            <ul>
              ${NAV.map(([label, h, key]) => h === null
                ? `<li class="nav-expand"><a href="#0" class="has-subnav">${label} ${icon("chevron")}</a><div class="mega"><div class="wrap">${mega}</div></div></li>`
                : `<li><a href="${h}" class="${key && key === page ? "active" : ""}">${label}</a></li>`).join("")}
            </ul>
            <div class="nav__actions">
              <a href="${WHATS_URL()}" target="_blank" rel="noopener" class="btn">Agende um diagnóstico</a>
              <a href="https://instagram.com/${CONTATO.instagram}" target="_blank" rel="noopener" class="btn btn--outline">${icon("instagram")} @${CONTATO.instagram}</a>
            </div>
          </nav>
          <div class="header-actions">
            <a class="icon-link" href="https://instagram.com/${CONTATO.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram")}</a>
            <a href="${WHATS_URL()}" target="_blank" rel="noopener" class="btn btn--sm">Agende um diagnóstico</a>
          </div>
          <button class="toggle-menu" id="toggle-menu" aria-label="Abrir menu">${icon("menu")}</button>
        </div>
        <nav class="quicknav" aria-label="Atalhos">
          <ul>
            ${NAV.map(([label, h, key]) => `<li><a href="${h === null ? "index.html#pessoas" : h}" class="${key && key === page ? "active" : ""}">${label}</a></li>`).join("")}
            <li><a href="${WHATS_URL()}" target="_blank" rel="noopener" class="cta">Agende um diagnóstico</a></li>
          </ul>
        </nav>
      </header>`;

    const nav = document.getElementById("nav");
    const overlay = document.getElementById("nav-overlay");
    const toggle = open => { nav.classList.toggle("open", open); overlay.classList.toggle("open", open); };
    document.getElementById("toggle-menu").addEventListener("click", () => toggle(true));
    document.getElementById("nav-close").addEventListener("click", () => toggle(false));
    overlay.addEventListener("click", () => toggle(false));
    nav.querySelectorAll("a:not(.has-subnav)").forEach(a => a.addEventListener("click", () => toggle(false)));
    header.querySelector(".has-subnav").addEventListener("click", e => {
      e.preventDefault();
      e.currentTarget.parentElement.classList.toggle("open");
    });
    const onScroll = () => document.getElementById("header").classList.toggle("scrolled", scrollY > 10);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <footer class="footer">
        <div class="wrap footer-content">
          <div class="footer-about">
            ${logoHtml(true)}
            <p>Consultoria de Performance em Trade Marketing para indústrias e agências. Do BKO ao PDV.</p>
            <p class="tagline">Diagnosticar. Estruturar.<br>Desenvolver. Sustentar.</p>
          </div>
          <div>
            <h5>Serviços</h5>
            <ul>${MENU_SERVICOS.slice(0, 2).flatMap(g => g.itens).slice(0, 6).map(([, t, h]) => `<li><a href="${href(h)}">${t}</a></li>`).join("")}</ul>
          </div>
          <div>
            <h5>Navegação</h5>
            <ul>
              <li><a href="index.html#quem-somos">Quem somos</a></li>
              <li><a href="index.html?para=industrias#publico">Para indústrias</a></li>
              <li><a href="index.html?para=agencias#publico">Para agências</a></li>
              <li><a href="index.html#fundador">Fundador</a></li>
              <li><a href="noticias.html">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5>Fale conosco</h5>
            <ul>
              <li><a href="${WHATS_URL()}" target="_blank" rel="noopener">${icon("phone")} ${CONTATO.telefone}</a></li>
              <li><a href="mailto:${CONTATO.email}">${icon("mail")} ${CONTATO.email}</a></li>
              <li><a href="https://instagram.com/${CONTATO.instagram}" target="_blank" rel="noopener">${icon("instagram")} @${CONTATO.instagram}</a></li>
            </ul>
          </div>
        </div>
        <div class="end"><div class="wrap"><span>© ${new Date().getFullYear()} Acelera Trade. Todos os direitos reservados.</span><span>Do BKO ao PDV.</span></div></div>
      </footer>
      <a class="wa-float" href="${WHATS_URL()}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">${WA_SVG}</a>`;
  }

  // Troca <i data-icon="nome"></i> pelo SVG correspondente
  document.querySelectorAll("[data-icon]").forEach(el => { el.outerHTML = icon(el.dataset.icon); });

  // Links de WhatsApp declarados no HTML
  document.querySelectorAll("[data-whats]").forEach(a => {
    a.href = WHATS_URL(a.dataset.whats || undefined);
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Animação de entrada
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: .12 });
    els.forEach(el => io.observe(el));
  } else els.forEach(el => el.classList.add("in"));
}

/* ---------- Público: indústrias x agências ---------- */
function setAudience(aud, updateUrl) {
  const agencia = aud === "agencias";
  document.body.classList.toggle("aud-agencia", agencia);
  document.querySelectorAll("[data-set-aud]").forEach(b =>
    b.classList.toggle("active", b.dataset.setAud === (agencia ? "agencias" : "industrias")));
  if (updateUrl) {
    const url = new URL(location.href);
    url.searchParams.set("para", agencia ? "agencias" : "industrias");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  }
}

/* ---------- Utilitários do blog ---------- */
const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
function formatDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} de ${MESES[m - 1]} de ${y}`;
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function coverHtml(n) {
  return `<img src="${escapeHtml(n.imagem)}" alt="" loading="lazy">`;
}
function postUrl(n) { return `noticia.html?id=${encodeURIComponent(n.id)}`; }
function sortedNews() { return [...NOTICIAS].sort((a, b) => b.data.localeCompare(a.data)); }

// 1 notícia grande à esquerda + 2 menores à direita
function noticiasBlockHtml(list) {
  if (!list.length) return `<p class="empty-list">Nenhuma publicação encontrada.</p>`;
  const [first, ...rest] = list;
  return `
    <a class="post-feature" href="${postUrl(first)}">
      <div class="cover">${coverHtml(first)}</div>
      <div class="post-feature__info">
        <span class="post-cat">${escapeHtml(first.categoria)}</span>
        <span class="post-date">${formatDate(first.data)}</span>
        <h3>${escapeHtml(first.titulo)}</h3>
      </div>
    </a>
    ${rest.map(n => `
    <a class="post-item" href="${postUrl(n)}">
      <div class="thumb cover">${coverHtml(n)}</div>
      <div><span class="post-cat">${escapeHtml(n.categoria)}</span><span class="post-date">${formatDate(n.data)}</span><h3>${escapeHtml(n.titulo)}</h3></div>
    </a>`).join("")}`;
}

document.addEventListener("DOMContentLoaded", renderLayout);
