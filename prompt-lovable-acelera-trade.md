# Prompt para o Lovable: site da Acelera Trade

> Como usar: cole a **Parte 1** no Lovable e espere terminar. Depois suba as imagens (lista no fim) e cole a **Parte 2**.
> Os itens marcados com `[CONFIRMAR]` precisam ser revisados antes de publicar.

---

## PARTE 1: Visual, estrutura e conteúdo

Crie um site institucional para a **Acelera Trade, Consultoria de Performance em Trade Marketing**, em **React + TypeScript + Tailwind**, com **React Router**. Um componente por seção em `src/components/home/`, `src/components/blog/` e `src/components/layout/`. Tudo em **português do Brasil**.

O site atende dois públicos: **indústrias** (que investem em trade e contratam agências) e **agências de trade marketing** (que executam para as indústrias). Vários blocos mudam de texto conforme o público escolhido.

### Identidade visual

- Cores (configure no `tailwind.config` como `navy`, `navy2`, `orange`, `gray`, `line`, `light`):
  - Azul-marinho principal `#1B2A4A` (títulos, fundos escuros, botões secundários)
  - Azul-marinho escuro `#14213D` (rodapé)
  - Laranja de destaque `#EE6A24`, hover `#D9581A` (botões, números, segunda linha dos títulos, ícones)
  - Cinza do texto `#5B6474`, cinza claro `#8A93A3`
  - Bordas `#DDE1E7`, fundo claro de seções alternadas `#F3F5F8`, branco `#FFFFFF`
- Tipografia (Google Fonts): **Montserrat** 600/700/800 nos títulos, botões e rótulos; **Inter** 400/500/600/700 no corpo.
- Títulos de seção: Montserrat 800, **CAIXA ALTA**, `clamp(28px, 3.4vw, 42px)`, cor marinho. A segunda linha vem em laranja e quebra a linha (ex.: "QUEM EXECUTA" / "FAZ A DIFERENÇA.").
- "Eyebrow" acima de cada título: Montserrat 700, 12px, caixa alta, `letter-spacing: 3px`, laranja.
- Botões em pílula (`rounded-full`), altura 54px, Montserrat 700 14px caixa alta. Primário laranja com texto branco. Secundário com contorno marinho, que fica marinho cheio no hover. Leve `translateY(-2px)` no hover.
- Cantos: cards 14px, fotos 24px. Sombra suave: `0 20px 50px -24px rgba(27,42,74,.35)`.
- Ícones de linha (lucide-react), traço 2, em laranja ou dentro de círculos marinho com ícone branco.
- Container máximo de 1240px com 24px de margem lateral (16px no celular). Seções com 110px de respiro vertical (80px no tablet, 60px no celular), alternando fundo branco e `#F3F5F8`.
- Animação de entrada suave (fade + subir 24px) ao rolar, respeitando `prefers-reduced-motion`.
- **Logo**: ícone de raio (lucide `Zap`) em laranja + "ACELERA" em marinho e "TRADE" em laranja, Montserrat 800 com `letter-spacing: 2.5px`. Ao lado, em telas grandes, um divisor fino e o texto pequeno "Consultoria de Performance em Trade Marketing". No rodapé, a versão negativa (ACELERA em branco).

### Público: indústria x agência

- Crie um contexto `AudienceContext` com o valor `"industrias" | "agencias"`, padrão `"industrias"`, lido e gravado no parâmetro de URL `?para=agencias`.
- Seletores (pílulas "Sou indústria" / "Sou agência") aparecem em várias seções. Todos ficam sincronizados.
- Nos textos abaixo, **[I]** = versão indústria e **[A]** = versão agência. Quando não houver marcação, o texto é igual para os dois públicos.

### Contatos (constantes em `src/config/contato.ts`)

- Telefone/WhatsApp: **(11) 91711-8101**, link `https://wa.me/5511917118101?text=Olá! Quero agendar um diagnóstico com a Acelera Trade.` (texto codificado na URL)
- E-mail: **contato.vecgroup@gmail.com** `[CONFIRMAR se haverá e-mail com domínio próprio]`
- Instagram: **@aceleratrade** (`https://instagram.com/aceleratrade`)

---

### Cabeçalho (`Header.tsx`)

**Referência de estilo:** cabeçalho limpo como o da incubemetrics.com: logo à esquerda e menu simples à direita, sempre visível ao abrir a página. Use só a estrutura e o ritmo da referência. Os textos, a marca e as cores são da Acelera Trade.

- Fixo no topo (`sticky`), fundo branco 97% com `backdrop-blur`, altura 84px. Ganha borda inferior e sombra leve ao rolar.
- Fundo com **hexágonos de contorno bem sutis** (traço marinho com 7% de opacidade) só no lado direito, sem repetir. Faça em SVG inline.
- Menu: **Sobre · Serviços ▾ · Clientes · Resultados · Blog · Contato**, em Montserrat 500 15,5px marinho. No hover ou no item ativo, o texto fica laranja com um sublinhado laranja de 2px.
- Direita: botão redondo do Instagram (contorno) + botão laranja **"AGENDE UM DIAGNÓSTICO"** (abre o WhatsApp).
- **Mega menu "Serviços"** (abre no hover em desktop e no clique em mobile): painel branco de largura total, em 3 colunas, cada uma com título-rótulo laranja e itens com ícone laranja:
  - **PESSOAS**: Onboarding Visionário (Rocket) · Acelera Merchandising (GraduationCap) · Liderança de campo (Crown). Todos levam para `#pessoas`.
  - **PROCESSOS E DADOS**: Formulários de coleta (ClipboardCheck) · Estruturação de BKO (Database) · Relatórios de alta performance (ChartNoAxesColumn) · Metodologia de reports (Presentation) · Roteirização (Route). Todos levam para `#processos`.
  - **POR PÚBLICO**: Para indústrias (Factory, `/?para=industrias#publico`) · Para agências de trade (Building2, `/?para=agencias#publico`) · Diagnóstico de performance (Search, `#proximo-passo`)
