/**
 * Rei da Grama DF - Lógica do Site Estilo Itograss
 * Número 1 de Brasília em Vendas 🌱👑
 */

// Banco de Dados Técnico Completo das 5 Variedades do Rei da Grama DF
const SPECIES_DATA = {
  'bermudas': {
    name: 'Bermudas Celebration',
    heroBadge: 'CELEBRATION',
    heroBadgeSub: 'Bermudagrass™ • Cultivar: Rileys Super Sport',
    heroDesc: 'A variedade preferida dos principais estádios, arenas esportivas e chácaras de Brasília. Máxima tolerância ao pisoteio e regeneração ultrarrápida.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80',
    popularName: 'Celebration ou Bermudas',
    scientificName: 'Cynodon dactylon (L.) Pers.',
    family: 'Poaceae',
    origin: 'Estados Unidos',
    rnc: '26931',
    drought: 'Média / Alta',
    mowingFreq: 'Alta',
    mowingHeight: '2 a 5 cm',
    sun: 'Sol Pleno',
    color: 'Verde Azulado',
    leaf: 'Fina',
    usage: 'Campos Esportivos, Society & Residências',
    priceCash: 25,
    priceCredit: 27
  },
  'esmeralda': {
    name: 'Esmeralda Imperial',
    heroBadge: 'ESMERALDA IMPERIAL',
    heroBadgeSub: 'Zoysia japonica • Padrão Ouro Brasília',
    heroDesc: 'A espécie mais vendida do Distrito Federal. Excelente relação de custo-benefício, folhas macias e alta resistência ao sol pleno do cerrado.',
    image: 'https://images.unsplash.com/photo-1584473457406-6240486418e9?auto=format&fit=crop&w=800&q=80',
    popularName: 'Esmeralda ou Imperial',
    scientificName: 'Zoysia japonica Steud.',
    family: 'Poaceae',
    origin: 'Japão / Leste Asiático',
    rnc: '00329',
    drought: 'Alta (após enraizada)',
    mowingFreq: 'Média',
    mowingHeight: '2 a 3 cm',
    sun: 'Sol Pleno (mínimo 4h a 5h diárias)',
    color: 'Verde Esmeralda Brilhante',
    leaf: 'Fina e Macia',
    usage: 'Jardins Residenciais, Condomínios e Encostas',
    priceCash: 15,
    priceCredit: 17
  },
  'sao-carlos': {
    name: 'São Carlos Plus',
    heroBadge: 'SÃO CARLOS PLUS',
    heroBadgeSub: 'Axonopus compressus • Resistente à Sombra',
    heroDesc: 'A solução definitiva para jardins em Brasília que possuem sombras de árvores, muros altos ou beirais de telhado onde o sol não bate o dia todo.',
    image: 'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=800&q=80',
    popularName: 'São Carlos ou Grama-Curitibana',
    scientificName: 'Axonopus compressus (Sw.) P.Beauv.',
    family: 'Poaceae',
    origin: 'América do Sul / Brasil',
    rnc: '05412',
    drought: 'Média (exige solo fresco)',
    mowingFreq: 'Média a Baixa',
    mowingHeight: '3 a 5 cm',
    sun: 'Sol Pleno ou Meia Sombra',
    color: 'Verde Escuro Intenso',
    leaf: 'Larga e Lisa',
    usage: 'Áreas Sob Copas de Árvores, Jardins e Chácaras',
    priceCash: 25,
    priceCredit: 27
  },
  'zeon': {
    name: 'Zeon Zoysia',
    heroBadge: 'ZEON ZOYSIA',
    heroBadgeSub: 'Zoysia matrella • Padrão Resort de Luxo',
    heroDesc: 'A "grama descalça" de Brasília. Densidade imbatível, toque suave de veludo e crescimento vertical lento que exige muito menos cortes ao longo do ano.',
    image: 'https://images.unsplash.com/photo-1558904541-efa8c4a5697b?auto=format&fit=crop&w=800&q=80',
    popularName: 'Zeon Zoysia',
    scientificName: 'Zoysia matrella (L.) Merr.',
    family: 'Poaceae',
    origin: 'Estados Unidos (Bladerunner Farms)',
    rnc: '23891',
    drought: 'Alta',
    mowingFreq: 'Muito Baixa (crescimento lento)',
    mowingHeight: '1,5 a 3 cm',
    sun: 'Sol Pleno a Meia Sombra Suave',
    color: 'Verde Profundo Acetinado',
    leaf: 'Ultra Fina',
    usage: 'Mansões no Lago Sul/Norte, Resorts e Áreas Nobres',
    priceCash: 25,
    priceCredit: 27
  },
  'batatais': {
    name: 'Batatais Tapete',
    heroBadge: 'BATATAIS TAPETE',
    heroBadgeSub: 'Paspalum notatum • Rústica e Contenção',
    heroDesc: 'Máxima rusticidade para terrenos inclinados, taludes, contenção de erosões, beiras de estradas e chácaras com solo pobre no Distrito Federal.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    popularName: 'Batatais, Gramão ou Mato-Grosso',
    scientificName: 'Paspalum notatum Flüggé',
    family: 'Poaceae',
    origin: 'Brasil / América Tropical',
    rnc: '00114',
    drought: 'Altíssima',
    mowingFreq: 'Baixa a Média',
    mowingHeight: '3 a 6 cm',
    sun: 'Sol Pleno',
    color: 'Verde Claro Rústico',
    leaf: 'Média a Larga',
    usage: 'Taludes, Barrancos, Chácaras e Contenção de Solo',
    priceCash: 28,
    priceCredit: 30
  }
};

