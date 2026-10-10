// Artigos do blog. Para publicar um novo, adicione um objeto à lista.
// "id" vira a URL: noticia.html?id=<id>. A lista é ordenada pela data (mais recente primeiro).
// No conteúdo: "## " vira subtítulo, "- " vira item de lista e "> " vira citação.
const NOTICIAS = [
  {
    id: "ruptura-na-gondola",
    categoria: "Execução no PDV",
    titulo: "Ruptura na gôndola: o custo invisível que aparece no sell-out",
    resumo: "Em julho de 2026, 10,8% dos itens estavam em falta nos supermercados. Entenda por que a ruptura é, quase sempre, um problema de execução.",
    autor: "Equipe Acelera Trade",
    data: "2026-10-06",
    imagem: "img/blog-ruptura.jpg",
    conteudo: [
      "Produto que não está na gôndola não vende. Parece óbvio, mas a ruptura continua sendo um dos maiores ralos de resultado da indústria: segundo o Índice de Ruptura da Neogrid, 10,8% dos itens estavam em falta nas gôndolas dos supermercados em julho de 2026.",
      "E o momento em que isso pesa é justamente o mais importante: 76% das decisões de compra no supermercado acontecem no ponto de venda. Se o shopper não encontra o produto, ele troca de marca, de tamanho ou simplesmente não compra.",
      "## Ruptura raramente é só abastecimento",
      "Quando olhamos de perto, boa parte da ruptura nasce no campo, e não no centro de distribuição:",
      "- Produto no estoque da loja, mas não na gôndola;",
      "- Promotor que ainda não conhece o padrão da marca;",
      "- Roteiro que não garante a frequência certa de visita;",
      "- Coleta que registra a visita, mas não mostra a falta.",
      "> A venda é decidida na gôndola. E a gôndola, pelo seu campo.",
      "## Por onde começar",
      "O primeiro passo é medir do jeito certo. Formulários de coleta de Loja Perfeita bem desenhados mostram a ruptura loja a loja, de forma comparável. A partir daí, o plano de ação conecta roteiro, treinamento e reposição ao indicador que importa: produto disponível para o shopper.",
      "Fontes: Neogrid, Índice de Ruptura jul/2026 (via Mercado&Consumo); POPAI, Consumer Engagement Study (via Meio & Mensagem)."
    ]
  },
  {
    id: "onboarding-de-promotores",
    categoria: "Pessoas",
    titulo: "Onboarding de promotores: por que treinamento não é evento",
    resumo: "Um onboarding bem estruturado aumenta em 82% a retenção de novos colaboradores. Veja como levar isso para a rotina do campo.",
    autor: "Equipe Acelera Trade",
    data: "2026-09-29",
    imagem: "img/blog-onboarding.jpg",
    conteudo: [
      "A rotatividade de promotores é um dos problemas mais caros do trade marketing. Substituir quem sai custa de 0,5 a 2 vezes o salário anual, e mais da metade dessas saídas poderia ter sido evitada.",
      "Enquanto isso, a loja é atendida por quem ainda não conhece o padrão da marca. O resultado aparece em ruptura, execução irregular e retrabalho.",
      "## O que muda com um bom onboarding",
      "Pesquisas do Brandon Hall Group mostram que um onboarding bem estruturado aumenta em 82% a retenção de novos colaboradores. No campo, isso significa:",
      "- Promotor que chega à loja sabendo o padrão, a marca e o porquê do trabalho;",
      "- Menos saídas nos primeiros meses;",
      "- Produtividade mais cedo;",
      "- Relação melhor com a equipe da loja.",
      "> Treinamento não é evento. É parte da estratégia de performance: conhecimento que vira comportamento e execução.",
      "## Onboarding Visionário",
      "No Onboarding Visionário da Acelera Trade, a integração é desenhada para a realidade do PDV: padrão de execução, técnica de merchandising, propósito do trabalho e acompanhamento nas primeiras semanas.",
      "Fontes: Brandon Hall Group (citado pela ABRH-PR / Gazeta do Povo); Gallup, “This Fixable Problem Costs U.S. Businesses $1 Trillion” (2019)."
    ]
  },
  {
    id: "lideranca-de-campo",
    categoria: "Pessoas",
    titulo: "Liderança de campo: o supervisor é quem segura (ou derruba) o time",
    resumo: "70% da variação no engajamento de uma equipe vem do gestor direto. O que um supervisor preparado faz diferente no dia a dia.",
    autor: "Equipe Acelera Trade",
    data: "2026-09-22",
    imagem: "img/blog-lideranca.jpg",
    conteudo: [
      "Segundo o Gallup, 70% da variação no engajamento de uma equipe vem do gestor direto. No trade marketing, esse gestor é o supervisor de campo, e muitas vezes ele foi promovido por ser um bom promotor, sem nunca ter sido preparado para liderar.",
      "Quando isso acontece, ninguém corrige a rota no dia a dia. A execução fica irregular entre lojas e regiões, e o problema chega ao cliente antes de chegar ao gestor.",
      "## A rotina de um líder de campo preparado",
      "- Visita com objetivo: cada passagem pela loja tem um foco claro;",
      "- Feedback no momento certo, com base no padrão de execução;",
      "- Leitura de indicadores para priorizar lojas e pessoas;",
      "- Correção de rota antes de o problema virar perda de venda.",
      "> Supervisor despreparado derruba o time. Supervisor preparado multiplica o resultado.",
      "## Do promotor ao gerente",
      "O programa de Liderança de campo da Acelera Trade trabalha supervisores, coordenadores e gerentes com rotina de gestão, feedback e correção de rota.",
      "Fonte: Gallup, “Managers Account for 70% of Variance in Employee Engagement” (2015)."
    ]
  },
  {
    id: "auditoria-de-agencias",
    categoria: "Governança",
    titulo: "Auditoria de agências: você está pagando pelo que foi executado?",
    resumo: "Relatório com check-in e foto não prova execução. Como a indústria pode ter governança sobre a operação terceirizada.",
    autor: "Equipe Acelera Trade",
    data: "2026-09-15",
    imagem: "img/blog-auditoria.jpg",
    conteudo: [
      "Terceirizar a execução no PDV é uma decisão comum e muitas vezes acertada. O risco está em perder a visibilidade sobre o que realmente acontece na loja.",
      "Quando cada agência entrega um relatório diferente, focado em check-in e foto, a indústria enxerga atividade, não execução. E corre o risco de pagar por um serviço que não foi entregue.",
      "## O que uma boa governança inclui",
      "- Auditoria de agências: contratado x executado, com visão independente;",
      "- Auditoria de execução no PDV: desvios e pontos críticos, loja a loja;",
      "- Padrão de reports: todas as agências no mesmo formato;",
      "- Rituais de performance: reuniões, painéis e planos de ação.",
      "> Você paga pela execução. A governança mostra se ela está acontecendo.",
      "## Resultado",
      "Com padrão e acompanhamento, a conversa com as agências deixa de ser sobre volume de visitas e passa a ser sobre resultado na gôndola. O efeito é mais eficiência no investimento em trade."
    ]
  },
  {
    id: "reports-que-mostram-valor",
    categoria: "Agências",
    titulo: "Reports que mostram valor: como a agência sai da disputa só por preço",
    resumo: "Quando o cliente enxerga custo e não resultado, o contrato vira leilão. A metodologia de reports muda essa conversa.",
    autor: "Equipe Acelera Trade",
    data: "2026-09-08",
    imagem: "img/blog-reports.jpg",
    conteudo: [
      "Toda agência de trade marketing já viveu isso: a operação entrega, mas na renovação o cliente compara apenas o preço. O problema, na maioria das vezes, está no report.",
      "Relatórios que mostram só atividade (lojas visitadas, fotos, check-ins) fazem o cliente enxergar custo. Relatórios que mostram resultado fazem o cliente enxergar valor.",
      "## O que um report de alta performance mostra",
      "- Execução: padrão de Loja Perfeita atingido, loja a loja;",
      "- Evolução: o que melhorou desde o último ciclo;",
      "- Problemas e ações: o que foi encontrado e o que já foi resolvido;",
      "- SLA: cumprimento de roteiro e prazos, sem glosa.",
      "> A agência mantém o cliente. Nós ampliamos a entrega.",
      "## Report como argumento de venda",
      "Com uma metodologia de reports bem construída, o mesmo material que sustenta a renovação vira diferencial na concorrência. A agência chega à próxima proposta com resultado comprovado, e não com discurso."
    ]
  },
  {
    id: "roteirizacao-produtividade",
    categoria: "Processos e dados",
    titulo: "Roteirização: mais lojas atendidas com o mesmo time",
    resumo: "Roteiros mal dimensionados geram deslocamento demais e loja de menos. Como ganhar produtividade sem aumentar a equipe.",
    autor: "Equipe Acelera Trade",
    data: "2026-09-01",
    imagem: "img/blog-roteirizacao.jpg",
    conteudo: [
      "Na operação de campo, tempo de deslocamento é tempo fora da gôndola. Roteiros montados sem critério fazem o promotor rodar mais e atender menos, e algumas lojas ficam sem visita na frequência certa.",
      "## Sinais de que o roteiro precisa de revisão",
      "- Muito tempo em trânsito entre lojas;",
      "- Lojas importantes visitadas com a mesma frequência que lojas pequenas;",
      "- Cumprimento de roteiro baixo e absenteísmo alto;",
      "- Custo por visita acima do esperado.",
      "## Como funciona a roteirização",
      "A roteirização cruza localização, potencial de cada loja e tempo de execução necessário para definir a frequência e a sequência ideais de visita.",
      "> Mais lojas atendidas com o mesmo time e menos deslocamento.",
      "Para a indústria, isso significa presença e disponibilidade do produto. Para a agência, custo por visita menor e uma proposta mais competitiva."
    ]
  }
];
