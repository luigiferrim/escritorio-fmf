export type AreaItem = {
  h3: string;
  text: string;
};

export type AreaSection = {
  h2: string;
  paragraphs?: string[];
  items?: AreaItem[];
};

export type AreaFaq = {
  q: string;
  a: string;
};

export type Area = {
  slug: string;
  nome: string;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSub: string;
  intro: string[];
  sections: AreaSection[];
  faq: AreaFaq[];
  cta: {
    title: string;
    text: string;
    whatsappMessage: string;
  };
  related: { slug: string; label: string }[];
};

export const areas: Area[] = [
  {
    slug: "direito-trabalhista-patronal",
    nome: "Direito Trabalhista Patronal",
    cardDescription:
      "Defesa de empresas em reclamações trabalhistas, assessoria preventiva e consultoria em rotinas de RH em Lages e região.",
    metaTitle: "Advogado Trabalhista Patronal em Lages - SC",
    metaDescription:
      "Sua empresa recebeu uma reclamação trabalhista? Advocacia trabalhista patronal em Lages - SC com 25 anos de experiência, defesa e prevenção. (49) 3222-8979.",
    h1: "Advogado Trabalhista Patronal em Lages - SC",
    heroSub:
      "Defesa e assessoria preventiva para empregadores de Lages e da região serrana de Santa Catarina.",
    intro: [
      "Defender uma empresa na Justiça do Trabalho exige mais do que conhecer a CLT: exige estratégia, agilidade nos prazos e experiência prática no foro trabalhista. O Ferri, Maines & Fernandes atua há 25 anos ao lado de empregadores de Lages e da região serrana de Santa Catarina, em trabalho liderado pela Dra. Janaina Ferri Maines (OAB/SC 14.868), ex-Vice-Presidente da OAB Subseção de Lages.",
    ],
    sections: [
      {
        h2: "Como ajudamos sua empresa",
        items: [
          {
            h3: "Defesa em reclamações trabalhistas",
            text: "Elaboração de defesa, participação em audiências, recursos e acordos, com análise realista de riscos e orientação sobre provisionamento.",
          },
          {
            h3: "Assessoria preventiva",
            text: "Revisão de contratos de trabalho, regulamentos internos, políticas de jornada e banco de horas, terceirização e desligamentos, para reduzir o passivo antes que ele exista.",
          },
          {
            h3: "Consultoria em rotinas de RH",
            text: "Orientação contínua ao seu departamento pessoal em admissões, advertências, aplicação de justa causa e acordos.",
          },
          {
            h3: "Negociações coletivas",
            text: "Acompanhamento em acordos e convenções coletivas junto aos sindicatos da região.",
          },
        ],
      },
      {
        h2: "Por que empresas de Lages escolhem nossa assessoria",
        paragraphs: [
          "Atendemos empresas do comércio, da indústria, do agronegócio, da saúde e de serviços da serra catarinense. O trabalho é conduzido diretamente pela sócia responsável, com relatórios claros sobre cada processo e reuniões periódicas de alinhamento.",
          "Para empresas com demanda recorrente, oferecemos assessoria mensal com custo previsível, que funciona como um departamento jurídico trabalhista externo.",
        ],
      },
    ],
    faq: [
      {
        q: "Minha empresa foi citada em uma reclamação trabalhista. O que fazer primeiro?",
        a: "Não perca o prazo: a ausência na audiência pode gerar revelia e condenação automática. Reúna o contrato de trabalho, cartões-ponto, recibos e holerites do ex-empregado e procure um advogado trabalhista imediatamente.",
      },
      {
        q: "Vale a pena fazer acordo na Justiça do Trabalho?",
        a: "Depende do risco de condenação, das provas disponíveis e do custo do processo. Fazemos essa análise caso a caso, apresentando cenários e valores para que a empresa decida com segurança.",
      },
      {
        q: "O que é assessoria trabalhista preventiva?",
        a: "É o acompanhamento contínuo das rotinas da empresa, como contratações, jornada, demissões e terceirização, para corrigir irregularidades antes que virem processos. Costuma custar uma fração do valor de uma única condenação.",
      },
      {
        q: "Vocês atendem empresas fora de Lages?",
        a: "Sim. Atendemos empregadores de toda a região serrana e, com o processo eletrônico, atuamos em qualquer vara do trabalho de Santa Catarina.",
      },
    ],
    cta: {
      title: "Sua empresa precisa de defesa ou prevenção trabalhista?",
      text: "Fale com a nossa equipe pelo WhatsApp ou agende uma reunião pelo telefone (49) 3222-8979.",
      whatsappMessage:
        "Olá, preciso de atendimento em Direito Trabalhista para minha empresa.",
    },
    related: [
      { slug: "direito-empresarial", label: "Direito Empresarial" },
      { slug: "contratos-e-direito-civil", label: "Contratos e Direito Civil" },
    ],
  },
  {
    slug: "direito-medico",
    nome: "Direito Médico",
    cardDescription:
      "Defesa de médicos, dentistas e clínicas em processos judiciais, éticos (CRM) e administrativos em Lages e em toda Santa Catarina.",
    metaTitle: "Advogado Médico em Lages - SC",
    metaDescription:
      "Defesa de médicos, dentistas e clínicas em processos judiciais, sindicâncias do CRM e demandas administrativas. Mais de 20 anos de direito médico em Lages - SC.",
    h1: "Advogado Especialista em Direito Médico em Lages - SC",
    heroSub:
      "Defesa de médicos, profissionais da saúde e clínicas nas esferas cível, ética e administrativa.",
    intro: [
      "Um processo por suposto erro médico ameaça mais do que o patrimônio: ameaça a carreira e a reputação construídas ao longo de uma vida. O Dr. Rafael Maines (OAB/SC 9.118) atua há mais de 20 anos na defesa de médicos, profissionais da saúde e clínicas de Lages e de toda Santa Catarina, nas esferas cível, ética e administrativa.",
    ],
    sections: [
      {
        h2: "Atuação em Direito Médico e da Saúde",
        items: [
          {
            h3: "Defesa em ações de responsabilidade civil",
            text: "Defesa técnica em processos por suposto erro médico, com trabalho conjunto com assistentes técnicos e análise minuciosa de prontuários.",
          },
          {
            h3: "Sindicâncias e processos ético-profissionais (CRM e CRO)",
            text: "Acompanhamento desde a notificação inicial, que é a fase mais importante e também a mais negligenciada da defesa.",
          },
          {
            h3: "Consultoria preventiva para clínicas e consultórios",
            text: "Termos de consentimento informado, prontuários, contratos com convênios, publicidade médica e adequação à LGPD na saúde.",
          },
          {
            h3: "Contratos e sociedades médicas",
            text: "Constituição de clínicas, contratos entre sócios e contratos com hospitais e operadoras.",
          },
        ],
      },
      {
        h2: "Por que a defesa especializada faz diferença",
        paragraphs: [
          "Direito médico exige domínio de dois mundos: o jurídico e o técnico-assistencial. Saber ler um prontuário, formular quesitos periciais corretos e diferenciar obrigação de meio e de resultado é decisivo para o rumo do processo. É essa a experiência que o escritório acumulou em mais de duas décadas dedicadas à área.",
        ],
      },
    ],
    faq: [
      {
        q: "Fui citado em um processo por erro médico. O que faço primeiro?",
        a: "Não contate o paciente nem altere qualquer registro. Preserve o prontuário completo e procure imediatamente um advogado com experiência em direito médico. Os primeiros atos da defesa costumam definir o rumo do processo.",
      },
      {
        q: "Recebi uma notificação do CRM. Preciso de advogado?",
        a: "Sim, é altamente recomendável. A sindicância pode evoluir para processo ético-profissional com penas que vão de advertência à cassação. A defesa técnica desde o início aumenta as chances de arquivamento.",
      },
      {
        q: "Médico responde por qualquer resultado ruim?",
        a: "Não. Em regra, a obrigação do médico é de meio, não de resultado: responde-se por culpa comprovada (imprudência, negligência ou imperícia), não pelo insucesso do tratamento em si.",
      },
      {
        q: "Vocês atendem médicos de outras cidades?",
        a: "Sim. Com o processo eletrônico, defendemos profissionais da saúde em todo o estado de Santa Catarina, com reuniões por videochamada quando necessário.",
      },
    ],
    cta: {
      title: "Está respondendo a um processo ou sindicância?",
      text: "Fale com sigilo com a nossa equipe. Atendimento presencial em Lages ou por videochamada.",
      whatsappMessage:
        "Olá, sou profissional da saúde e preciso de atendimento em Direito Médico.",
    },
    related: [
      { slug: "contratos-e-direito-civil", label: "Contratos e Direito Civil" },
      { slug: "direito-empresarial", label: "Direito Empresarial" },
    ],
  },
  {
    slug: "direito-de-familia",
    nome: "Direito de Família",
    cardDescription:
      "Divórcio, guarda de filhos, pensão alimentícia, união estável e inventários, com atendimento reservado e humano.",
    metaTitle: "Advogado de Família em Lages - SC",
    metaDescription:
      "Advogada de família em Lages: divórcio, guarda de filhos, pensão alimentícia, união estável e inventário. Atendimento reservado e humano. (49) 3222-8979.",
    h1: "Advogado de Família em Lages - SC",
    heroSub:
      "Divórcio, guarda, pensão alimentícia, união estável e inventários, com atendimento reservado.",
    intro: [
      "Questões de família mexem com o que há de mais importante na vida: filhos, casa, patrimônio e recomeços. A Dra. Roberta Costa Fernandes (OAB/SC 14.869) atua desde 1999 no direito de família em Lages, com atendimento reservado, escuta atenta e a firmeza técnica que cada caso exige.",
    ],
    sections: [
      {
        h2: "Como atuamos no Direito de Família",
        items: [
          {
            h3: "Divórcio e dissolução de união estável",
            text: "Divórcio consensual ou litigioso, judicial ou em cartório, com orientação completa sobre partilha, filhos e pensão.",
          },
          {
            h3: "Guarda de filhos e convivência",
            text: "Guarda compartilhada ou unilateral, regulamentação de visitas e atuação em casos de alienação parental.",
          },
          {
            h3: "Pensão alimentícia",
            text: "Fixação, revisão, execução (cobrança) e exoneração de alimentos.",
          },
          {
            h3: "Inventário e partilha de bens",
            text: "Inventário judicial ou extrajudicial, testamentos e planejamento sucessório.",
          },
          {
            h3: "União estável e pactos",
            text: "Reconhecimento e dissolução de união estável, contratos de convivência e pacto antenupcial.",
          },
        ],
      },
      {
        h2: "Atendimento humano em um momento difícil",
        paragraphs: [
          "Cada família é única. Antes de qualquer petição, entendemos o seu momento e buscamos, sempre que possível, soluções consensuais, que são mais rápidas, mais baratas e menos desgastantes, principalmente quando há filhos. Quando o acordo não é possível, atuamos com firmeza na defesa dos seus interesses em juízo.",
        ],
      },
    ],
    faq: [
      {
        q: "Como funciona a guarda compartilhada?",
        a: "É a regra no Brasil desde 2014: ambos os pais dividem as decisões sobre a vida dos filhos, ainda que a residência principal fique com um deles. A convivência é organizada conforme a rotina da família.",
      },
      {
        q: "Como é calculada a pensão alimentícia?",
        a: "Não existe percentual fixo em lei. O valor considera as necessidades de quem recebe e as possibilidades de quem paga, o chamado binômio necessidade-possibilidade. Cada caso é analisado individualmente.",
      },
      {
        q: "Inventário precisa ser judicial?",
        a: "Não necessariamente. Havendo consenso entre herdeiros maiores e capazes, o inventário pode ser feito em cartório, de forma muito mais rápida. Orientamos qual caminho serve ao seu caso.",
      },
      {
        q: "A primeira conversa é sigilosa?",
        a: "Sim, totalmente. Tudo o que for tratado está protegido pelo sigilo profissional do advogado, independentemente de contratação.",
      },
    ],
    cta: {
      title: "Converse com sigilo sobre o seu caso",
      text: "Chame no WhatsApp ou agende uma consulta presencial em Lages. Atendimento reservado.",
      whatsappMessage:
        "Olá, gostaria de uma consulta sobre Direito de Família.",
    },
    related: [{ slug: "divorcio", label: "Divórcio" }],
  },
  {
    slug: "divorcio",
    nome: "Divórcio",
    cardDescription:
      "Divórcio consensual em cartório ou judicial, partilha de bens, guarda e pensão, com orientação desde a primeira conversa.",
    metaTitle: "Advogado de Divórcio em Lages - SC",
    metaDescription:
      "Precisa de advogado para divórcio em Lages? Divórcio consensual em cartório ou judicial, partilha de bens, guarda e pensão. Atendimento reservado. (49) 3222-8979.",
    h1: "Advogado de Divórcio em Lages - SC",
    heroSub:
      "Divórcio consensual ou litigioso, com orientação clara sobre partilha, filhos e pensão.",
    intro: [
      "O divórcio pode ser mais simples do que parece, ou mais complexo do que deveria quando mal conduzido. Em Lages, a equipe do Ferri, Maines & Fernandes orienta você desde a primeira conversa: qual modalidade cabe no seu caso, quanto tempo leva e o que acontece com os bens, os filhos e a pensão.",
    ],
    sections: [
      {
        h2: "Divórcio consensual: rápido e em cartório",
        paragraphs: [
          "Quando o casal está de acordo, não há filhos menores ou incapazes e a partilha está definida, o divórcio pode ser feito em cartório, por escritura pública, em poucos dias. A lei exige a presença de advogado, e um bom acordo redigido hoje evita processos amanhã.",
        ],
      },
      {
        h2: "Divórcio litigioso: quando não há acordo",
        paragraphs: [
          "Se um dos cônjuges não concorda com os termos de partilha, guarda ou pensão, o divórcio segue pela via judicial. Importante: ninguém é obrigado a permanecer casado. O divórcio em si não depende da concordância do outro; o que se discute em juízo são os seus efeitos. Atuamos para proteger seu patrimônio e seus filhos com o menor desgaste possível.",
        ],
      },
      {
        h2: "O que definimos no divórcio",
        items: [
          {
            h3: "Partilha de bens",
            text: "Divisão conforme o regime de casamento: comunhão parcial, comunhão universal ou separação total de bens.",
          },
          {
            h3: "Guarda e convivência dos filhos",
            text: "Definição de guarda compartilhada ou unilateral e organização da rotina de convivência.",
          },
          {
            h3: "Pensão alimentícia",
            text: "Alimentos para os filhos e, em determinados casos, entre ex-cônjuges.",
          },
          {
            h3: "Uso do nome de casado(a)",
            text: "Manutenção ou retomada do nome de solteiro(a), conforme a vontade de cada um.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Quanto tempo demora um divórcio?",
        a: "Consensual em cartório: normalmente de alguns dias a poucas semanas. Judicial consensual: alguns meses. Litigioso: depende da complexidade da partilha e das questões que envolvem os filhos.",
      },
      {
        q: "Quanto custa um divórcio?",
        a: "Os custos envolvem honorários advocatícios, conforme os parâmetros da OAB/SC, além de taxas de cartório ou custas judiciais, e variam com a complexidade do caso. Na primeira consulta, apresentamos uma estimativa transparente.",
      },
      {
        q: "Meu cônjuge não quer assinar o divórcio. E agora?",
        a: "O divórcio é um direito seu e será decretado mesmo sem a concordância do outro. A recusa apenas define que o processo será judicial, e não em cartório.",
      },
      {
        q: "Preciso ir à audiência?",
        a: "No divórcio em cartório não há audiência. No judicial, dependendo do caso, sua presença pode ser necessária. Você será orientado(a) e acompanhado(a) em todas as etapas.",
      },
    ],
    cta: {
      title: "Dê o primeiro passo com orientação segura",
      text: "Consulta reservada, presencial em Lages ou por videochamada.",
      whatsappMessage: "Olá, gostaria de uma consulta sobre divórcio.",
    },
    related: [{ slug: "direito-de-familia", label: "Direito de Família" }],
  },
  {
    slug: "contratos-e-direito-civil",
    nome: "Contratos e Direito Civil",
    cardDescription:
      "Elaboração e revisão de contratos, responsabilidade civil, cobranças e demandas cíveis para pessoas e empresas.",
    metaTitle: "Advogado para Contratos em Lages - SC",
    metaDescription:
      "Elaboração, revisão e negociação de contratos em Lages: compra e venda, locação, prestação de serviços e contratos empresariais. Direito civil completo.",
    h1: "Advogado para Contratos e Direito Civil em Lages - SC",
    heroSub:
      "Elaboração, revisão e negociação de contratos, além de atuação completa no contencioso cível.",
    intro: [
      "Um contrato bem redigido é a forma mais barata de evitar um processo. Atuamos na elaboração, revisão e negociação de contratos para pessoas e empresas de Lages e região e, quando o conflito já existe, na defesa dos seus interesses em juízo.",
    ],
    sections: [
      {
        h2: "Contratos que elaboramos e revisamos",
        items: [
          {
            h3: "Compra e venda de imóveis",
            text: "Promessas de compra e venda, escrituras e análise prévia da documentação do imóvel e do vendedor.",
          },
          {
            h3: "Locação residencial e comercial",
            text: "Contratos de locação, garantias, ações de despejo e ações renovatórias.",
          },
          {
            h3: "Prestação de serviços e empreitada",
            text: "Contratos claros sobre escopo, prazos, pagamento e responsabilidades.",
          },
          {
            h3: "Contratos empresariais",
            text: "Fornecimento, distribuição, parceria e confidencialidade.",
          },
          {
            h3: "Veículos, empréstimos e confissões de dívida",
            text: "Instrumentos que protegem quem vende, quem compra e quem empresta.",
          },
        ],
      },
      {
        h2: "Contencioso cível",
        paragraphs: [
          "Atuamos em cobrança e execução de dívidas, rescisão contratual, indenizações por danos materiais e morais, responsabilidade civil e direito do consumidor, inclusive na defesa de fornecedores.",
        ],
      },
    ],
    faq: [
      {
        q: "Vale a pena pagar um advogado para revisar um contrato?",
        a: "Em contratos relevantes, como imóvel, sociedade ou locação comercial, a revisão custa uma fração do prejuízo que uma cláusula mal redigida pode causar. É investimento em segurança jurídica.",
      },
      {
        q: "Contrato de gaveta tem validade?",
        a: "Tem efeitos entre as partes, mas oferece riscos sérios, especialmente em imóveis. Orientamos como regularizar a sua situação com segurança.",
      },
      {
        q: "Posso rescindir um contrato assinado?",
        a: "Depende do que foi pactuado e das circunstâncias, como descumprimento, vícios ou onerosidade excessiva. Analisamos o documento e apresentamos os cenários antes de qualquer medida.",
      },
    ],
    cta: {
      title: "Precisa elaborar ou revisar um contrato?",
      text: "Envie seu contrato para análise ou descreva sua necessidade. Retornamos em até 1 dia útil.",
      whatsappMessage:
        "Olá, preciso de ajuda com um contrato / questão de Direito Civil.",
    },
    related: [
      { slug: "direito-empresarial", label: "Direito Empresarial" },
      { slug: "direito-de-familia", label: "Direito de Família" },
    ],
  },
  {
    slug: "direito-empresarial",
    nome: "Direito Empresarial",
    cardDescription:
      "Assessoria jurídica contínua para empresas da serra catarinense: contratos, societário, cobranças e prevenção.",
    metaTitle: "Advogado Empresarial em Lages - SC",
    metaDescription:
      "Assessoria jurídica para empresas de Lages e região serrana: contratos, societário, trabalhista patronal e contencioso. Advocacia empresarial completa.",
    h1: "Advogado Empresarial em Lages - SC",
    heroSub:
      "Assessoria jurídica completa para empresas de Lages e da região serrana de Santa Catarina.",
    intro: [
      "Empresas da serra catarinense enfrentam os mesmos riscos jurídicos das grandes capitais, sejam trabalhistas, contratuais, societários ou de consumo, muitas vezes sem um jurídico interno. O Ferri, Maines & Fernandes funciona como o departamento jurídico da sua empresa: próximo, ágil e com custo previsível.",
    ],
    sections: [
      {
        h2: "Assessoria jurídica empresarial completa",
        items: [
          {
            h3: "Trabalhista patronal",
            text: "Defesa em reclamações trabalhistas e assessoria preventiva para reduzir passivo.",
          },
          {
            h3: "Contratos empresariais",
            text: "Fornecimento, prestação de serviços, parcerias e locação comercial.",
          },
          {
            h3: "Societário",
            text: "Constituição de sociedades, alterações contratuais, acordos de sócios e resolução de conflitos societários.",
          },
          {
            h3: "Cobranças e recuperação de crédito",
            text: "Cobrança extrajudicial e judicial de valores devidos à sua empresa.",
          },
          {
            h3: "Consumidor (defesa do fornecedor)",
            text: "Atuação em demandas de clientes e órgãos de defesa do consumidor.",
          },
        ],
      },
      {
        h2: "Assessoria mensal para empresas",
        paragraphs: [
          "Para empresas com demanda recorrente, oferecemos planos de assessoria contínua: consultas por WhatsApp e e-mail, análise de contratos, acompanhamento de processos e reuniões periódicas, por um custo mensal previsível e muito inferior ao de um jurídico interno.",
        ],
      },
    ],
    faq: [
      {
        q: "Minha empresa é pequena. Precisa de advogado?",
        a: "Pequenas empresas são justamente as que mais sofrem com passivo trabalhista e contratos mal feitos, pois um único processo compromete o caixa. A prevenção é proporcionalmente mais valiosa para o pequeno negócio.",
      },
      {
        q: "Como funciona a assessoria mensal?",
        a: "Definimos o escopo conforme o porte e o setor da empresa. Você passa a ter um canal direto com os advogados para as dúvidas do dia a dia, sem custo por consulta.",
      },
      {
        q: "Vocês atendem empresas de outras cidades da região?",
        a: "Sim. Atendemos empresas de toda a região serrana de Santa Catarina, com reuniões presenciais em Lages ou por videochamada.",
      },
    ],
    cta: {
      title: "Agende um diagnóstico jurídico da sua empresa",
      text: "Reunião presencial em Lages ou por videochamada, sem compromisso de contratação.",
      whatsappMessage:
        "Olá, gostaria de conhecer a assessoria jurídica empresarial do escritório.",
    },
    related: [
      {
        slug: "direito-trabalhista-patronal",
        label: "Direito Trabalhista Patronal",
      },
      { slug: "contratos-e-direito-civil", label: "Contratos e Direito Civil" },
    ],
  },
  {
    slug: "direito-militar",
    nome: "Direito Militar",
    cardDescription:
      "Defesa de militares em processos administrativos disciplinares, conselhos de disciplina e ações judiciais.",
    metaTitle: "Advogado Militar em Lages - SC",
    metaDescription:
      "Defesa de militares estaduais e das Forças Armadas em Lages e SC: PAD, conselho de disciplina, crimes militares e direitos da carreira. Atendimento reservado.",
    h1: "Advogado Especialista em Direito Militar em Lages - SC",
    heroSub:
      "Defesa de policiais militares, bombeiros e militares das Forças Armadas em Lages e em toda Santa Catarina.",
    intro: [
      "A carreira militar tem regras próprias, e um processo disciplinar mal conduzido pode custar a farda. A Dra. Roberta Costa Fernandes, com especialização em Direito Penal e atuação em Direito Militar, defende policiais militares, bombeiros e militares das Forças Armadas em Lages e em toda Santa Catarina.",
    ],
    sections: [
      {
        h2: "Atuação em Direito Militar",
        items: [
          {
            h3: "Processos administrativos disciplinares (PAD)",
            text: "Defesa em sindicâncias, PADs, conselhos de disciplina e conselhos de justificação.",
          },
          {
            h3: "Defesa em crimes militares",
            text: "Atuação na Justiça Militar estadual e da União.",
          },
          {
            h3: "Direitos da carreira",
            text: "Promoções, transferências, licenciamento, reforma e reintegração.",
          },
          {
            h3: "Medidas urgentes",
            text: "Habeas corpus e mandados de segurança em matéria militar.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Fui notificado de um PAD. Posso me defender sozinho?",
        a: "Pode, mas não é recomendável: os prazos são curtos e vícios na defesa inicial dificilmente se corrigem depois. A defesa técnica desde o primeiro ato protege a sua carreira.",
      },
      {
        q: "Militar respondendo a processo pode ser excluído da corporação?",
        a: "Dependendo da gravidade, sim. Por isso a defesa em conselho de disciplina ou de justificação deve ser tratada com máxima seriedade e urgência.",
      },
      {
        q: "O atendimento é sigiloso?",
        a: "Sim. Todo o atendimento é protegido pelo sigilo profissional do advogado, desde a primeira conversa.",
      },
    ],
    cta: {
      title: "Atendimento reservado para militares",
      text: "Consulta presencial em Lages ou por videochamada, com total sigilo.",
      whatsappMessage:
        "Olá, sou militar e preciso de atendimento em Direito Militar.",
    },
    related: [{ slug: "direito-de-familia", label: "Direito de Família" }],
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