const PLANTING_PRICE_PER_M2 = 12; // R$ 12/m² com NPK + calcário
const FREIGHT_PRICE_PER_KM = 10;  // R$ 10/km rodoviário ida de Brasília
const WHATSAPP_PHONE = "5561999999999"; // Número de WhatsApp oficial do bot

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
}

// Atualiza todas as seções (Hero, Ficha Técnica de Características e Preços)
function applySpeciesView(key) {
  const data = SPECIES_DATA[key];
  if (!data) return;

  currentState.speciesKey = key;

  // Atualizar Hero
  const elHeroTitle = document.getElementById('hero-specie-title');
  const elHeroBadgeTitle = document.getElementById('hero-badge-title');
  const elHeroBadgeSub = document.getElementById('hero-badge-subtitle');
  const elHeroDesc = document.getElementById('hero-specie-desc');
  const elHeroImg = document.getElementById('hero-macro-image');

  if (elHeroTitle) elHeroTitle.textContent = data.name;
  if (elHeroBadgeTitle) elHeroBadgeTitle.textContent = data.heroBadge;
  if (elHeroBadgeSub) elHeroBadgeSub.textContent = data.heroBadgeSub;
  if (elHeroDesc) elHeroDesc.textContent = data.heroDesc;
  if (elHeroImg) elHeroImg.src = data.image;

  // Atualizar Seção de Características Técnicas (Prints 3 e 4)
  const elCharTitle = document.getElementById('char-specie-title');
  const elPopular = document.getElementById('char-popular-name');
  const elScientific = document.getElementById('char-scientific-name');
  const elFamily = document.getElementById('char-family');
  const elOrigin = document.getElementById('char-origin');
  const elRnc = document.getElementById('char-rnc');
  const elDrought = document.getElementById('char-drought');
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
  if (elMowingFreq) elMowingFreq.textContent = data.mowingFreq;
  if (elMowingHeight) elMowingHeight.textContent = data.mowingHeight;
  if (elSun) elSun.textContent = data.sun;
  if (elColor) elColor.textContent = data.color;
  if (elLeaf) elLeaf.textContent = data.leaf;
  if (elUsage) elUsage.textContent = data.usage;
  if (elPrice) elPrice.textContent = `${toBRL(data.priceCash)}/m² Pix • ${toBRL(data.priceCredit)}/m² Crédito`;
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
