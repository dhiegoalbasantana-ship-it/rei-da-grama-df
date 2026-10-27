-- ==============================================================================
-- REI DA GRAMA DF - SUPABASE DATABASE SCHEMA
-- Número 1 de Brasília em Vendas 🌱👑
-- Compatível com o Site Institucional e o Bot Assistente Virtual "Rei"
-- ==============================================================================

-- Habilita extensão para geração de UUIDs seguros
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. TABELA DE ORÇAMENTOS E LEADS (Gerados pelo Site e pelo Bot)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.quotes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    -- Dados do Cliente
    client_name TEXT,
    client_phone TEXT,
    client_email TEXT,
    client_cpf VARCHAR(14),
    
    -- Endereço e Logística DF
    delivery_cep VARCHAR(9),
    delivery_address TEXT,
    delivery_region TEXT NOT NULL DEFAULT 'Park Way / SMPW',
    freight_km NUMERIC(8,2) NOT NULL DEFAULT 6.0,
    freight_precision TEXT DEFAULT 'exact', -- 'exact' ou 'approx'
    freight_price_km NUMERIC(8,2) NOT NULL DEFAULT 10.00,
    freight_total NUMERIC(10,2) NOT NULL DEFAULT 60.00,
    
    -- Grama e Especificações
    product_key VARCHAR(50) NOT NULL, -- 'bermudas', 'esmeralda', 'sao-carlos', 'zeon', 'batatais'
    product_name TEXT NOT NULL,
    quantity_m2 NUMERIC(10,2) NOT NULL DEFAULT 10.00,
    grass_unit_price NUMERIC(10,2) NOT NULL,
    grass_total NUMERIC(10,2) NOT NULL,
    
    -- Serviço de Plantio Especializado (R$ 12/m²)
    include_planting BOOLEAN NOT NULL DEFAULT false,
    planting_unit_price NUMERIC(10,2) NOT NULL DEFAULT 12.00,
    planting_total NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    
    -- Forma de Pagamento e Totais
    payment_method VARCHAR(20) NOT NULL DEFAULT 'pix', -- 'pix', 'debit', 'credit', 'cash', 'transfer'
    grand_total NUMERIC(10,2) NOT NULL,
    deposit_required_50 NUMERIC(10,2) NOT NULL, -- Sinal de 50%
    balance_on_delivery NUMERIC(10,2) NOT NULL, -- 50% na entrega
    
    -- Status do Pedido / Funil
    stage VARCHAR(50) NOT NULL DEFAULT 'collecting', -- 'collecting', 'quote_pending', 'quote_confirmed', 'payment_pending', 'paid', 'scheduled', 'delivered', 'cancelled'
    quote_confirmed BOOLEAN NOT NULL DEFAULT false,
    order_id TEXT,
    payment_id TEXT, -- ID no Mercado Pago
    
    -- Triagem Humana (Regra do Bot: >= 300m², desconto, reclamação, etc.)
    needs_human BOOLEAN NOT NULL DEFAULT false,
    notify_team BOOLEAN NOT NULL DEFAULT false,
    team_message TEXT,
    
    -- Origem
    source VARCHAR(20) NOT NULL DEFAULT 'website' -- 'website' ou 'whatsapp_bot'
);

-- ------------------------------------------------------------------------------
-- 2. TABELA DE ESTADO DAS CONVERSAS DO BOT (WhatsApp / Chat)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.bot_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    phone_number VARCHAR(30) UNIQUE NOT NULL,
    state JSONB NOT NULL DEFAULT '{}'::jsonb,
    stage VARCHAR(50) DEFAULT 'collecting',
    needs_human BOOLEAN DEFAULT false,
    last_interaction TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 3. TABELA DE WEBHOOKS E PAGAMENTOS (Mercado Pago)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    quote_id UUID REFERENCES public.quotes(id) ON DELETE SET NULL,
    mercadopago_payment_id TEXT UNIQUE NOT NULL,
    status VARCHAR(50) NOT NULL, -- 'approved', 'pending', 'rejected', etc.
    status_detail TEXT,
    payment_type VARCHAR(50), -- 'pix', 'credit_card', etc.
    transaction_amount NUMERIC(10,2) NOT NULL,
    payer_email TEXT,
    raw_webhook_payload JSONB
);

-- ------------------------------------------------------------------------------
-- 4. ÍNDICES DE ALTA PERFORMANCE
-- ------------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_quotes_created_at ON public.quotes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quotes_phone ON public.quotes(client_phone);
CREATE INDEX IF NOT EXISTS idx_quotes_stage ON public.quotes(stage);
CREATE INDEX IF NOT EXISTS idx_quotes_needs_human ON public.quotes(needs_human);
CREATE INDEX IF NOT EXISTS idx_bot_sessions_phone ON public.bot_sessions(phone_number);

-- ------------------------------------------------------------------------------
-- 5. POLÍTICAS DE SEGURANÇA (ROW LEVEL SECURITY - RLS)
-- ------------------------------------------------------------------------------
-- Habilita RLS em todas as tabelas
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bot_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Permite inserção anônima de novos orçamentos a partir do site (com a chave anon)
CREATE POLICY "Permitir insercao anonima de orcamentos pelo site" 
ON public.quotes
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Permite leitura de orçamentos apenas com service_role ou usuário autenticado
CREATE POLICY "Permitir leitura de orcamentos para authenticated" 
ON public.quotes
FOR SELECT 
TO authenticated, service_role
USING (true);

-- Permite inserção e atualização de sessões do bot apenas via service_role (backend seguro)
CREATE POLICY "Acesso completo a sessoes via service_role" 
ON public.bot_sessions
FOR ALL 
TO service_role
USING (true);

-- Permite acesso a pagamentos apenas via service_role
CREATE POLICY "Acesso completo a pagamentos via service_role" 
ON public.payments
FOR ALL 
TO service_role
USING (true);

-- ------------------------------------------------------------------------------
-- 6. TRIGGER PARA ATUALIZAR TIMESTAMP DE 'updated_at'
-- ------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_quotes_updated_at ON public.quotes;
CREATE TRIGGER trigger_quotes_updated_at
BEFORE UPDATE ON public.quotes
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Comentários descritivos
COMMENT ON TABLE public.quotes IS 'Orçamentos e pedidos calculados no site e sincronizados com o bot Rei.';
COMMENT ON TABLE public.bot_sessions IS 'Estados de sessão das conversas de WhatsApp gerenciadas pelo bot Rei.';
COMMENT ON TABLE public.payments IS 'Registros de pagamentos e confirmações do Mercado Pago via webhook.';
