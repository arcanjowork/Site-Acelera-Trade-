// Base de notícias do site. Para publicar uma nova notícia, adicione um objeto no topo da lista.
// "id" vira a URL: noticia.html?id=<id>
const NOTICIAS = [
  {
    id: "acelera-trade-novos-planos-2026",
    categoria: "Acelera Trade",
    titulo: "Acelera Trade lança novos planos de avaliação com metas mais flexíveis",
    resumo: "Traders agora podem escolher entre três modalidades de avaliação, com drawdown diário ajustado e saque a partir do primeiro ciclo.",
    autor: "Equipe Acelera",
    data: "2026-10-06",
    leitura: 5,
    destaque: true,
    conteudo: [
      "A Acelera Trade anunciou nesta semana uma reformulação completa dos seus planos de avaliação. O objetivo é tornar o caminho até a conta financiada mais claro e acessível para traders de todos os níveis.",
      "## O que muda",
      "Os novos planos contam com metas de lucro revisadas, drawdown diário mais justo e a possibilidade de solicitar o primeiro saque logo após o primeiro ciclo de operações na conta real.",
      "- Plano Start: ideal para quem está começando no mini-índice e mini-dólar;",
      "- Plano Pro: maior alavancagem e limite de contratos ampliado;",
      "- Plano Elite: divisão de lucros de até 90% para o trader.",
      "> Queremos que o trader se preocupe apenas com uma coisa: operar bem. O resto, a Acelera resolve.",
      "## Como participar",
      "Os novos planos já estão disponíveis na plataforma. Traders que estão em avaliação podem migrar sem custo adicional até o fim do mês."
    ]
  },
  {
    id: "copom-juros-mercado-futuro",
    categoria: "Mercado",
    titulo: "Copom mantém a Selic e mercado futuro reage com volatilidade no mini-índice",
    resumo: "Decisão já era esperada, mas o tom do comunicado mexeu com os DIs e trouxe oportunidades para quem opera intraday.",
    autor: "Rafael Costa",
    data: "2026-10-03",
    leitura: 4,
    conteudo: [
      "O Comitê de Política Monetária decidiu manter a taxa básica de juros, em linha com a expectativa da maior parte dos analistas. Ainda assim, o comunicado trouxe sinais que movimentaram a curva de juros.",
      "## Reação do mercado",
      "O mini-índice abriu o pregão seguinte com gap e registrou uma das maiores amplitudes do mês. Para o trader de day trade, dias como esse exigem disciplina redobrada com stop e gerenciamento de risco.",
      "> Em dias de decisão de juros, o melhor trade muitas vezes é esperar o mercado mostrar a direção.",
      "## O que observar",
      "- Comportamento dos DIs de vencimento curto;",
      "- Fluxo estrangeiro na abertura;",
      "- Correlação entre dólar futuro e índice."
    ]
  },
  {
    id: "gerenciamento-de-risco-day-trade",
    categoria: "Educação",
    titulo: "Gerenciamento de risco: as 5 regras que separam traders aprovados dos reprovados",
    resumo: "Analisamos centenas de avaliações e encontramos os padrões de quem conquista a conta financiada. Veja o que eles fazem diferente.",
    autor: "Mariana Lopes",
    data: "2026-09-29",
    leitura: 7,
    conteudo: [
      "Depois de acompanhar centenas de traders nas avaliações da Acelera Trade, nossa equipe identificou comportamentos que se repetem entre os aprovados.",
      "## 1. Risco fixo por operação",
      "Os aprovados raramente arriscam mais de 1% do limite de perda em uma única operação.",
      "## 2. Limite diário respeitado",
      "Bater o limite de perda do dia e parar é a regra mais simples — e a mais ignorada.",
      "## 3. Poucas operações, bem escolhidas",
      "Overtrading é o principal motivo de reprovação. Qualidade vence quantidade.",
      "## 4. Diário de trade",
      "Registrar cada entrada, saída e emoção ajuda a identificar erros recorrentes.",
      "## 5. Consistência acima de tudo",
      "> Não é sobre o dia em que você ganhou muito. É sobre os vinte dias em que você não perdeu muito."
    ]
  },
  {
    id: "trader-financiado-historia",
    categoria: "Traders",
    titulo: "De professor a trader financiado: a trajetória de Lucas na Acelera Trade",
    resumo: "Depois de duas tentativas, Lucas foi aprovado no Plano Pro e já realizou três saques. Ele conta o que mudou na sua forma de operar.",
    autor: "Equipe Acelera",
    data: "2026-09-24",
    leitura: 6,
    conteudo: [
      "Lucas dava aulas de matemática em Belo Horizonte quando começou a estudar o mercado financeiro nas horas vagas. Três anos depois, ele opera uma conta financiada pela Acelera Trade.",
      "## As primeiras tentativas",
      "Nas duas primeiras avaliações, Lucas bateu a meta de lucro, mas estourou o drawdown diário em dias de alta volatilidade.",
      "> Eu sabia operar. O que eu não sabia era parar.",
      "## A virada",
      "Na terceira tentativa, ele reduziu o número de contratos, passou a operar apenas na primeira hora do pregão e criou um checklist antes de cada entrada. Resultado: aprovação em 14 dias úteis."
    ]
  },
  {
    id: "dolar-futuro-cenario-externo",
    categoria: "Mercado",
    titulo: "Dólar futuro: o que o cenário externo indica para as próximas semanas",
    resumo: "Payroll, inflação americana e discurso do Fed devem ditar o ritmo do câmbio. Confira os níveis técnicos acompanhados pela mesa.",
    autor: "Rafael Costa",
    data: "2026-09-19",
    leitura: 5,
    conteudo: [
      "O dólar futuro segue sensível aos dados da economia americana. Nas próximas semanas, a agenda de indicadores nos EUA deve concentrar a atenção dos traders.",
      "## Agenda que importa",
      "- Payroll (relatório de emprego);",
      "- CPI (inflação ao consumidor);",
      "- Ata e discursos de membros do Fed.",
      "## Leitura técnica",
      "A mesa acompanha as regiões de suporte e resistência formadas no último mês. Rompimentos com volume tendem a gerar movimentos direcionais mais longos."
    ]
  },
  {
    id: "plataforma-profit-integracao",
    categoria: "Acelera Trade",
    titulo: "Nova integração com plataformas de mercado agiliza o início das avaliações",
    resumo: "Agora o trader recebe as credenciais da conta de avaliação em poucos minutos após a confirmação do pagamento.",
    autor: "Equipe Acelera",
    data: "2026-09-15",
    leitura: 3,
    conteudo: [
      "A Acelera Trade concluiu a integração automatizada com as principais plataformas de negociação utilizadas pelos traders brasileiros.",
      "## O que melhora",
      "O processo que antes levava até um dia útil agora acontece em minutos. Assim que o pagamento é confirmado, o trader recebe por e-mail os dados de acesso.",
      "> Menos burocracia, mais tempo de tela."
    ]
  },
  {
    id: "psicologia-trading-ansiedade",
    categoria: "Educação",
    titulo: "Psicologia no trading: como lidar com a ansiedade depois de um stop",
    resumo: "O stop faz parte do jogo, mas a reação a ele pode definir o resultado do mês. Especialistas dão dicas práticas.",
    autor: "Mariana Lopes",
    data: "2026-09-10",
    leitura: 6,
    conteudo: [
      "Todo trader toma stop. A diferença entre os consistentes e os demais está no que acontece nos minutos seguintes.",
      "## Evite o trade de vingança",
      "Tentar recuperar a perda imediatamente é uma das armadilhas mais comuns. Defina uma pausa obrigatória após cada stop.",
      "## Respiração e rotina",
      "Técnicas simples de respiração e uma rotina pré-pregão ajudam a manter a mente no processo, e não no resultado.",
      "> O mercado não sabe que você perdeu. Ele não te deve nada."
    ]
  },
  {
    id: "ranking-traders-setembro",
    categoria: "Traders",
    titulo: "Ranking de setembro: conheça os traders mais consistentes do mês",
    resumo: "Os destaques foram escolhidos pelo índice de consistência, que combina retorno, drawdown e regularidade das operações.",
    autor: "Equipe Acelera",
    data: "2026-10-01",
    leitura: 4,
    conteudo: [
      "Todo mês a Acelera Trade destaca os traders que melhor combinaram resultado e controle de risco.",
      "## Como o ranking é calculado",
      "O índice de consistência leva em conta o retorno no período, o maior drawdown e a distribuição dos resultados ao longo dos dias.",
      "## Premiação",
      "Os três primeiros colocados recebem upgrade de conta e uma mentoria individual com a equipe de risco."
    ]
  },
  {
    id: "mini-indice-estrategias-abertura",
    categoria: "Educação",
    titulo: "Mini-índice na abertura: três estratégias para os primeiros 30 minutos",
    resumo: "A abertura concentra volume e volatilidade. Veja como estruturar entradas com risco controlado nesse período.",
    autor: "Rafael Costa",
    data: "2026-09-05",
    leitura: 8,
    conteudo: [
      "Os primeiros minutos do pregão costumam oferecer as melhores oportunidades — e os maiores riscos.",
      "## 1. Rompimento do range inicial",
      "Marque a máxima e a mínima dos primeiros cinco minutos e aguarde o rompimento com volume.",
      "## 2. Retorno ao ajuste",
      "Em dias de gap, o preço frequentemente busca o ajuste do dia anterior.",
      "## 3. Pullback na média",
      "Em tendência definida, correções até a média curta podem oferecer entradas com stop curto.",
      "> Nenhuma estratégia funciona sem gestão de risco. Defina o stop antes de clicar."
    ]
  },
  {
    id: "acelera-trade-evento-sao-paulo",
    categoria: "Eventos",
    titulo: "Acelera Trade Day reúne traders em São Paulo para um dia de imersão",
    resumo: "O evento presencial terá painéis sobre gestão de risco, operação ao vivo e networking com traders financiados.",
    autor: "Equipe Acelera",
    data: "2026-08-28",
    leitura: 3,
    conteudo: [
      "A Acelera Trade realiza em novembro o seu primeiro grande evento presencial, em São Paulo.",
      "## Programação",
      "- Painel: o que aprendemos com mil avaliações;",
      "- Operação ao vivo com traders financiados;",
      "- Workshop de psicologia do trading;",
      "- Networking e happy hour.",
      "## Inscrições",
      "As vagas são limitadas e traders com conta financiada têm acesso gratuito."
    ]
  },
  {
    id: "ibovespa-temporada-balancos",
    categoria: "Mercado",
    titulo: "Temporada de balanços: setores que podem mexer com o Ibovespa",
    resumo: "Bancos, commodities e varejo concentram as atenções. Entenda o impacto potencial no índice e nos contratos futuros.",
    autor: "Rafael Costa",
    data: "2026-08-22",
    leitura: 5,
    conteudo: [
      "A temporada de resultados trimestrais costuma trazer volatilidade extra para o Ibovespa e, consequentemente, para o mini-índice.",
      "## Pesos pesados",
      "Bancos e empresas de commodities têm grande participação no índice. Surpresas nesses balanços tendem a mover o mercado como um todo.",
      "## Para o day trader",
      "Atenção aos horários de divulgação e às teleconferências, que podem gerar movimentos bruscos durante o pregão."
    ]
  },
  {
    id: "webinar-mesa-proprietaria",
    categoria: "Eventos",
    titulo: "Webinar gratuito: como funciona uma mesa proprietária no Brasil",
    resumo: "Uma aula ao vivo para tirar todas as dúvidas sobre avaliação, conta financiada, divisão de lucros e saques.",
    autor: "Mariana Lopes",
    data: "2026-08-15",
    leitura: 2,
    conteudo: [
      "Ainda tem dúvidas sobre como funciona uma mesa proprietária? Este webinar foi feito para você.",
      "## O que vamos abordar",
      "- O que é e como funciona a avaliação;",
      "- Regras de drawdown e metas;",
      "- Como são feitos os saques;",
      "- Perguntas ao vivo.",
      "> A inscrição é gratuita e a gravação fica disponível para os inscritos."
    ]
  }
];