- Responsivo:
  - Abaixo de 1180px some o botão do Instagram. Abaixo de 1040px some o botão laranja, e o menu continua visível.
  - **Abaixo de 860px**: o menu vira um botão "☰" que abre uma gaveta lateral à direita (cabeçalho marinho com "Menu" e botão fechar, itens empilhados, "Serviços" expansível, botões "Agende um diagnóstico" e "@aceleratrade" no fim, com fundo escurecido atrás).
  - No celular, logo abaixo da logo, mostre uma **barra de atalhos sempre visível**, rolável na horizontal, com pílulas cinza-claro: Sobre · Serviços · Clientes · Resultados · Blog · Contato e uma pílula laranja "Agende um diagnóstico".

### Botão flutuante de WhatsApp

Círculo verde `#25D366` de 60px no canto inferior direito, com o ícone do WhatsApp, em todas as páginas.

---

### Página inicial (`/`)

#### 1. Hero por serviço (`Hero.tsx`, id `servicos`)
**Referência de estilo:** o topo da incubemetrics.com. O hero já apresenta um serviço e muda conforme a aba escolhida logo abaixo. Use a estrutura e o ritmo da referência, com texto, cores e marca da Acelera Trade.
- Fundo branco com hexágonos grandes de contorno bem sutil (marinho, 5% de opacidade) em SVG.
- Duas colunas (texto 1,1fr | ilustração 0,9fr).
- Texto, que troca com uma animação suave (fade + subir 12px) ao mudar de serviço:
  - Etiqueta com contorno marinho de 1,5px, cantos de 4px, Montserrat 700 12px caixa alta: nome do serviço
  - H1 Montserrat 800, `clamp(32px,4vw,52px)`, marinho, sem caixa alta
  - Parágrafo de apoio
  - Botão laranja **SAIBA COMO PODEMOS AJUDÁ-LO →** (abre o WhatsApp com "Olá! Quero saber mais sobre {serviço} da Acelera Trade.") e o link laranja **Ver detalhes do serviço →**, que leva para a seção do serviço
- Ilustração vetorial em SVG, estilo flat, nas cores da marca: um promotor de **camisa polo azul-marinho** (sem avental) apontando para um quadro com gráfico de barras cinza e linha laranja em alta, legenda e um gráfico de pizza; atrás, duas gôndolas com produtos cinza e alguns laranja. No canto do quadro, um selo circular marinho com o ícone do serviço ativo, em branco.
- 5 serviços, que trocam sozinhos a cada 7s até o visitante clicar em uma aba (aceite também `?servico=<id>` na URL):

| id | Aba / etiqueta | Título | Texto | Link "Ver detalhes" |
|---|---|---|---|---|
| onboarding | Onboarding Visionário (Rocket) | Promotor que chega à loja sabendo o padrão, a marca e o porquê do trabalho! | Integração pensada para a realidade do PDV: menos saídas nos primeiros meses e produtividade mais cedo. | #pessoas |
| merchandising | Acelera Merchandising (GraduationCap) | Execução no padrão em todas as lojas, com técnica e propósito! | Treinamento de promotores com visão e propósito: técnica de merchandising, execução e relação com a loja. | #pessoas |
| lideranca | Liderança de campo (Crown) | Supervisores que corrigem a rota antes de virar perda de venda! | Rotina de gestão, feedback e correção de rota para supervisores, coordenadores e gerentes. | #pessoas |
| processos | Coleta, BKO e reports (ClipboardCheck); etiqueta "Processos e dados" | Dado confiável do PDV ao escritório, para decidir com segurança! | Formulários de Loja Perfeita, estruturação de BKO, relatórios de alta performance, metodologia de reports e roteirização. | #processos |
| auditoria | Auditoria e governança (ShieldCheck) | Saiba se a execução que você paga está acontecendo, loja a loja! | Auditoria de agências e de execução no PDV, padrão de reports e rituais de performance. | #publico |

#### 2. Abas de serviços (`ServiceTabs.tsx`)
Faixa branca com bordas finas em cima e embaixo, dividida em 5 colunas separadas por linhas verticais. Cada aba tem um ícone de 30px e o nome em Montserrat 700 14,5px. A aba ativa sobe 14px sobre o hero, ganha borda marinho de 2px (sem a borda de baixo, cantos superiores de 10px) e ícone laranja; as outras ficam em cinza e escurecem no hover. Use `role="tablist"` e `aria-selected`. No tablet, 3 colunas; no celular, as abas viram um carrossel horizontal com rolagem.

#### 3. Clientes (`Clients.tsx`, id `clientes`)
Duas colunas: à esquerda (300px, com divisor vertical), o título **Clientes** (Montserrat 800, 40px) e o texto "Marcas onde atuamos e operações que já atendemos. Conhecemos o que a indústria cobra e o que o campo precisa para entregar."; à direita, um **carrossel de logos** (4 por vez no desktop, 3 no tablet, 2 no celular) com setas redondas ‹ ›, que anda sozinho a cada 3,5s e pausa no hover.
- Marcas: Nestlé (nestle.com), Colgate-Palmolive (colgatepalmolive.com), Cargill (cargill.com), J.Macêdo (jmacedo.com.br), Work On (sem domínio), Kraft Heinz (kraftheinzcompany.com), Camil (camilalimentos.com.br), Mondelez (mondelezinternational.com), Ferrero (ferrero.com), Fini (fini.com.br), Duracell (duracell.com), Leão (leaoalimentosebebidas.com.br), Americanas (americanas.com.br), Bauducco (bauducco.com.br), Philip Morris (pmi.com), Aurora Coop (auroracoop.com.br), Groupe SEB (groupeseb.com), Samsung (samsung.com) `[CONFIRMAR lista e se pode exibir as marcas]`
- Cada logo fica num card cinza-claro `#F3F5F8` de 110px de altura, em cinza (`grayscale opacity-60`) e colorido no hover. Logos via Brandfetch CDN: `https://cdn.brandfetch.io/{dominio}/w/400/h/120/logo?c=${import.meta.env.VITE_BRANDFETCH_CLIENT_ID}&fallback=lettermark`; se a imagem falhar, mostre o nome em Montserrat 800 cinza.

