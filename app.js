/**
 * Rei da Grama DF - Lógica do Site Estilo Itograss
 * Número 1 de Brasília em Vendas 🌱👑
 */

// Banco de Dados Técnico Completo das 5 Variedades do Rei da Grama DF (Fotos Reais)
const SPECIES_DATA = {
  'bermudas': {
    name: 'Bermudas Celebration',
    heroBadge: 'CELEBRATION',
    heroBadgeSub: 'Bermudagrass™ • Cultivar: Rileys Super Sport',
    heroDesc: 'A variedade preferida dos principais estádios, arenas esportivas e chácaras de Brasília. Máxima tolerância ao pisoteio e regeneração ultrarrápida.',
    image: 'images/bermudas-celebration.jpg',
    popularName: 'Celebration ou Bermudas',
    scientificName: 'Cynodon dactylon (L.) Pers.',
    family: 'Poaceae',
    origin: 'Estados Unidos',
    rnc: '26931',
    drought: 'Média / Alta',
    trampling: 'Altíssima (Número 1 do Mercado Esportivo)',
    mowingFreq: 'Alta (Crescimento Vigoroso)',
    mowingHeight: '2 a 5 cm',
    sun: 'Sol Pleno',
    color: 'Verde Azulado Vibrante',
    leaf: 'Fina',
    usage: 'Campos Esportivos, Society & Residências com Pets',
    priceCash: 25,
    priceCredit: 27,

    // 6 Vantagens e Desempenho Comprovado
    benefits: [
      {
        icon: 'fa-shoe-prints',
        title: 'MELHOR RESISTÊNCIA AO PISOTEIO DO MERCADO',
        desc: 'Suporta tráfego esportivo diário e pisoteio intenso sem perder o viço e a densidade.'
      },
      {
        icon: 'fa-seedling',
        title: 'RÁPIDO CRESCIMENTO E FECHAMENTO',
        desc: 'Enraíza com vigor no solo de Brasília formando rapidamente um tapete verde compacto.'
      },
      {
        icon: 'fa-futbol',
        title: 'EXCELENTE SUPERFÍCIE PARA JOGOS ESPORTIVOS',
        desc: 'Padrão adotado nos principais estádios da Copa, centros de treinamento e arenas do DF.'
      },
      {
        icon: 'fa-rotate-right',
        title: 'RECUPERAÇÃO MAIS RÁPIDA DO MERCADO',
        desc: 'Capacidade de autorregeneração ímpar após partidas de futebol e eventos ao ar livre.'
      },
      {
        icon: 'fa-circle-half-stroke',
        title: 'MELHOR DESEMPENHO EM SOMBRA ENTRE BERMUDAS',
        desc: 'Maior tolerância a sombreamento parcial quando comparada às demais variedades de Bermudas.'
      },
      {
        icon: 'fa-award',
        title: 'ADAPTAÇÃO TOTAL AO CLIMA DE BRASÍLIA',
        desc: 'Resiste perfeitamente à alta insolação do Planalto Central mantendo a cor viva.'
      }
    ],

    // Onde Utilizar
    usageSection: {
      badgeTitle: 'CELEBRATION BERMUDAGRASS™',
      badgeSubtitle: 'HOME • COMMERCIAL • SPORTS • CAMPEÃ DE RESISTÊNCIA',
      badgeIcon: 'fa-trophy',
      description: 'Trata-se da variedade com maior capacidade de utilização em jogos do mercado, pois é entre as Bermudas a mais rápida em crescimento e recuperação. Produz uma excelente superfície de jogo como observado nas principais arenas esportivas do Brasil e condomínios de alto padrão do DF. Ideal para:',
      items: [
        'CAMPOS DE FUTEBOL PROFISSIONAL E ESTÁDIOS',
        'CAMPOS DE FUTEBOL AMADORES, SOCIETY E POLIESPORTIVOS',
        'FAIRWAYS DE GOLFE, HIPISMO E CAMPOS DE POLO',
        'PLAYGROUNDS E ÁREAS COMUNS DE CONDOMÍNIOS DO DF',
        'JARDINS RESIDENCIAIS COM CÃES E ALTO TRÁFEGO',
        'CHÁCARAS DE LAZER E ESPAÇOS DE EVENTOS EM BRASÍLIA'
      ],
      bgImage: 'images/campo-futebol-aberto.jpg'
    }
  },

  'esmeralda': {
    name: 'Esmeralda Imperial',
    heroBadge: 'ESMERALDA IMPERIAL',
    heroBadgeSub: 'Zoysia japonica • Padrão Ouro Brasília',
    heroDesc: 'A espécie mais vendida do Distrito Federal. Excelente relação de custo-benefício, folhas macias e alta resistência ao sol pleno do cerrado.',
    image: 'images/esmeralda-imperial.jpg',
    popularName: 'Esmeralda ou Imperial',
    scientificName: 'Zoysia japonica Steud.',
    family: 'Poaceae',
    origin: 'Japão / Leste Asiático',
    rnc: '00329',
    drought: 'Alta (após bem enraizada)',
    trampling: 'Média a Alta',
    mowingFreq: 'Média (Pouca manutenção no ano)',
    mowingHeight: '2 a 3 cm',
    sun: 'Sol Pleno (mínimo 4h a 5h diárias)',
    color: 'Verde Esmeralda Brilhante',
    leaf: 'Fina e Macia',
    usage: 'Jardins Residenciais, Condomínios e Encostas Suaves',
    priceCash: 15,
    priceCredit: 17,

    benefits: [
      {
        icon: 'fa-hand-holding-dollar',
        title: 'MELHOR CUSTO-BENEFÍCIO DE BRASÍLIA',
        desc: 'Preço mais competitivo do mercado com visual nobre de gramado cinematográfico.'
      },
      {
        icon: 'fa-sun',
        title: 'MÁXIMA RESISTÊNCIA AO SOL PLENO DO CERRADO',
        desc: 'Desenvolve-se com vigor sob o sol forte de Brasília e resiste bem aos períodos de seca.'
      },
      {
        icon: 'fa-feather-pointed',
        title: 'FOLHAS FINAS, MACIAS E CONFORTÁVEIS',
        desc: 'Excelente para andar descalço, ideal para quintais com crianças e piqueniques.'
      },
      {
        icon: 'fa-shield-halved',
        title: 'ALTA DENSIDADE QUE BLOQUEIA PRAGAS',
        desc: 'Forma uma trama radicular densa que inibe o crescimento de ervas daninhas.'
      },
      {
        icon: 'fa-scissors',
        title: 'BAIXA FREQUÊNCIA DE CORTES',
        desc: 'Crescimento vertical comedido, reduzindo drasticamente custos e tempo com podas.'
      },
      {
        icon: 'fa-droplet-slash',
        title: 'EXCELENTE TOLERÂNCIA À ESTIAGEM',
        desc: 'Raízes firmes que armazenam umidade e recuperam o verde vivo logo após a irrigação.'
      }
    ],

    usageSection: {
      badgeTitle: 'ESMERALDA IMPERIAL CERRADO',
      badgeSubtitle: 'RESIDENCIAL • CONDOMÍNIOS • LAGO SUL & PARK WAY',
      badgeIcon: 'fa-gem',
      description: 'A grama Esmeralda Imperial é a líder absoluta de vendas e preferência no Distrito Federal. Por formar um tapete uniforme, macio e de estética impecável, é a opção favorita de residências no Lago Sul, Park Way, Jardim Botânico e condomínios fechados do DF. Ideal para:',
      items: [
        'JARDINS RESIDENCIAIS NO LAGO SUL, LAGO NORTE E PARK WAY',
        'ÁREAS VERDES E FACHADAS DE CONDOMÍNIOS FECHADOS',
        'ENTORNO DE PISCINAS, DECKS DE LAZER E ÁREAS GOURMET',
        'PRAÇAS, PARQUES E ÁREAS RECREATIVAS NO DF',
        'TALUDES E ENCOSTAS COM INCLINAÇÃO MODERADA',
        'SEDES EMPRESARIAIS, CLUBES E CHÁCARAS NO DISTRITO FEDERAL'
      ],
      bgImage: 'images/cena-03.jpg'
    }
  },

  'sao-carlos': {
    name: 'São Carlos Plus',
    heroBadge: 'SÃO CARLOS PLUS',
    heroBadgeSub: 'Axonopus compressus • Resistente à Sombra',
    heroDesc: 'A solução definitiva para jardins em Brasília que possuem sombras de árvores, muros altos ou beirais de telhado onde o sol não bate o dia todo.',
    image: 'images/sao-carlos-plus.jpg',
    popularName: 'São Carlos, Grama-Curitibana ou Sempre-Verde',
    scientificName: 'Axonopus compressus (Sw.) P.Beauv.',
    family: 'Poaceae',
    origin: 'América do Sul / Brasil',
    rnc: '05412',
    drought: 'Média (aprecia solo úmido e fresco)',
    trampling: 'Média',
    mowingFreq: 'Média a Baixa',
    mowingHeight: '3 a 5 cm',
    sun: 'Sol Pleno ou Meia Sombra (Sob Árvores)',
    color: 'Verde Escuro Lustroso Intenso',
    leaf: 'Larga, Plana e Lisa',
    usage: 'Áreas Sombreadas, Pomares, Chácaras e Jardins',
    priceCash: 25,
    priceCredit: 27,

    benefits: [
      {
        icon: 'fa-cloud-sun',
        title: 'NÚMERO 1 EM RESISTÊNCIA À MEIA SOMBRA',
        desc: 'A melhor espécie para locais onde as outras gramas enfraquecem e amarelam pela falta de sol.'
      },
      {
        icon: 'fa-tree',
        title: 'IDEAL PARA SOB COPAS DE ÁRVORES E MUROS',
        desc: 'Mantém o chão verde e protegido mesmo sob a copa de árvores frutíferas e sombras de casas.'
      },
      {
        icon: 'fa-leaf',
        title: 'FOLHAS LARGAS E LUSTROSAS',
        desc: 'Coloração verde esmeralda escura marcante com brilho acetinado natural.'
      },
      {
        icon: 'fa-temperature-low',
        title: 'EXCELENTE ADAPTAÇÃO AO MICROCLIMA FRESCO',
        desc: 'Resiste muito bem a épocas mais frias e locais mais frescos de chácaras do DF.'
      },
      {
        icon: 'fa-wand-magic-sparkles',
        title: 'NÃO EXIGE ADUBAÇÃO INTENSIVA',
        desc: 'Gramado com rusticidade natural que absorve e conserva muito bem os nutrientes da terra.'
      },
      {
        icon: 'fa-shield',
        title: 'EXCELENTE COBERTURA DE SOLO',
        desc: 'Sistema estolonífero forte que recobre e protege o solo fértil contra enxurradas.'
      }
    ],

    usageSection: {
      badgeTitle: 'SÃO CARLOS PLUS MEIA SOMBRA',
      badgeSubtitle: 'JARDINS SOMBREADOS • POMARES • SOB COPAS • CHÁCARAS',
      badgeIcon: 'fa-tree',
      description: 'A Grama São Carlos Plus é a variedade indispensável para locais que não recebem sol o dia todo. Graças às suas folhas largas ricas em clorofila, ela capta luz com muito mais eficiência, mantendo o gramado denso e verdejante sob árvores, muros altos e beirais de casas de Brasília. Ideal para:',
      items: [
        'JARDINS COM ÁRVORES FRUTÍFERAS, POMARES E BOSQUES',
        'ÁREAS RESIDENCIAIS COM SOMBRA DE MUROS E CASAS',
        'CONDOMÍNIOS ARBORIZADOS NO JARDIM BOTÂNICO E PARK WAY',
        'CHÁCARAS E SÍTIOS NO ENTORNO DO DISTRITO FEDERAL',
        'ESPAÇOS DE RECREAÇÃO COM SOMBRA NATURAL',
        'FACHADAS ORIENTADAS PARA O SUL OU COM POUCO SOL DIRETO'
      ],
      bgImage: 'images/destaque-principal.jpg'
    }
  },

  'zeon': {
    name: 'Zeon Zoysia',
    heroBadge: 'ZEON ZOYSIA',
    heroBadgeSub: 'Zoysia matrella • Padrão Resort de Luxo',
    heroDesc: 'A "grama descalça" de Brasília. Densidade imbatível, toque suave de veludo e crescimento vertical lento que exige muito menos cortes ao longo do ano.',
    image: 'images/zeon-zoysia.jpg',
    popularName: 'Zeon Zoysia (Grama Aveludada)',
    scientificName: 'Zoysia matrella (L.) Merr.',
    family: 'Poaceae',
    origin: 'Estados Unidos (Bladerunner Farms)',
    rnc: '23891',
    drought: 'Alta',
    trampling: 'Alta',
    mowingFreq: 'Muito Baixa (Cresce devagar)',
    mowingHeight: '1,5 a 3 cm',
    sun: 'Sol Pleno a Meia Sombra Suave',
    color: 'Verde Profundo Acetinado',
    leaf: 'Ultra Fina e Densa',
    usage: 'Mansões no Lago Sul/Norte, Resorts e Paisagismo Nobre',
    priceCash: 25,
    priceCredit: 27,

    benefits: [
      {
        icon: 'fa-socks',
        title: 'TOQUE AVELUDADO INCOMPARÁVEL ("GRAMA DESCALÇA")',
        desc: 'Sensação única de pisar em um tapete persa de veludo macio, adorado por toda a família.'
      },
      {
        icon: 'fa-gauge-simple-low',
        title: 'CRESCIMENTO LENTO: MENOS CORTES NO ANO',
        desc: 'Cresce pouco para cima, exigindo até 50% menos cortes e economizando na manutenção.'
      },
      {
        icon: 'fa-layer-group',
        title: 'DENSIDADE EXTREMA QUE ELIMINA DANINHAS',
        desc: 'A malha vegetal é tão compacta que impede o nascimento e proliferação de pragas no solo.'
      },
      {
        icon: 'fa-star',
        title: 'VALORIZAÇÃO IMEDIATA DO SEU IMÓVEL',
        desc: 'A variedade favorita dos grandes arquitetos paisagistas em mansões de Brasília.'
      },
      {
        icon: 'fa-sun',
        title: 'ALTA RESISTÊNCIA À SECA DO DF',
        desc: 'Enraizamento vigoroso que tolera os meses de seca de Brasília com excelente resposta à água.'
      },
      {
        icon: 'fa-crown',
        title: 'PADRÃO OLÍMPICO DE RESORTS DE LUXO',
        desc: 'A mesma grama utilizada no Campo de Golfe Olímpico do Rio e em resorts 5 estrelas.'
      }
    ],

    usageSection: {
      badgeTitle: 'ZEON ZOYSIA PREMIUM LUXURY',
      badgeSubtitle: 'RESORTS DE LUXO • MANSÕES LAGO SUL & NORTE • PAISAGISMO NOBRE',
      badgeIcon: 'fa-crown',
      description: 'Considerada por paisagistas renomados a grama mais nobre e sofisticada do mundo. A Zeon Zoysia oferece uma densidade compacta de veludo acetinado, com folhas finíssimas e altíssimo conforto para andar descalço. É a primeira escolha de embaixadas, resorts e residências de alto padrão em Brasília. Ideal para:',
      items: [
        'MANSÕES E CASAS DE ALTO LUXO NO LAGO SUL E LAGO NORTE',
        'ENTORNO DE PISCINAS SOFISTICADAS E ÁREAS GOURMET',
        'CAMPOS DE GOLFE, TEE BOXES E RESORTS EXCLUSIVOS',
        'JARDINS INTERNOS E PAISAGISMO CONTEMPORÂNEO',
        'CONDOMÍNIOS FECHADOS DE ALTÍSSIMO PADRÃO NO DF',
        'PROJETOS PAISAGÍSTICOS QUE EXIGEM O TOQUE MAIS FINO'
      ],
      bgImage: 'images/cena-01.jpg'
    }
  },

  'batatais': {
    name: 'Batatais Tapete',
    heroBadge: 'BATATAIS TAPETE',
    heroBadgeSub: 'Paspalum notatum • Rústica e Contenção',
    heroDesc: 'Máxima rusticidade para terrenos inclinados, taludes, contenção de erosões, beiras de estradas e chácaras com solo pobre no Distrito Federal.',
    image: 'images/batatais-tapete.jpg',
    popularName: 'Batatais, Gramão ou Mato-Grosso',
    scientificName: 'Paspalum notatum Flüggé',
    family: 'Poaceae',
    origin: 'Brasil / América Tropical',
    rnc: '00114',
    drought: 'Altíssima (A mais resistente do DF)',
    trampling: 'Altíssima (Resiste a tráfego pesado e animais)',
    mowingFreq: 'Baixa a Média',
    mowingHeight: '3 a 6 cm',
    sun: 'Sol Pleno',
    color: 'Verde Claro Rústico',
    leaf: 'Média a Larga e Fibrosa',
    usage: 'Taludes, Barrancos, Chácaras e Contenção de Erosão',
    priceCash: 28,
    priceCredit: 30,

    benefits: [
      {
        icon: 'fa-mountain',
        title: 'MÁXIMA RESISTÊNCIA CONTRA EROSÕES E TALUDES',
        desc: 'Raízes profundas e grossas que seguram a terra de barrancos e encostas no DF.'
      },
      {
        icon: 'fa-droplet-slash',
        title: 'SUPORTA A SECA MAIS SEVERA DE BRASÍLIA',
        desc: 'Sobrevive a longos períodos sem chuva, reavivando imediatamente com as primeiras chuvas.'
      },
      {
        icon: 'fa-shield-halved',
        title: 'EXTREMA RUSTICIDADE EM SOLOS POBRES',
        desc: 'Vinga mesmo em solos vermelhos com cascalho, sem exigir adubações frequentes.'
      },
      {
        icon: 'fa-truck',
        title: 'AGUENTA PISOTEIO PESADO E ANIMAIS',
        desc: 'Ideal para chácaras, haras e áreas com circulação de veículos e animais de grande porte.'
      },
      {
        icon: 'fa-money-bill-wave',
        title: 'BAIXÍSSIMO CUSTO DE MANUTENÇÃO',
        desc: 'Dispensa adubações constantes e cuidados delicados, exigindo apenas podas esporádicas.'
      },
      {
        icon: 'fa-seedling',
        title: 'NATIVA E ADAPTADA AO BIOMA DO CERRADO',
        desc: 'Plenamente aclimatada ao clima do Planalto Central há séculos.'
      }
    ],

    usageSection: {
      badgeTitle: 'BATATAIS TAPETE CERRADO FORTE',
      badgeSubtitle: 'TALUDES • CONTENÇÃO • CHÁCARAS & ENTORNO DO DF',
      badgeIcon: 'fa-mountain',
      description: 'A grama Batatais é o verdadeiro tanque de guerra do mundo das gramas. Desenvolvida para resistir às condições mais rústicas do Distrito Federal e entorno, ela possui um enraizamento profundo que segura a terra com firmeza, sendo imbatível na contenção de encostas e barrancos de terra vermelha. Ideal para:',
      items: [
        'CONTENÇÃO DE TALUDES, BARRANCOS E ENCOSTAS COM EROSÃO',
        'CHÁCARAS, SÍTIOS E FAZENDAS NO DISTRITO FEDERAL E GOIÁS',
        'ÁREAS DE PASTAGEM, HARAS E CIRCULAÇÃO DE ANIMAIS',
        'BEIRAS DE ESTRADAS, ATERROS E OBRAS DE INFRAESTRUTURA',
        'GRANDES LOTES E CHÁCARAS COM POUCA DISPONIBILIDADE DE ÁGUA',
        'TERRENOS COM SOLO POBRE, PEDREGOSO OU CASCALHO'
      ],
      bgImage: 'images/lavoura-tenda-azul.jpg'
    }
  },
  'amendoim': {
    name: 'Grama-Amendoim (Forração)',
    heroBadge: 'GRAMA-AMENDOIM',
    heroBadgeSub: 'Arachis repens Handro • Forração Ecológica',
    heroDesc: 'A forração paisagística mais exuberante e sustentável do Brasil. Dispensa podas frequentes, fixa nitrogênio no solo e floresce com pequenas flores amarelo-ouro, perfeita para taludes, encostas e jardins ecológicos em Brasília.',
    image: 'images/grama-amendoim.jpg',
    popularName: 'Grama-Amendoim ou Amendoim Rasteiro',
    scientificName: 'Arachis repens Handro',
    family: 'Fabaceae (Leguminosae)',
    origin: 'Nativa do Brasil (Cerrado e América do Sul)',
    rnc: 'Forração Certificada',
    drought: 'Alta (raízes profundas de 0,30 m a 1,80 m)',
    trampling: 'Baixo a Moderado (Indicada para Forração)',
    mowingFreq: 'Não necessita de poda!',
    mowingHeight: '0,10 a 0,25 m (até 30 cm)',
    sun: 'Sol Pleno a Meia-Sombra',
    color: 'Verde Brilhante com Flores Amarelas',
    leaf: 'Composta por 4 folíolos ovais',
    usage: 'Forração de Jardins, Taludes, Pomares e Encostas',
    priceCash: 25,
    priceCredit: 27,

    benefits: [
      {
        icon: 'fa-scissors',
        title: 'DISPENSA PODAS E CORTES REGULARES',
        desc: 'Cresce rasteira mantendo porte compacto de 10 a 25 cm, economizando mão de obra e tempo.'
      },
      {
        icon: 'fa-spa',
        title: 'FLORAÇÃO AMARELO-OURO ENCANTADORA',
        desc: 'Pequenas flores em formato de borboleta (1,5 a 2 cm) que colorem o jardim com elegância.'
      },
      {
        icon: 'fa-mountain',
        title: 'RAÍZES PROFUNDAS: PERFEITA PARA TALUDES',
        desc: 'Raízes pivotantes que atingem de 0,30 m até 1,80 m, excelente para conter encostas contra erosão.'
      },
      {
        icon: 'fa-leaf',
        title: 'FIXAÇÃO BIOLÓGICA DE NITROGÊNIO',
        desc: 'Leguminosa que enriquece naturalmente o solo, servindo como adubação verde em pomares e canteiros.'
      },
      {
        icon: 'fa-droplet-slash',
        title: 'ALTA RESISTÊNCIA À SECA DO CERRADO',
        desc: 'Suporta os períodos secos de Brasília sem perder a vitalidade graças ao enraizamento profundo.'
      },
      {
        icon: 'fa-seedling',
        title: 'NATIVA DO BRASIL E DO CERRADO',
        desc: 'Perfeitamente adaptada ao bioma e às condições climáticas do Distrito Federal.'
      }
    ],

    usageSection: {
      badgeTitle: 'ARACHIS REPENS HANDRO',
      badgeSubtitle: 'FORRAÇÃO ECOLÓGICA • PAISAGISMO SUSTENTÁVEL • TALUDES',
      badgeIcon: 'fa-spa',
      description: 'A grama-amendoim (Arachis repens) é uma leguminosa rasteira e perene, muito utilizada no paisagismo ecológico como forração nobre. Além da beleza de suas flores amarelo-ouro, ela atua como protetora do solo contra enxurradas e enriquece a terra fixando nitrogênio. Ideal para:',
      items: [
        'FORRAÇÃO PAISAGÍSTICA DE JARDINS E CANTEIROS',
        'CONTENÇÃO DE TALUDES, BARRANCOS E ENCOSTAS COM EROSÃO',
        'ÁREAS SOB MEIA-SOMBRA OU SOL PLENO EM BRASÍLIA',
        'POMARES E CULTIVOS AGRÍCOLAS (FIXAÇÃO DE NITROGÊNIO)',
        'JARDINS RESIDENCIAIS DE BAIXA MANUTENÇÃO (SEM PODA)',
        'CONDOMÍNIOS FECHADOS E PROJETOS PAISAGÍSTICOS ECOLÓGICOS'
      ],
      bgImage: 'images/grama-amendoim.jpg'
    }
  }
};

