# Site Acelera Trade

Site estático (HTML, CSS e JavaScript puro) da Acelera Trade, com página inicial e um portal de notícias.

## Páginas

Layout baseado em https://incubemetrics.com/noticias/ (fundo branco, amarelo `#fec934`, cinza escuro `#2f2f2f`, fontes Barlow e Inter), com conteúdo e marca da Acelera Trade.

- `index.html`: topo com abas de planos, mercados, "Nós somos", últimas notícias.
- `noticias.html`: blog com 1 notícia grande + 2 menores por página e paginação (`?pagina=2`).
- `noticia.html?id=...`: notícia completa, botões de compartilhar e newsletter na lateral.

## Como publicar uma notícia

Edite `js/noticias-data.js` e adicione um objeto à lista `NOTICIAS`:

```js
{
  id: "minha-noticia",           // vira a URL: noticia.html?id=minha-noticia
  categoria: "Mercado",          // Acelera Trade, Mercado, Educação, Traders ou Eventos
  titulo: "Título da notícia",
  resumo: "Resumo exibido no card.",
  autor: "Nome do autor",
  data: "2026-10-08",            // AAAA-MM-DD
  leitura: 4,                    // minutos de leitura
  imagem: "img/minha-foto.jpg",  // opcional: foto de capa (sem ela, a capa é gerada automaticamente)
  conteudo: [
    "Parágrafo normal.",
    "## Subtítulo",
    "- Item de lista",
    "> Citação em destaque"
  ]
}
```

As notícias aparecem da mais nova para a mais antiga. Sem `imagem`, a capa é gerada automaticamente.

## Rodar localmente

```bash
python3 -m http.server 8000
```

Depois abra http://localhost:8000.

## Para ajustar

- E-mail, WhatsApp, redes sociais e link da área do trader: objeto `CONTATO` em `js/main.js`.
- Itens do menu "Planos", das abas da home e do rodapé: lista `SERVICOS` em `js/main.js`.
- Textos do topo da home: objeto `HERO` em `index.html`.
- Cores: variáveis no topo de `css/style.css`.