#### 3b. Nós somos (`AboutSplit.tsx`, id `quem-somos`)
Bloco de largura total em duas metades: à esquerda, fundo **laranja `#EE6A24`** com texto marinho; à direita, a foto `quem-somos-promotora.jpg` cobrindo toda a altura (mínimo de 640px). Na divisa das duas metades, um hexágono branco com o raio laranja da marca.
- Título **Nós somos** (Montserrat 800, até 46px).
- 3 slides que trocam a cada 8s, com navegação **01 · 02 · 03** no rodapé do bloco (o ativo fica sublinhado):
  - 01: "Uma consultoria de performance em trade marketing que ajuda indústrias e agências a transformar o investimento em trade em execução no PDV, com método, do diagnóstico ao acompanhamento." / "Equipe, promotores, sistemas e investimento não bastam se a execução não chega à loja. Nós organizamos o caminho entre o escritório e a gôndola."
  - 02: "**Nosso método:** Diagnosticar onde a performance está sendo perdida, estruturar processos, papéis, formulários e rotas, desenvolver pessoas do promotor ao gerente e sustentar com indicadores, rituais e planos de ação." / "Criamos do zero ou reorganizamos o que já existe."
  - 03: "Conhecemos trade marketing de dentro para fora: nosso fundador começou como promotor e chegou à gestão nacional de Trade Marketing, com mais de 17 anos em indústrias, agências e varejo." `[CONFIRMAR anos]` / "Sabemos o que a indústria cobra e o que a agência precisa para entregar."
- No celular, o texto vem em cima e a foto embaixo (380px), sem o hexágono.

#### 4. Onde o jogo é decidido (`Decided.tsx`, fundo `#F3F5F8`)
Texto à esquerda, foto `shopper-gondola.jpg` à direita (560px de altura).
- Eyebrow **ONDE O JOGO É DECIDIDO** · título **A VENDA É DECIDIDA NA GÔNDOLA.** / **E A GÔNDOLA, PELO SEU CAMPO.**
- Dois números gigantes em laranja (Montserrat 800, até 76px):
  - **76%** · "das decisões de compra no supermercado acontecem no ponto de venda."
  - **10,8%** · "dos itens estavam em falta nas gôndolas dos supermercados em julho de 2026."
- Destaque com borda laranja à esquerda: "Equipe, promotores, sistemas e investimento não bastam se a execução não chega à loja."
- Fonte (12px, cinza claro): "Fontes: POPAI, Consumer Engagement Study (via Meio & Mensagem); Neogrid, Índice de Ruptura jul/2026 (via Mercado&Consumo)."

#### 5. Diagnóstico rápido (`QuickDiagnosis.tsx`, id `diagnostico`)
- Eyebrow **DIAGNÓSTICO RÁPIDO** · título **O QUE ESTÁ TRAVANDO SUA OPERAÇÃO** / **E O QUE ISSO CUSTA NO RESULTADO**
- Seletor "Sou indústria / Sou agência".
- Tabela em cards, com as colunas **SINTOMA** → **O QUE ACONTECE NO PDV** → **IMPACTO NO RESULTADO**. A 1ª coluna tem ícone laranja e texto em negrito, a 2ª é um card branco e a 3ª um card marinho com texto branco. No celular, cada linha vira um card empilhado.
- [I]:
  1. RefreshCw · Alta rotatividade de promotores → A loja é atendida por quem ainda não conhece o padrão da marca → Ruptura, perda de venda e custo para repor a equipe
  2. UserCheck · Supervisores sem preparo para liderar → Ninguém corrige a rota no dia a dia do campo → Execução irregular entre lojas e regiões
  3. ClipboardCheck · Coleta e pesquisas de baixa qualidade → Dado errado ou incompleto chega ao escritório → Decisão de verba, preço e sortimento no escuro
  4. FileText · Agências sem padrão de entrega → Relatório mostra check-in e foto, não execução → Pagamento por serviço que não foi entregue
  5. Gauge · Indicadores só operacionais → Mede visita, não mede resultado na gôndola → Investimento em trade sem retorno comprovado
- [A]:
  1. RefreshCw · Alta rotatividade de promotores → Promotor novo toda semana, sem integração → Custo de admissão e treino repetido, margem menor
  2. UserCheck · Supervisores sem preparo para liderar → O problema chega ao cliente antes de chegar a você → SLA descumprido e desgaste na conta
  3. Database · Coleta fraca e BKO sobrecarregado → Relatório atrasado, incompleto e com retrabalho → Cliente questiona a entrega e glosa
  4. ChartNoAxesColumn · Reports que não mostram valor → O cliente enxerga custo, não resultado → Contrato disputado só por preço
  5. Route · Roteiros mal dimensionados → Deslocamento demais e loja de menos → Custo operacional alto e loja sem visita
- Abaixo: "Se você reconhece 2 ou mais destes sinais, a performance está sendo perdida em algum ponto do sistema." + link laranja **Vamos conversar →**, que abre o WhatsApp com o texto "Olá! Reconheci alguns sinais do diagnóstico rápido e quero conversar com a Acelera Trade."

