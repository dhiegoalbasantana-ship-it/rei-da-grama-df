# Rei da Grama DF 🌱👑 - Site Institucional & Conversor de Vendas

Website de alta conversão desenvolvido sob medida para a loja **Rei da Grama** em Brasília/DF (Instagram: [@reidagrama.df](https://www.instagram.com/reidagrama.df/)), integrado com a lógica comercial e o comportamento do assistente virtual **Rei**.

---

## 🚀 Principais Funcionalidades

1. **Calculadora e Simulador de Orçamento em Tempo Real**:
   - Catálogo com as 5 espécies de tapetes e preços oficiais:
     - **Esmeralda Imperial:** R$ 15,00/m² (Pix/Débito) / R$ 17,00/m² (Crédito)
     - **São Carlos Plus:** R$ 25,00/m² (Pix/Débito) / R$ 27,00/m² (Crédito)
     - **Zeon Zoysia:** R$ 25,00/m² (Pix/Débito) / R$ 27,00/m² (Crédito)
     - **Bermudas Celebration:** R$ 25,00/m² (Pix/Débito) / R$ 27,00/m² (Crédito)
     - **Batatais Tapete:** R$ 28,00/m² (Pix/Débito) / R$ 30,00/m² (Crédito)
   - Adicional de Cartão de Crédito (+R$ 2,00/m² somente na grama).
   - Serviço de **Plantio Especializado** (+R$ 12,00/m²) com adubação de base **NPK** e **calcário agrícola** inclusos.
   - Cálculo de frete rodoviário transparente baseado na tabela de **R$ 10,00/km** com distâncias calibradas para as principais Regiões Administrativas do DF (Park Way, Lago Sul, Lago Norte, Jardim Botânico, Plano Piloto, Águas Claras, Vicente Pires, etc.) e consulta opcional por CEP.
   - Apresentação do **Sinal de 50% para reserva** e saldo na entrega/conclusão do serviço (sem fiado).
   - Alerta automático para pedidos acima de **300 m²** (encaminhamento para condições especiais de atacado).

2. **Gerador de Pedido Direto para o WhatsApp do Rei**:
   - Ao clicar no botão de envio, o sistema gera uma mensagem 100% formatada com todas as informações prontas para o fluxo do bot processar sem fricção.

3. **Guia Interativo / Quiz "Qual a Grama Ideal?"**:
   - Questionário dinâmico de 3 passos (Sol/Sombra, Nível de Tráfego e Objetivo) com recomendação automática e botão de exportar direto para a calculadora.

4. **Widget do Assistente Virtual "Rei"**:
   - Janela de atendimento interativo na tela com botões rápidos e saudação oficial:
     > *"Bem-vindo ao Rei da Grama, número 1 de Brasília em vendas! 🌱👑 Eu sou o Rei, assistente virtual do Rei da Grama. Como posso te ajudar?"*

5. **Design Responsivo e Moderno**:
   - Estilizado com Tailwind CSS e paleta de cores nobres (Verde Floresta + Dourado Real).
   - 100% otimizado para celulares, tablets e computadores.

---

## 🛠️ Como Configurar o Número do WhatsApp

No arquivo `app.js`, localize a linha 46:

```javascript
let WHATSAPP_NUMBER = "5561999999999";
```

Substitua `"5561999999999"` pelo número de WhatsApp oficial conectado ao seu bot (com DDI 55 e DDD 61, apenas dígitos).

---

## 💻 Como Abrir e Testar Localmente

Basta abrir o arquivo `index.html` em qualquer navegador:
- No Windows: Dê um duplo clique no arquivo `index.html` localizado em:
  `C:\Users\rafag\.gemini\antigravity\scratch\rei-da-grama\index.html`

Ou execute um servidor local simples via terminal:
```bash
npx serve .
# ou
python -m http.server 8080
```

---

## 🌐 Publicação / Deploy Gratuito

Você pode hospedar o site em menos de 1 minuto em plataformas como:
- **Vercel**: Conecte ao GitHub ou arraste a pasta para o painel.
- **Netlify**: Basta arrastar a pasta `rei-da-grama` para o Netlify Drop.
- **GitHub Pages**: Crie um repositório e ative o Pages na branch `main`.
