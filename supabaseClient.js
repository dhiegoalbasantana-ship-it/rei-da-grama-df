/**
 * Rei da Grama DF - Supabase Client
 * Integração com banco de dados para salvar orçamentos e leads gerados no site
 */

// Configuração oficial do Supabase para o Rei da Grama DF
const SUPABASE_CONFIG = {
  url: window.ENV_SUPABASE_URL || "https://faqatsetfjebgsgasgxl.supabase.co",
  anonKey: window.ENV_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcWF0c2V0ZmplYmdzZ2FzZ3hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxNTQzNzYsImV4cCI6MjEwODczMDM3Nn0.j9aH9yOR0A04liLCwAF5NFT07m1XUX1eTeC1134SN98"
};

let supabaseClient = null;

// Inicializa o cliente caso a URL e a AnonKey sejam válidas
function getSupabase() {
  if (supabaseClient) return supabaseClient;

  if (
    window.supabase &&
    SUPABASE_CONFIG.url &&
    SUPABASE_CONFIG.anonKey &&
    !SUPABASE_CONFIG.url.includes("SEU_PROJETO")
  ) {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
      console.log("🌱 [Rei da Grama] Conectado com sucesso ao Supabase!");
    } catch (e) {
      console.warn("🌱 [Rei da Grama] Falha ao instanciar Supabase:", e);
    }
  }
  return supabaseClient;
}

/**
 * Salva um orçamento calculado na tabela 'quotes' do Supabase
 * @param {Object} quoteData Dados calculados do pedido
 * @returns {Promise<string|null>} Retorna o ID gerado no banco ou null
 */
async function saveQuoteToSupabase(quoteData) {
  const sb = getSupabase();
  if (!sb) {
    // Se o Supabase ainda não estiver configurado com as chaves reais, apenas prossegue suavemente
    return null;
  }

  try {
    const payload = {
      client_name: quoteData.clientName || 'Cliente Site',
      client_phone: quoteData.clientPhone || null,
      delivery_region: quoteData.regionName,
      freight_km: quoteData.regionKm,
      freight_total: quoteData.freightTotal,
      product_key: quoteData.speciesKey,
      product_name: quoteData.speciesName,
      quantity_m2: quoteData.areaM2,
      grass_unit_price: quoteData.unitGrassPrice,
      grass_total: quoteData.grassTotal,
      include_planting: quoteData.includePlanting,
      planting_total: quoteData.plantingTotal,
      payment_method: quoteData.paymentMethod,
      grand_total: quoteData.grandTotal,
      deposit_required_50: quoteData.deposit50,
      balance_on_delivery: quoteData.deposit50,
      stage: 'quote_pending',
      needs_human: quoteData.areaM2 >= 300,
      team_message: quoteData.areaM2 >= 300 ? 'Área a partir de 300m²: requer contato consultivo para desconto de atacado.' : null,
      source: 'website'
    };

    const { data, error } = await sb
      .from('quotes')
      .insert([payload])
      .select('id')
      .single();

    if (error) {
      console.warn("⚠️ Aviso ao salvar no Supabase:", error.message);
      return null;
    }

    console.log("✅ Orçamento registrado no Supabase com ID:", data.id);
    return data.id;
  } catch (err) {
    console.error("Erro inesperado ao salvar orçamento:", err);
    return null;
  }
}

// Exporta para uso no app.js
window.saveQuoteToSupabase = saveQuoteToSupabase;
window.getSupabase = getSupabase;