#### 6. O custo invisível (`HiddenCost.tsx`)
Fundo com a foto `gondola-vazia.jpg` coberta por uma camada marinho `#14213D` com 90–96% de opacidade. Texto branco.
- Eyebrow **O CUSTO INVISÍVEL** · título **O QUE A EXECUÇÃO FRACA** / **CUSTA TODOS OS DIAS**
- 3 cards translúcidos (fundo branco 5%, borda branca 12%), com o número em laranja:
  - **10,8%** · "dos itens em falta nas gôndolas dos supermercados. Produto que não está na gôndola não vende."
  - **0,5 a 2x** · "o salário anual: é o custo de substituir quem sai. E 52% das saídas poderiam ter sido evitadas."
  - **70%** · "da variação no engajamento de uma equipe vem do gestor direto. Supervisor despreparado derruba o time."
- Frase final:
  - [I] "Cada um desses pontos aparece no sell-out, na verba e no retorno do investimento em trade."
  - [A] "Cada um desses pontos aparece na margem, no SLA e na renovação do contrato."
- Fontes: "Neogrid, Índice de Ruptura jul/2026 (Mercado&Consumo); Gallup, 'This Fixable Problem Costs U.S. Businesses $1 Trillion' (2019); Gallup, 'Managers Account for 70% of Variance in Employee Engagement' (2015)."
- `[CONFIRMAR]` A apresentação tem um 4º dado ("57% dos promotores vão à loja sem onboarding"), mas a fonte ainda não foi confirmada. Só inclua depois de confirmar.

#### 7. Serviços · Pessoas (`ServicesPeople.tsx`, id `pessoas`)
Duas colunas (0,8fr | 1,2fr).
- Esquerda: eyebrow **SERVIÇOS · PESSOAS** · título **QUEM EXECUTA** / **FAZ A DIFERENÇA.** · texto "Treinamento não é evento. É parte da estratégia de performance: conhecimento que vira comportamento e execução." · caixa cinza com **+82%** em laranja e o texto "de retenção de novos colaboradores quando o onboarding é bem estruturado." (fonte: Brandon Hall Group, citado pela ABRH-PR / Gazeta do Povo)
- Direita: 3 cards horizontais, cada um com ícone em círculo marinho, título e descrição, mais uma coluna "IMPACTO" separada por um divisor:
  - Rocket · **Onboarding Visionário** · "O promotor chega à loja sabendo o padrão, a marca e o porquê do trabalho." · IMPACTO: "Menos saídas nos primeiros meses e produtividade mais cedo."
  - GraduationCap · **Acelera Merchandising** · "Treinamento de promotores com visão e propósito: técnica de merchandising, execução e relação com a loja." · IMPACTO: "Execução no padrão em todas as lojas."
  - Crown · **Liderança de campo** · "Supervisores, coordenadores e gerentes com rotina de gestão, feedback e correção de rota." · IMPACTO: [I] "Equipe engajada e problema resolvido antes de virar perda de venda." / [A] "Equipe engajada e problema resolvido antes de chegar ao cliente."

#### 8. Serviços · Processos e dados (`ServicesData.tsx`, id `processos`, fundo `#F3F5F8`)
Foto `planejamento.jpg` à esquerda (600px), lista à direita.
- Eyebrow **SERVIÇOS · PROCESSOS E DADOS** · título **DADO CONFIÁVEL,** / **DECISÃO CERTA.**
- Linhas em cards brancos, no formato serviço → seta → "o que você ganha":
  - ClipboardCheck · **Formulários de coleta de alta performance** (subtítulo "Loja Perfeita e Execução Perfeita") → Coleta rápida, completa e comparável entre lojas.
  - Database · [I] **Auditoria e estruturação de BKO** → Menos retrabalho e informação no prazo. / [A] **Estruturação de BKO** → Menos retrabalho e relatório no prazo.
  - ChartNoAxesColumn · **Consultoria de relatórios de alta performance** → Relatório que mostra resultado, não só atividade.
  - Presentation · [I] **Metodologia de reports** (subtítulo "Para diretoria e para o varejo") → O valor do trade visível para quem aprova a verba. / [A] **Metodologia de reports a clientes** → Seu cliente enxerga o valor da entrega.
  - Route · **Roteirização** → Mais lojas atendidas com o mesmo time e menos deslocamento.

#### 9. Por público (`Audience.tsx`, id `publico`)
Texto à esquerda, foto à direita (640px). Seletor "Para indústrias / Para agências" no topo.
- [I] Foto `auditoria-campo.jpg`. Etiqueta laranja **EXCLUSIVO PARA INDÚSTRIAS** · título **GOVERNANÇA SOBRE A SUA** / **OPERAÇÃO TERCEIRIZADA.** · texto "Você paga pela execução. Nós mostramos se ela está acontecendo e organizamos a gestão para que aconteça." · grade 2 colunas:
  - ShieldCheck · **Auditoria de agências** · Agências terceirizadas: contratado x executado, com visão independente.
  - Store · **Auditoria de execução no PDV** · Desvios e pontos críticos, loja a loja.
  - FileText · **Padrão de reports das agências** · Processos e relatórios de todas as agências no mesmo formato.
  - CalendarCheck · **Rituais de performance** · Monitoramento com reuniões, painéis e planos de ação.
  - Network · **Estruturação da área de Trade** · Modelo, dimensionamento e cargos, do promotor ao gerente.
  - Faixa marinho: **RESULTADO: MAIS EFICIÊNCIA NO INVESTIMENTO EM TRADE**
- [A] Foto `equipe-reuniao.jpg`. Etiqueta **PARA AGÊNCIAS** · título **SUA AGÊNCIA PRONTA PARA** / **QUALQUER AUDITORIA DO CLIENTE.** · texto "Quem contrata agência quer entrega comprovada. Preparamos sua operação para mostrar resultado antes que o cliente pergunte." · grade:
  - FileCheck · **Renovação de contrato** · Resultado comprovado em report, não em discurso.
  - CalendarCheck · **SLA cumprido** · Roteiro, coleta e BKO organizados para entregar no prazo. SLA de reposição.
  - Wallet · **Margem protegida** · Menos turnover, retrabalho e deslocamento.
  - Trophy · **Diferencial na concorrência** · Onboarding e metodologia de reports como argumento de venda.
  - Eye · **Olhar independente** · Um diagnóstico de fora da sua operação, antes do cliente.
  - Faixa marinho: **A AGÊNCIA MANTÉM O CLIENTE. NÓS AMPLIAMOS A ENTREGA.**