const PLANTING_PRICE_PER_M2 = 12; // R$ 12/m² com NPK + calcário
const FREIGHT_PRICE_PER_KM = 10;  // R$ 10/km rodoviário ida de Brasília
const WHATSAPP_PHONE = "5561993585376"; // Número de WhatsApp oficial do bot

// Estado atual
let currentState = {
  speciesKey: 'bermudas',
  areaM2: 60,
  includePlanting: false,
  regionKm: 6,
  regionName: 'Park Way / SMPW',
  paymentMethod: 'pix',
  clientName: ''
};

// Formatação Monetária
function toBRL(val) {
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  initSpeciesTabs();
  initCalculator();
  initFaq();
  initCookieBar();
  initMobileMenu();
  applySpeciesView('bermudas');
  recalculate();
});

// Menu Mobile
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.add('hidden'));
    });
  }
}

// Abas de Troca das Espécies
function initSpeciesTabs() {
  const tabs = document.querySelectorAll('.species-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const speciesKey = tab.getAttribute('data-species');
      tabs.forEach(t => {
        t.classList.remove('active', 'bg-itoGreen', 'text-white');
        t.classList.add('bg-white', 'text-itoBlue');
      });
      tab.classList.add('active', 'bg-itoGreen', 'text-white');
      tab.classList.remove('bg-white', 'text-itoBlue');

      applySpeciesView(speciesKey);

      // Sincroniza a calculadora
      syncCalculatorGrass(speciesKey);
    });
  });

  // Botões nos Cards do Catálogo Fotográfico
  document.querySelectorAll('.btn-select-card-species').forEach(btn => {
    btn.addEventListener('click', () => {
      const speciesKey = btn.getAttribute('data-species');
      tabs.forEach(t => {
        if (t.getAttribute('data-species') === speciesKey) {
          t.classList.add('active', 'bg-itoGreen', 'text-white');
          t.classList.remove('bg-white', 'text-itoBlue');
        } else {
          t.classList.remove('active', 'bg-itoGreen', 'text-white');
          t.classList.add('bg-white', 'text-itoBlue');
        }
      });
      applySpeciesView(speciesKey);
      syncCalculatorGrass(speciesKey);

      const charElem = document.getElementById('caracteristicas');
      if (charElem) charElem.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Atualiza todas as seções dinâmicas da página ao trocar de espécie
function applySpeciesView(key) {
  const data = SPECIES_DATA[key];
  if (!data) return;

  currentState.speciesKey = key;

  // 1. Atualizar Hero Banner Principal
  const elHeroTitle = document.getElementById('hero-specie-title');
  const elHeroBadgeTitle = document.getElementById('hero-badge-title');
  const elHeroBadgeSub = document.getElementById('hero-badge-subtitle');
  const elHeroDesc = document.getElementById('hero-specie-desc');
  const elHeroImg = document.getElementById('hero-macro-image');

  if (elHeroTitle) elHeroTitle.textContent = data.name;
  if (elHeroBadgeTitle) elHeroBadgeTitle.textContent = data.heroBadge;
  if (elHeroBadgeSub) elHeroBadgeSub.textContent = data.heroBadgeSub;
  if (elHeroDesc) elHeroDesc.textContent = data.heroDesc;
  if (elHeroImg) {
    elHeroImg.src = data.image;
    elHeroImg.alt = `Grama ${data.name} Real`;
  }

  // 2. Atualizar Grid de 6 Vantagens e Desempenho Comprovado (Print 2)
  const elBenefitsTitle = document.getElementById('benefits-section-title');
  if (elBenefitsTitle) {
    elBenefitsTitle.textContent = `Vantagens Comprovadas: ${data.name}`;
  }

  const elBenefitsGrid = document.getElementById('benefits-grid');
  if (elBenefitsGrid && data.benefits && data.benefits.length) {
    elBenefitsGrid.innerHTML = data.benefits.map(b => `
      <div class="flex flex-col items-center group">
        <div class="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 rounded-2xl bg-itoGreen-soft/50 border border-itoGreen/20 flex items-center justify-center text-itoGreen group-hover:scale-110 group-hover:bg-itoGreen group-hover:text-white transition duration-300 shadow-sm">
          <i class="fa-solid ${b.icon} text-3xl sm:text-4xl"></i>
        </div>
        <h3 class="font-heading font-black text-xs sm:text-sm uppercase tracking-wider text-itoBlue max-w-[260px] leading-snug">
          ${b.title}
        </h3>
        <p class="text-xs text-slate-500 mt-2 max-w-[260px] leading-relaxed">
          ${b.desc}
        </p>
      </div>
    `).join('');
  }

  // 3. Atualizar Ficha Técnica Comparativa de Características (Prints 3 e 4)
  const elCharTitle = document.getElementById('char-specie-title');
  const elPopular = document.getElementById('char-popular-name');
  const elScientific = document.getElementById('char-scientific-name');
  const elFamily = document.getElementById('char-family');
  const elOrigin = document.getElementById('char-origin');
  const elRnc = document.getElementById('char-rnc');
  const elDrought = document.getElementById('char-drought');
  const elTrampling = document.getElementById('char-trampling');
  const elMowingFreq = document.getElementById('char-mowing-freq');
  const elMowingHeight = document.getElementById('char-mowing-height');
  const elSun = document.getElementById('char-sun');
  const elColor = document.getElementById('char-color');
  const elLeaf = document.getElementById('char-leaf');
  const elUsage = document.getElementById('char-usage');
  const elPrice = document.getElementById('char-price');

  if (elCharTitle) elCharTitle.textContent = `Grama ${data.name}`;
  if (elPopular) elPopular.textContent = data.popularName;
  if (elScientific) elScientific.textContent = data.scientificName;
  if (elFamily) elFamily.textContent = data.family;
  if (elOrigin) elOrigin.textContent = data.origin;
  if (elRnc) elRnc.textContent = data.rnc;
  if (elDrought) elDrought.textContent = data.drought;
  if (elTrampling) elTrampling.textContent = data.trampling || 'Média a Alta';
  if (elMowingFreq) elMowingFreq.textContent = data.mowingFreq;
  if (elMowingHeight) elMowingHeight.textContent = data.mowingHeight;
  if (elSun) elSun.textContent = data.sun;
  if (elColor) elColor.textContent = data.color;
  if (elLeaf) elLeaf.textContent = data.leaf;
  if (elUsage) elUsage.textContent = data.usage;
  if (elPrice) elPrice.textContent = `${toBRL(data.priceCash)}/m² Pix • ${toBRL(data.priceCredit)}/m² Crédito`;

  // 4. Atualizar Seção Onde Utilizar a Grama (Print 5)
  if (data.usageSection) {
    const elUtilName = document.getElementById('util-specie-name');
    const elUtilBadgeTitle = document.getElementById('util-badge-title');
    const elUtilBadgeSub = document.getElementById('util-badge-subtitle');
    const elUtilBadgeIcon = document.getElementById('util-badge-icon');
    const elUtilDesc = document.getElementById('util-desc');
    const elUtilList = document.getElementById('util-list');
    const elUtilBgImg = document.getElementById('util-bg-image');

    if (elUtilName) elUtilName.textContent = data.name;
    if (elUtilBadgeTitle) elUtilBadgeTitle.textContent = data.usageSection.badgeTitle;
    if (elUtilBadgeSub) elUtilBadgeSub.textContent = data.usageSection.badgeSubtitle;
    if (elUtilBadgeIcon && data.usageSection.badgeIcon) {
      elUtilBadgeIcon.className = `fa-solid ${data.usageSection.badgeIcon} text-gold-light text-2xl`;
    }
    if (elUtilDesc) elUtilDesc.textContent = data.usageSection.description;

    if (elUtilList && data.usageSection.items) {
      elUtilList.innerHTML = data.usageSection.items.map(item => `
        <li class="flex items-center gap-2.5">
          <span class="w-2.5 h-2.5 rounded-full bg-itoGreen shrink-0"></span>
          <span>${item}</span>
        </li>
      `).join('');
    }

    if (elUtilBgImg && data.usageSection.bgImage) {
      elUtilBgImg.src = data.usageSection.bgImage;
    }
  }
}

// Sincroniza a seleção na calculadora
function syncCalculatorGrass(key) {
  const cards = document.querySelectorAll('.calc-grass-card');
  cards.forEach(card => {
    const radio = card.querySelector('input[type="radio"]');
    if (radio && radio.value === key) {
      radio.checked = true;
      card.classList.add('border-itoGreen', 'bg-itoGreen-soft');
      card.classList.remove('border-slate-200', 'bg-white');
    } else {
      card.classList.remove('border-itoGreen', 'bg-itoGreen-soft');
      card.classList.add('border-slate-200', 'bg-white');
    }
  });
  recalculate();
}

// Inicializa a Calculadora
function initCalculator() {
  const areaInput = document.getElementById('sim-area');
  const plantingCheck = document.getElementById('sim-planting');
  const regionSelect = document.getElementById('sim-region');
  const payInputs = document.querySelectorAll('input[name="sim-pay"]');
  const clientNameInput = document.getElementById('sim-client-name');
  const sendBtn = document.getElementById('sim-btn-send');

  // Seleção de grama na calculadora
  document.querySelectorAll('.calc-grass-card').forEach(card => {
    card.addEventListener('click', () => {
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        const key = radio.value;
        
        // Atualiza abas no topo
        document.querySelectorAll('.species-tab').forEach(t => {
          if (t.getAttribute('data-species') === key) {
            t.classList.add('active', 'bg-itoGreen', 'text-white');
            t.classList.remove('bg-white', 'text-itoBlue');
          } else {
            t.classList.remove('active', 'bg-itoGreen', 'text-white');
            t.classList.add('bg-white', 'text-itoBlue');
          }
        });

        applySpeciesView(key);
        syncCalculatorGrass(key);
      }
    });
  });

  // Metragem
  if (areaInput) {
    areaInput.addEventListener('input', (e) => {
      let v = parseFloat(e.target.value);
      if (isNaN(v) || v < 0) v = 0;
      currentState.areaM2 = v;
      recalculate();
    });
  }

  // Botões de acréscimo rápido
  document.querySelectorAll('.btn-quick-m2').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = parseFloat(btn.getAttribute('data-val'));
      if (val === 300) {
        currentState.areaM2 = 300;
      } else {
        currentState.areaM2 = (currentState.areaM2 || 0) + val;
      }
      if (areaInput) areaInput.value = currentState.areaM2;
      recalculate();
    });
  });

  // Plantio
  if (plantingCheck) {
    plantingCheck.addEventListener('change', (e) => {
      currentState.includePlanting = e.target.checked;
      const box = document.getElementById('sim-planting-box');
      if (e.target.checked) {
        box.classList.add('border-itoGreen', 'bg-itoGreen-soft');
      } else {
        box.classList.remove('border-itoGreen', 'bg-itoGreen-soft');
      }
      recalculate();
    });
  }

  // Região DF
  if (regionSelect) {
    regionSelect.addEventListener('change', (e) => {
      const opt = e.target.options[e.target.selectedIndex];
      currentState.regionKm = parseFloat(opt.getAttribute('data-km')) || 0;
      currentState.regionName = opt.text.split('(')[0].trim();
      recalculate();
    });
  }

  // Forma de pagamento
  payInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      currentState.paymentMethod = e.target.value;
      document.querySelectorAll('.sim-payment-card').forEach(label => {
        const r = label.querySelector('input');
        if (r && r.checked) {
          label.classList.add('border-itoGreen', 'bg-itoGreen-soft');
          label.classList.remove('border-slate-200', 'bg-white');
        } else {
          label.classList.remove('border-itoGreen', 'bg-itoGreen-soft');
          label.classList.add('border-slate-200', 'bg-white');
        }
      });
      recalculate();
    });
  });

  // Nome do cliente
  if (clientNameInput) {
    clientNameInput.addEventListener('input', (e) => {
      currentState.clientName = e.target.value.trim();
    });
  }

  // Botão Enviar Pedido
  if (sendBtn) {
    sendBtn.addEventListener('click', sendOrderToWhatsApp);
  }
}

