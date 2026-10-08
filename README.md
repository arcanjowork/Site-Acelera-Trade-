# Site Acelera Trade

Site estático (HTML, CSS e JavaScript puro) da Acelera Trade, com página inicial e um portal de notícias.

## Páginas

- `index.html`: página inicial com hero, como funciona, planos, últimas notícias e newsletter.
- `noticias.html`: lista de notícias com destaque, filtro por categoria, busca, paginação, mais lidas e newsletter.
- `noticia.html?id=...`: página de cada notícia, com compartilhamento e "Leia também".

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
  destaque: false,               // true para aparecer no destaque da página de notícias
  conteudo: [
    "Parágrafo normal.",
    "## Subtítulo",
    "- Item de lista",
    "> Citação em destaque"
  ]
}
```

As capas das notícias são geradas automaticamente (gráfico de candles com as cores da categoria).

## Rodar localmente

```bash
python3 -m http.server 8000
```

Depois abra http://localhost:8000.

## Para ajustar

- WhatsApp: constante `WHATSAPP` em `js/main.js`.
- Menu, cotações do ticker e rodapé: `js/main.js`.
- Cores: variáveis no topo de `css/style.css`.