#### 10. Resultados (`Results.tsx`, id `resultados`, fundo `#F3F5F8`)
- Eyebrow **RESULTADO É O QUE IMPORTA** · título **DO INDICADOR DE CAMPO** / **AO RESULTADO DO NEGÓCIO** · à direita: "Os indicadores são definidos com cada cliente, de acordo com o desafio e o modelo de operação."
- Seletor de público e tabela com 3 colunas: **INDICADOR → O QUE MELHORA NA OPERAÇÃO → RESULTADO** ([I] "NO NEGÓCIO", [A] "PARA A AGÊNCIA"), no mesmo estilo de cards do Diagnóstico rápido.
- [I]: Turnover → Equipe estável, que conhece loja e padrão → Execução constante e menor custo de reposição · Cumprimento de roteiro → Loja visitada na frequência certa → Presença e disponibilidade do produto · Execução / Loja Perfeita → Produto certo, no lugar certo, com preço → Menos ruptura e mais sell-out · Qualidade das pesquisas → Dado confiável e comparável → Decisão certa de verba, preço e sortimento · SLA das agências → Entrega auditada e cobrada com critério → Mais eficiência no investimento em trade
- [A]: Turnover → Menos admissões, demissões e treinamentos repetidos → Margem protegida · Cumprimento de roteiro e absenteísmo → Loja atendida no dia certo → SLA cumprido, sem glosa · Execução / Loja Perfeita → Padrão igual em todas as lojas → Cliente satisfeito e contrato renovado · Qualidade das pesquisas e do BKO → Relatório no prazo e sem retrabalho → Confiança do cliente na sua entrega · Produtividade → Mais lojas por promotor, com rota certa → Custo por visita menor e proposta mais competitiva

#### 11. Fundador (`Founder.tsx`, id `fundador`)
Duas colunas (0,8fr | 1,2fr).
- Esquerda: foto `thiago-arcanjo-800.webp` (retrato profissional, blazer marinho), 620px de altura, `object-position: top`, cantos de 24px. Se a foto não estiver disponível, mostre um cartão marinho com o monograma "TA" em círculo laranja, o número **17+** gigante em laranja, "anos em indústrias, agências e varejo" e uma linha do tempo vertical (PROMOTOR · SUPERVISÃO · COORDENAÇÃO · GESTÃO · ESTRATÉGIA).
- Direita: eyebrow **POR QUE ACELERA TRADE?** · título **CONHECEMOS TRADE MARKETING** / **DE DENTRO PARA FORA.**
- Texto: "**Thiago Archanjo, fundador:** 17+ anos em indústrias, agências e varejo. Começou como promotor e chegou à gestão nacional de Trade Marketing. Sabe o que a indústria cobra e o que a agência precisa para entregar." `[CONFIRMAR grafia: Archanjo ou Arcanjo; e anos de experiência: 17+ ou 8+]`
- Trilha em caixa alta com setas laranja: PROMOTOR › SUPERVISÃO › COORDENAÇÃO › GESTÃO › ESTRATÉGIA
- Link laranja "Veja os clientes e marcas que já atendemos →" para `#clientes`.

#### 12. Próximo passo (`NextStep.tsx`, id `proximo-passo`, fundo `#F3F5F8`)
Texto à esquerda, foto `imersao-campo.jpg` à direita (600px).
- Eyebrow **PRÓXIMO PASSO** · título **TUDO COMEÇA POR** / **UM DIAGNÓSTICO.** · texto "Antes de treinar ou reestruturar, entendemos onde a performance está sendo perdida."
- 4 passos em cards brancos (número em círculo laranja | título | descrição):
  1. **Conversa inicial** · Desafios, metas e modelo de operação.
  2. **Imersão em campo** · Lojas, equipes, processos e dados.
  3. **Mapa de oportunidades** · Priorizadas pelo impacto no resultado.
  4. **Plano de ação** · [I] Avaliação, diagnóstico, correção e acompanhamento. / [A] Serviços, indicadores e metas de acompanhamento.
- Faixa marinho: **SAÍDA: OPORTUNIDADES DE MAIOR IMPACTO, PRIORIZADAS**
- Botão **AGENDE UM DIAGNÓSTICO →**

#### 13. Blog na home (`LatestPosts.tsx`)
- Eyebrow **BLOG** · título **CONTEÚDO PARA QUEM** / **VIVE O PDV** · botão de contorno à direita: **VER TODOS OS ARTIGOS** (`/blog`)
- Os 3 artigos mais recentes no **layout da referência**: um card grande à esquerda (50% da largura, 440px de altura, foto de fundo com degradê marinho de baixo para cima, etiqueta laranja da categoria, data e título em branco) e dois itens à direita, empilhados e separados por uma linha (foto de 170px à esquerda; etiqueta, data e título à direita; o título fica laranja no hover).

