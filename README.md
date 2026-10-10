# Site Acelera Trade

Site da **Acelera Trade, Consultoria de Performance em Trade Marketing**, feito em HTML, CSS e JavaScript puro (sem build).
O conteúdo vem das propostas comerciais para indústrias e para agências; a estrutura do blog é inspirada em https://incubemetrics.com/noticias/.

## Páginas

- `index.html`: página principal (método, diagnóstico rápido, custo invisível, serviços, governança/agências, indicadores, fundador, próximo passo, blog e contato).
  - O seletor **Sou indústria / Sou agência** troca os textos para cada público. Links diretos: `index.html?para=industrias` e `index.html?para=agencias`.
  - O formulário de contato abre o WhatsApp com a mensagem já preenchida.
- `noticias.html`: blog (1 artigo grande + 2 menores por página, paginação com `?pagina=2`).
- `noticia.html?id=...`: artigo completo, compartilhamento e chamada para diagnóstico.

## Como publicar um artigo

Edite `js/noticias-data.js` e adicione um objeto à lista `NOTICIAS`:

```js
{
  id: "meu-artigo",                // vira a URL: noticia.html?id=meu-artigo
  categoria: "Execução no PDV",
  titulo: "Título do artigo",
  resumo: "Resumo usado na descrição da página.",
  autor: "Equipe Acelera Trade",
  data: "2026-10-10",              // AAAA-MM-DD (a lista é ordenada por data)
  imagem: "img/minha-foto.jpg",
  conteudo: [
    "Parágrafo normal.",
    "## Subtítulo",
    "- Item de lista",
    "> Citação em destaque",
    "Fontes: ..."                  // linha que começa com "Fonte" vai para o rodapé do artigo
  ]
}
```

## Onde alterar

- Telefone, WhatsApp, e-mail e Instagram: objeto `CONTATO` em `js/main.js`.
- Menu de serviços e rodapé: `MENU_SERVICOS` e `NAV` em `js/main.js`.
- Cores e fontes: variáveis no topo de `css/style.css`.
- Fotos: pasta `img/` (Unsplash, uso comercial gratuito; lista em `img/CREDITOS.md`).

## Rodar localmente

```bash
python3 -m http.server 8000
```

Depois abra http://localhost:8000.