// Recalcular Valores
function recalculate() {
  const data = SPECIES_DATA[currentState.speciesKey];
  const area = currentState.areaM2;
  const isCredit = currentState.paymentMethod === 'credit';

  // Alerta de atacado >= 300 m²
  const alertEl = document.getElementById('sim-bulk-alert');
  if (alertEl) {
    if (area >= 300) {
      alertEl.classList.remove('hidden');
    } else {
      alertEl.classList.add('hidden');
    }
  }

  // Cálculos
  const unitGrassPrice = isCredit ? data.priceCredit : data.priceCash;
  const totalGrass = area * unitGrassPrice;
  const totalPlanting = currentState.includePlanting ? (area * PLANTING_PRICE_PER_M2) : 0;
  const totalFreight = currentState.regionKm * FREIGHT_PRICE_PER_KM;
  const grandTotal = totalGrass + totalPlanting + totalFreight;
  const deposit50 = grandTotal * 0.5;

  // Atualização dos elementos na tela
  const elDispGrass = document.getElementById('sim-disp-grass');
  const elDispGrassSub = document.getElementById('sim-disp-grass-sub');
  const elDispGrassTotal = document.getElementById('sim-disp-grass-total');

  const elDispPlantingSub = document.getElementById('sim-disp-planting-sub');
  const elDispPlantingTotal = document.getElementById('sim-disp-planting-total');

  const elDispFreightSub = document.getElementById('sim-disp-freight-sub');
  const elDispFreightTotal = document.getElementById('sim-disp-freight-total');

  const elDispGrandTotal = document.getElementById('sim-disp-grand-total');
  const elDispDeposit = document.getElementById('sim-disp-deposit');
  const elDispBalance = document.getElementById('sim-disp-balance');

  if (elDispGrass) elDispGrass.textContent = data.name;
  if (elDispGrassSub) elDispGrassSub.textContent = `${area} m² × ${toBRL(unitGrassPrice)} (${isCredit ? 'Cartão' : 'Pix'})`;
  if (elDispGrassTotal) elDispGrassTotal.textContent = toBRL(totalGrass);

  if (elDispPlantingSub) {
    elDispPlantingSub.textContent = currentState.includePlanting ? `${area} m² × ${toBRL(PLANTING_PRICE_PER_M2)} (Adubo NPK + Calcário)` : 'Não incluso';
  }
  if (elDispPlantingTotal) elDispPlantingTotal.textContent = toBRL(totalPlanting);

  if (elDispFreightSub) {
    elDispFreightSub.textContent = currentState.regionKm === 0 ? 'Retirada na loja em Brasília' : `${currentState.regionName} (~${currentState.regionKm} km)`;
  }
  if (elDispFreightTotal) elDispFreightTotal.textContent = toBRL(totalFreight);

  if (elDispGrandTotal) elDispGrandTotal.textContent = toBRL(grandTotal);
  if (elDispDeposit) elDispDeposit.textContent = toBRL(deposit50);
  if (elDispBalance) elDispBalance.textContent = toBRL(deposit50);
}

