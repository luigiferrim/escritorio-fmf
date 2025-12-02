# 🏛️ Ferri, Maines & Fernandes – Advogados Associados

Site institucional desenvolvido para o escritório Ferri, Maines & Fernandes, com foco em clareza, responsividade e experiência do usuário.

Este projeto foi criado com tecnologias modernas para apresentar a equipe, áreas de atuação e facilitar o contato com clientes.

---

## 🔗 Acesse o site

🌐 [https://ferrimainesefernandes.com](https://ferrimainesefernandes.com)

---

## ⚙️ Tecnologias Utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel (Deploy e hospedagem)
- Formspree (Integração do formulário)
- Git + GitHub

---

## 🧩 Funcionalidades

- Página institucional com áreas de atuação
- Apresentação dos advogados com fotos e biografias
- Formulário de contato funcional
- Botões de WhatsApp direcionados individualmente
- Layout 100% responsivo (desktop e mobile)
- Integração com domínio personalizado

---

## 🚀 Como rodar localmente

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/escritorio-advocacia.git
```

---

## 🔒 Ambiente e Segurança

- Variáveis de ambiente (crie um arquivo `.env.local` na raiz do projeto ou configure no provedor de hospedagem):

  - `FORMSPREE_ENDPOINT` — (opcional) URL do endpoint do Formspree. Se não definido, o endpoint padrão é usado internamente.
  - `RECAPTCHA_SECRET` — (opcional) chave secreta do reCAPTCHA para verificação server-side (se ativado).

- O projeto aplica headers de segurança (CSP, HSTS, X-Frame-Options, etc.) via `next.config.mjs`.

## 🧪 Testes locais

1. Instale dependências:

```bash
pnpm install
```

2. Rode em modo de desenvolvimento:

```bash
pnpm dev
```

3. Teste o formulário de contato na página `/contato`. O formulário agora envia os dados para `/api/contact`, que valida e encaminha ao Formspree.

Se quiser ativar verificação reCAPTCHA, defina `RECAPTCHA_SECRET` e atualize o formulário no cliente para incluir o token (podemos adicionar essa etapa se desejar).