#### 14. Contato (`Contact.tsx`, id `contato`)
Fundo marinho com brilho laranja radial no canto inferior esquerdo. Duas colunas.
- Esquerda: eyebrow **AGENDE UM DIAGNÓSTICO** · título branco **DIAGNOSTICAR. ESTRUTURAR.** / **DESENVOLVER. SUSTENTAR.** · texto "Conte o seu desafio. Respondemos rápido e marcamos uma conversa inicial para entender a sua operação." · lista com ícones em círculos translúcidos: (11) 91711-8101 · contato.vecgroup@gmail.com · @aceleratrade
- Direita: card branco com cantos de 20px e o formulário **"Fale com a Acelera Trade"** / "Preencha e continue a conversa direto no WhatsApp."
  - Campos: Nome* · Empresa* · "Sua empresa é" (select: Indústria, Agência de trade marketing, Varejo, Outro; pré-selecionado conforme o público ativo) · Cargo · "Qual é o seu principal desafio hoje?" (textarea, placeholder "Ex.: alta rotatividade de promotores, ruptura, reports das agências...")
  - Botão laranja de largura total **ENVIAR PELO WHATSAPP →**
  - Texto pequeno: "Ou escreva para contato.vecgroup@gmail.com"
  - Ao enviar, abra o WhatsApp com a mensagem montada: "Olá! Quero agendar um diagnóstico com a Acelera Trade.\nNome: …\nEmpresa: … (tipo)\nCargo: …\nDesafio: …" (na Parte 2 os dados também passam a ser gravados)

### Rodapé (`Footer.tsx`)
Fundo `#14213D`, texto branco 70%. Quatro colunas:
- Logo negativo · "Consultoria de Performance em Trade Marketing para indústrias e agências. Do BKO ao PDV." · em laranja, caixa alta: "DIAGNOSTICAR. ESTRUTURAR. / DESENVOLVER. SUSTENTAR."
- **SERVIÇOS**: Onboarding Visionário · Acelera Merchandising · Liderança de campo · Formulários de coleta · Estruturação de BKO · Relatórios de alta performance
- **NAVEGAÇÃO**: Quem somos · Clientes atendidos · Para indústrias · Para agências · Fundador · Blog
- **FALE CONOSCO**: telefone, e-mail e Instagram, com ícones laranja
- Linha inferior: "© {ano} Acelera Trade. Todos os direitos reservados." · "Do BKO ao PDV."

---

### Blog

- Dados em `src/data/posts.ts` (tipo `Post`: `id`, `categoria`, `titulo`, `resumo`, `autor`, `data` AAAA-MM-DD, `imagem`, `conteudo: string[]`). No conteúdo, a linha que começa com `## ` vira subtítulo H2, `- ` vira item de lista, `> ` vira citação em destaque e a linha que começa com `Fonte` vai para o rodapé do artigo. Ordenar do mais recente para o mais antigo.
- **`/blog`**: cabeçalho da página em fundo `#F3F5F8` (breadcrumb "Início / Blog", eyebrow **BLOG ACELERA TRADE**, título **CONTEÚDO PARA QUEM** / **VIVE O PDV**, texto "Execução, pessoas, processos e governança em trade marketing. Do BKO ao PDV."). Abaixo, o mesmo layout de 1 artigo grande + 2 menores, com **3 artigos por página** e paginação por botões redondos (`?pagina=2`; o botão ativo fica marinho cheio).
- **`/blog/:id`**: duas colunas (1fr | 340px).
  - Artigo: breadcrumb "Início / Blog / {categoria}", etiqueta da categoria, H1 (Montserrat 800), data e autor, foto de capa (440px, cantos de 20px) e conteúdo em Inter 17px com line-height 1,75. Citações ficam em caixa cinza com borda laranja à esquerda e marcadores de lista em laranja. Depois vêm a fonte e os botões redondos de compartilhar (WhatsApp, LinkedIn, e-mail e copiar link).
  - Lateral fixa: card marinho com ícone de lupa em círculo laranja, **TUDO COMEÇA POR UM DIAGNÓSTICO**, o texto "Entendemos onde a performance da sua operação está sendo perdida e priorizamos as oportunidades de maior impacto." e o botão **AGENDE UM DIAGNÓSTICO**; abaixo, uma caixa "LEIA TAMBÉM" com os outros 4 artigos.
  - Artigo inexistente: mostre "Artigo não encontrado" e um botão "Voltar para o blog".
- Os 6 artigos (texto completo) estão no **Anexo A** no fim deste prompt.

### SEO e acessibilidade

- `title`: "Acelera Trade | Consultoria de Performance em Trade Marketing"
- `description`: "Consultoria de Performance em Trade Marketing para indústrias e agências. Diagnosticar, estruturar, desenvolver e sustentar a execução no PDV. Do BKO ao PDV."
- Open Graph com `quem-somos-promotora.jpg`. Em cada artigo, `title` = "{título} | Acelera Trade" e `description` = resumo.
- Favicon: raio laranja (lucide Zap) sobre um quadrado marinho com cantos de 7px, em SVG.
- Contraste AA, foco visível (anel laranja de 2px), `alt` descritivo em todas as fotos, `aria-label` nos botões de ícone, navegação por teclado no mega menu e na gaveta, `lang="pt-BR"`.
- Mobile-first, sem rolagem horizontal. Valide a 375px: hero empilhado (texto e depois a foto), cards e tabelas empilhados, método em 2 colunas, rodapé em 1 coluna.

---

## PARTE 2: Supabase (formulário de contato)

Conecte o Supabase e grave cada envio do formulário de contato antes de abrir o WhatsApp.

1. Crie a tabela `leads`:
   - `id uuid primary key default gen_random_uuid()`
   - `created_at timestamptz default now()`
   - `nome text not null`, `empresa text not null`, `tipo_empresa text`, `cargo text`, `desafio text`
   - `publico text` (valor do seletor: industrias ou agencias)
   - `origem text default 'site-contato'`, `pagina text` (URL de onde veio)
2. RLS ativada: permitir apenas `insert` para `anon`; leitura só para usuários autenticados (equipe).
3. No envio: valide os campos (nome e empresa obrigatórios, até 120 caracteres; desafio até 1.000) e faça o `insert`. Se der certo, abra o WhatsApp com a mensagem montada e mostre um toast "Recebemos seus dados! Continue a conversa no WhatsApp.". Se o Supabase falhar, abra o WhatsApp mesmo assim e registre o erro no console.
4. Proteção simples contra spam: campo "honeypot" escondido e bloqueio de reenvio por 30 segundos.
5. `[CONFIRMAR]` Se quiser receber um e-mail a cada novo contato, crie uma Edge Function que envia um aviso para contato.vecgroup@gmail.com.

