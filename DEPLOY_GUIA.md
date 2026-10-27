# 🚀 Guia de Deploy & Publicação: Rei da Grama DF 🌱👑

Este guia orienta a publicação do projeto no **GitHub**, no **Supabase** e em uma plataforma de hospedagem com domínio e SSL gratuito (**Vercel** ou **GitHub Pages**).

---

## 1. 🐙 Subir no GitHub

O repositório Git local já está **100% inicializado e com o commit pronto** na branch `main`.

Para enviar para a sua conta do GitHub:

1. Acesse [github.com/new](https://github.com/new) e crie um novo repositório com o nome:
   - **Repository name:** `rei-da-grama` (ou o nome que preferir)
   - Deixe como **Public** ou **Private**
   - **NÃO** marque a opção de adicionar README ou .gitignore (já criamos tudo isso)
   - Clique em **Create repository**

2. No terminal (PowerShell), execute apenas estes dois comandos:
   ```powershell
   cd C:\Users\rafag\.gemini\antigravity\scratch\rei-da-grama
   git remote add origin https://github.com/SEU_USUARIO_GITHUB/rei-da-grama.git
   git push -u origin main
   ```
   *(Substitua `SEU_USUARIO_GITHUB` pelo seu usuário do GitHub)*

---

## 2. ⚡ Criar o Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com) e faça login (pode entrar com sua conta do GitHub).
2. Clique em **"New Project"**:
   - **Name:** `rei-da-grama-df`
   - **Database Password:** Escolha uma senha segura e anote.
   - **Region:** Selecione `South America (São Paulo)` para latência mínima no Brasil.
   - Clique em **Create new project** (leva cerca de 1 minuto para provisionar).

3. **Executar o Script SQL do Banco de Dados:**
   - No menu lateral esquerdo do Supabase, clique no ícone **SQL Editor** (ou `Query`).
   - Clique em **"New query"**.
   - Abra o arquivo [`supabase/schema.sql`](./supabase/schema.sql) deste projeto, copie todo o conteúdo e cole no editor do Supabase.
   - Clique no botão verde **"Run"**.
   - ✅ Pronto! As tabelas `quotes` (orçamentos), `bot_sessions` (sessões do bot) e `payments` (Mercado Pago) serão criadas com RLS e índices otimizados.

4. **Conectar o Site ao Supabase:**
   - No painel do Supabase, vá em **Project Settings** (ícone de engrenagem) > **API**.
   - Copie:
     * **Project URL** (ex: `https://xyzcompany.supabase.co`)
     * **Project API Keys:** copie a chave **`anon` / `public`**
   - Abra o arquivo [`supabaseClient.js`](./supabaseClient.js) e atualize os valores:
     ```javascript
     const SUPABASE_CONFIG = {
       url: "https://xyzcompany.supabase.co", // Sua Project URL
       anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6..." // Sua Anon Key
     };
     ```
   - Faça o commit da atualização:
     ```powershell
     git add supabaseClient.js
     git commit -m "chore: adiciona credenciais do Supabase"
     git push
     ```

---

## 3. 🌐 Colocar o Site no Ar (Vercel ou Netlify em 1 minuto)

### Opção A: Vercel (Recomendada)
1. Acesse [vercel.com](https://vercel.com) e entre com sua conta do GitHub.
2. Clique em **"Add New..."** > **"Project"**.
3. Selecione o repositório `rei-da-grama` que você subiu no GitHub.
4. Clique em **"Deploy"**.
5. Pronto! Em 20 segundos seu site estará online com link seguro `https://rei-da-grama.vercel.app` e você pode apontar o domínio próprio (ex: `reidagramadf.com.br`).

### Opção B: GitHub Pages (100% Gratuito no próprio GitHub)
1. No seu repositório no GitHub, clique na aba **Settings**.
2. No menu lateral, clique em **Pages**.
3. Em **Branch**, selecione `main` e a pasta `/ (root)`.
4. Clique em **Save**.
5. Seu site estará no ar no endereço `https://SEU_USUARIO.github.io/rei-da-grama/`.

---

## 4. 🤖 Conexão com o Bot "Rei" no WhatsApp

Quando um cliente simular um orçamento no site e clicar no botão:
1. O lead é salvo imediatamente na tabela `quotes` do **Supabase**.
2. A mensagem já vai pré-formatada para o WhatsApp com o código do orçamento:
   `#UUID` + Espécie + Quantidade + Plantio + Frete DF + Sinal de 50%.
3. O bot do Rei reconhece o orçamento e dá continuidade no atendimento humanizado/automático!