// Enviar Pedido formatado para o WhatsApp do Rei e persistir no Supabase
async function sendOrderToWhatsApp() {
  const data = SPECIES_DATA[currentState.speciesKey];
  const area = currentState.areaM2;
  const isCredit = currentState.paymentMethod === 'credit';
  const unitGrassPrice = isCredit ? data.priceCredit : data.priceCash;
  const totalGrass = area * unitGrassPrice;
  const totalPlanting = currentState.includePlanting ? (area * PLANTING_PRICE_PER_M2) : 0;
  const totalFreight = currentState.regionKm * FREIGHT_PRICE_PER_KM;
  const grandTotal = totalGrass + totalPlanting + totalFreight;
  const deposit50 = grandTotal * 0.5;

  // Persiste no Supabase caso configurado
  let quoteId = null;
  if (typeof window.saveQuoteToSupabase === 'function') {
    quoteId = await window.saveQuoteToSupabase({
      clientName: currentState.clientName,
      speciesKey: currentState.speciesKey,
      speciesName: data.name,
      areaM2: area,
      unitGrassPrice: unitGrassPrice,
      grassTotal: totalGrass,
      includePlanting: currentState.includePlanting,
      plantingTotal: totalPlanting,
      regionName: currentState.regionName,
      regionKm: currentState.regionKm,
      freightTotal: totalFreight,
      paymentMethod: isCredit ? 'credit' : 'pix',
      grandTotal: grandTotal,
      deposit50: deposit50
    });
  }

  let msg = `🌱👑 *ORÇAMENTO - REI DA GRAMA DF*\n`;
  if (quoteId) {
    msg += `🔖 *Cód. Pedido:* #${quoteId.slice(0, 8).toUpperCase()}\n`;
  }
  msg += `Olá, Rei! Calculei meu pedido no site oficial:\n\n`;
  if (currentState.clientName) {
    msg += `👤 *Cliente:* ${currentState.clientName}\n`;
  }
  msg += `🌿 *Variedade:* ${data.name}\n`;
  msg += `📐 *Metragem:* ${area} m²\n`;
  msg += `💳 *Forma de Pagamento:* ${isCredit ? 'Cartão de Crédito' : 'Pix / Débito'}\n`;
  msg += `💲 *Grama:* ${toBRL(totalGrass)}\n`;
  msg += `🚜 *Plantio Especializado:* ${currentState.includePlanting ? `Sim (${toBRL(totalPlanting)} com adubo NPK + calcário)` : 'Não solicitado'}\n`;
  msg += `📍 *Entrega:* ${currentState.regionKm === 0 ? 'Retirada na base DF' : `${currentState.regionName} (~${currentState.regionKm} km) - ${toBRL(totalFreight)}`}\n`;
  msg += `\n💰 *VALOR TOTAL:* ${toBRL(grandTotal)}\n`;
  msg += `🛡️ *Sinal de Reserva (50% Pix):* ${toBRL(deposit50)}\n`;
  msg += `\nGostaria de confirmar a data de entrega em Brasília!`;

  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Acordeão FAQ
function initFaq() {
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('i');
      const isHidden = content.classList.contains('hidden');

      document.querySelectorAll('.faq-text').forEach(t => t.classList.add('hidden'));
      document.querySelectorAll('.faq-btn i').forEach(i => i.classList.remove('rotate-180'));

      if (isHidden) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

// Barra de Cookies (Idêntica ao Print)
function initCookieBar() {
  const bar = document.getElementById('cookie-bar');
  const btn = document.getElementById('cookie-btn');
  if (btn && bar) {
    btn.addEventListener('click', () => {
      bar.classList.add('hidden');
    });
  }
}