---

## Anexo A: Artigos do blog (conteúdo completo para `src/data/posts.ts`)

Use exatamente estes textos. Imagens em `/images/`.

### 1. Ruptura na gôndola: o custo invisível que aparece no sell-out

- **id:** `ruptura-na-gondola`
- **categoria:** Execução no PDV
- **data:** 2026-10-06
- **autor:** Equipe Acelera Trade
- **imagem:** `/images/blog-ruptura.jpg`
- **resumo:** Em julho de 2026, 10,8% dos itens estavam em falta nos supermercados. Entenda por que a ruptura é, quase sempre, um problema de execução.

**conteudo:**

    Produto que não está na gôndola não vende. Parece óbvio, mas a ruptura continua sendo um dos maiores ralos de resultado da indústria: segundo o Índice de Ruptura da Neogrid, 10,8% dos itens estavam em falta nas gôndolas dos supermercados em julho de 2026.
    E o momento em que isso pesa é justamente o mais importante: 76% das decisões de compra no supermercado acontecem no ponto de venda. Se o shopper não encontra o produto, ele troca de marca, de tamanho ou simplesmente não compra.
    ## Ruptura raramente é só abastecimento
    Quando olhamos de perto, boa parte da ruptura nasce no campo, e não no centro de distribuição:
    - Produto no estoque da loja, mas não na gôndola;
    - Promotor que ainda não conhece o padrão da marca;
    - Roteiro que não garante a frequência certa de visita;
    - Coleta que registra a visita, mas não mostra a falta.
    > A venda é decidida na gôndola. E a gôndola, pelo seu campo.
    ## Por onde começar
    O primeiro passo é medir do jeito certo. Formulários de coleta de Loja Perfeita bem desenhados mostram a ruptura loja a loja, de forma comparável. A partir daí, o plano de ação conecta roteiro, treinamento e reposição ao indicador que importa: produto disponível para o shopper.
    Fontes: Neogrid, Índice de Ruptura jul/2026 (via Mercado&Consumo); POPAI, Consumer Engagement Study (via Meio & Mensagem).

### 2. Onboarding de promotores: por que treinamento não é evento

- **id:** `onboarding-de-promotores`
- **categoria:** Pessoas
- **data:** 2026-09-29
- **autor:** Equipe Acelera Trade
- **imagem:** `/images/blog-onboarding.jpg`
- **resumo:** Um onboarding bem estruturado aumenta em 82% a retenção de novos colaboradores. Veja como levar isso para a rotina do campo.

**conteudo:**

    A rotatividade de promotores é um dos problemas mais caros do trade marketing. Substituir quem sai custa de 0,5 a 2 vezes o salário anual, e mais da metade dessas saídas poderia ter sido evitada.
    Enquanto isso, a loja é atendida por quem ainda não conhece o padrão da marca. O resultado aparece em ruptura, execução irregular e retrabalho.
    ## O que muda com um bom onboarding
    Pesquisas do Brandon Hall Group mostram que um onboarding bem estruturado aumenta em 82% a retenção de novos colaboradores. No campo, isso significa:
    - Promotor que chega à loja sabendo o padrão, a marca e o porquê do trabalho;
    - Menos saídas nos primeiros meses;
    - Produtividade mais cedo;
    - Relação melhor com a equipe da loja.
    > Treinamento não é evento. É parte da estratégia de performance: conhecimento que vira comportamento e execução.
    ## Onboarding Visionário
    No Onboarding Visionário da Acelera Trade, a integração é desenhada para a realidade do PDV: padrão de execução, técnica de merchandising, propósito do trabalho e acompanhamento nas primeiras semanas.
    Fontes: Brandon Hall Group (citado pela ABRH-PR / Gazeta do Povo); Gallup, “This Fixable Problem Costs U.S. Businesses $1 Trillion” (2019).

### 3. Liderança de campo: o supervisor é quem segura (ou derruba) o time

- **id:** `lideranca-de-campo`
- **categoria:** Pessoas
- **data:** 2026-09-22
- **autor:** Equipe Acelera Trade
- **imagem:** `/images/blog-lideranca.jpg`
- **resumo:** 70% da variação no engajamento de uma equipe vem do gestor direto. O que um supervisor preparado faz diferente no dia a dia.

**conteudo:**

    Segundo o Gallup, 70% da variação no engajamento de uma equipe vem do gestor direto. No trade marketing, esse gestor é o supervisor de campo, e muitas vezes ele foi promovido por ser um bom promotor, sem nunca ter sido preparado para liderar.
    Quando isso acontece, ninguém corrige a rota no dia a dia. A execução fica irregular entre lojas e regiões, e o problema chega ao cliente antes de chegar ao gestor.
    ## A rotina de um líder de campo preparado
    - Visita com objetivo: cada passagem pela loja tem um foco claro;
    - Feedback no momento certo, com base no padrão de execução;
    - Leitura de indicadores para priorizar lojas e pessoas;
    - Correção de rota antes de o problema virar perda de venda.
    > Supervisor despreparado derruba o time. Supervisor preparado multiplica o resultado.
    ## Do promotor ao gerente
    O programa de Liderança de campo da Acelera Trade trabalha supervisores, coordenadores e gerentes com rotina de gestão, feedback e correção de rota.
    Fonte: Gallup, “Managers Account for 70% of Variance in Employee Engagement” (2015).

### 4. Auditoria de agências: você está pagando pelo que foi executado?

- **id:** `auditoria-de-agencias`
- **categoria:** Governança
- **data:** 2026-09-15
- **autor:** Equipe Acelera Trade
- **imagem:** `/images/blog-auditoria.jpg`
- **resumo:** Relatório com check-in e foto não prova execução. Como a indústria pode ter governança sobre a operação terceirizada.

**conteudo:**

    Terceirizar a execução no PDV é uma decisão comum e muitas vezes acertada. O risco está em perder a visibilidade sobre o que realmente acontece na loja.
    Quando cada agência entrega um relatório diferente, focado em check-in e foto, a indústria enxerga atividade, não execução. E corre o risco de pagar por um serviço que não foi entregue.
    ## O que uma boa governança inclui
    - Auditoria de agências: contratado x executado, com visão independente;
    - Auditoria de execução no PDV: desvios e pontos críticos, loja a loja;
    - Padrão de reports: todas as agências no mesmo formato;
    - Rituais de performance: reuniões, painéis e planos de ação.
    > Você paga pela execução. A governança mostra se ela está acontecendo.
    ## Resultado
    Com padrão e acompanhamento, a conversa com as agências deixa de ser sobre volume de visitas e passa a ser sobre resultado na gôndola. O efeito é mais eficiência no investimento em trade.

### 5. Reports que mostram valor: como a agência sai da disputa só por preço

- **id:** `reports-que-mostram-valor`
- **categoria:** Agências
- **data:** 2026-09-08
- **autor:** Equipe Acelera Trade
- **imagem:** `/images/blog-reports.jpg`
- **resumo:** Quando o cliente enxerga custo e não resultado, o contrato vira leilão. A metodologia de reports muda essa conversa.

**conteudo:**

    Toda agência de trade marketing já viveu isso: a operação entrega, mas na renovação o cliente compara apenas o preço. O problema, na maioria das vezes, está no report.
    Relatórios que mostram só atividade (lojas visitadas, fotos, check-ins) fazem o cliente enxergar custo. Relatórios que mostram resultado fazem o cliente enxergar valor.
    ## O que um report de alta performance mostra
    - Execução: padrão de Loja Perfeita atingido, loja a loja;
    - Evolução: o que melhorou desde o último ciclo;
    - Problemas e ações: o que foi encontrado e o que já foi resolvido;
    - SLA: cumprimento de roteiro e prazos, sem glosa.
    > A agência mantém o cliente. Nós ampliamos a entrega.
    ## Report como argumento de venda
    Com uma metodologia de reports bem construída, o mesmo material que sustenta a renovação vira diferencial na concorrência. A agência chega à próxima proposta com resultado comprovado, e não com discurso.

### 6. Roteirização: mais lojas atendidas com o mesmo time

- **id:** `roteirizacao-produtividade`
- **categoria:** Processos e dados
- **data:** 2026-09-01
- **autor:** Equipe Acelera Trade
- **imagem:** `/images/blog-roteirizacao.jpg`
- **resumo:** Roteiros mal dimensionados geram deslocamento demais e loja de menos. Como ganhar produtividade sem aumentar a equipe.

**conteudo:**

    Na operação de campo, tempo de deslocamento é tempo fora da gôndola. Roteiros montados sem critério fazem o promotor rodar mais e atender menos, e algumas lojas ficam sem visita na frequência certa.
    ## Sinais de que o roteiro precisa de revisão
    - Muito tempo em trânsito entre lojas;
    - Lojas importantes visitadas com a mesma frequência que lojas pequenas;
    - Cumprimento de roteiro baixo e absenteísmo alto;
    - Custo por visita acima do esperado.
    ## Como funciona a roteirização
    A roteirização cruza localização, potencial de cada loja e tempo de execução necessário para definir a frequência e a sequência ideais de visita.
    > Mais lojas atendidas com o mesmo time e menos deslocamento.
    Para a indústria, isso significa presença e disponibilidade do produto. Para a agência, custo por visita menor e uma proposta mais competitiva.

---

## O que subir no Lovable

Coloque estas imagens em `public/images/`. Elas estão no arquivo `lovable-imagens-acelera-trade.zip`, já com estes nomes. Todas as fotos são do Unsplash, com uso comercial gratuito.

| Arquivo | Onde aparece |
|---|---|
| `quem-somos-promotora.jpg` | Quem somos (promotora repondo produtos) |
| `shopper-gondola.jpg` | Onde o jogo é decidido (consumidora com cesta) |
| `gondola-vazia.jpg` | Fundo do "Custo invisível" |
| `planejamento.jpg` | Processos e dados |
| `auditoria-campo.jpg` | Por público, indústrias |
| `equipe-reuniao.jpg` | Por público, agências |
| `imersao-campo.jpg` | Próximo passo |
| `blog-ruptura.jpg`, `blog-onboarding.jpg`, `blog-lideranca.jpg`, `blog-auditoria.jpg`, `blog-reports.jpg`, `blog-roteirizacao.jpg` | Capas dos artigos |
| `thiago-arcanjo-800.webp` | Foto do fundador (suba a sua foto oficial com este nome) |

Também configure:
- **`VITE_BRANDFETCH_CLIENT_ID`** nas variáveis de ambiente do Lovable (crie a chave grátis em brandfetch.com/developers), para o mural de logos.
- **Supabase** conectado ao projeto (Parte 2).

## Lacunas `[CONFIRMAR]`

1. **Anos de experiência do fundador:** a apresentação diz 17+; o perfil anterior dizia 8+. Use um número só no site inteiro (selo do "Quem somos" e seção do fundador).
2. **Grafia do nome:** Thiago **Archanjo** (como está na apresentação) ou **Arcanjo**.
3. **Lista de clientes** do carrossel de logos, e se pode exibir as marcas.
4. **Dado de 57%** (promotores sem onboarding): só incluir com a fonte confirmada.
5. **E-mail de contato:** manter contato.vecgroup@gmail.com ou criar um com domínio próprio (ex.: contato@aceleratrade.com.br).
6. **Artigos do blog:** são um ponto de partida, assinados como "Equipe Acelera Trade". Revisar antes de publicar.
7. **Aviso por e-mail** a cada novo contato (Edge Function opcional da Parte 2).
