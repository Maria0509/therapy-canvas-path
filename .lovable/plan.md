## Visão geral

Site institucional (apenas divulgação) para **Carol Guaiato — Arte Terapia**, focado em workshops de pintura em tela para convívio e terapia. Bilingue PT/EN, estilo suave e artístico (paleta Cherry Blossom, tipografia Lora + Nunito Sans), com botão WhatsApp ("Saber mais" / "Learn more") presente em todas as páginas, ligando a `https://wa.me/351926507257`.

## Estrutura de páginas (rotas TanStack)

```text
/                     Página inicial — apresentação do projeto, terapia + convívio,
                      destaque para workshops em pintura em tela, CTA WhatsApp
/workshops/10-15      Workshop para 10–15 anos
/workshops/15-20      Workshop para 15–20 anos
/workshops/20-mais    Workshop para 20+ anos
/quadros              Galeria de quadros à venda (placeholders)
/contacto             (opcional, integrado no footer) — info + WhatsApp
```

Ficheiros: `src/routes/index.tsx`, `src/routes/workshops.$faixa.tsx` (uma rota dinâmica com conteúdo por faixa), `src/routes/quadros.tsx`. Cada rota define o seu próprio `head()` com title/description/og PT+EN.

## Componentes partilhados

- `src/components/SiteHeader.tsx` — logo/nome + menu (Início, Workshops ▾ 10-15 / 15-20 / 20+, Quadros), seletor PT/EN, botão WhatsApp.
- `src/components/SiteFooter.tsx` — contactos, redes, WhatsApp, copyright.
- `src/components/WhatsAppButton.tsx` — botão reutilizável (variantes: inline, floating fixo no canto inferior direito em todas as páginas).
- `src/components/AgeGroupCard.tsx` — cartão de faixa etária usado na home.
- `src/components/PaintingCard.tsx` — cartão de quadro (imagem, título, preço, "Saber mais" via WhatsApp com mensagem pré-preenchida).
- `src/components/SectionHeading.tsx` — título de secção com tipografia serifada.

## Conteúdo de cada página

**Home (`/`)**
- Hero: nome do projeto, frase sobre arte-terapia e convívio, CTA WhatsApp + "Ver workshops".
- Secção "Sobre o projeto" — terapia através da arte, convívio entre gerações.
- Secção "Workshops" — 3 AgeGroupCards (10-15, 15-20, 20+) com link para cada página.
- Secção "Galeria" — preview dos quadros com link para `/quadros`.
- Faixa CTA final WhatsApp.

**Workshops por faixa etária** (uma rota, conteúdo diferente)
- Hero específico (imagem ambiente da faixa etária).
- Foco terapêutico apropriado à idade.
- O que se faz no workshop, materiais, duração, ambiente.
- Galeria de momentos (placeholders).
- CTA WhatsApp com mensagem pré-preenchida ("Olá, quero saber mais sobre o workshop 10–15 anos").

**Quadros (`/quadros`)**
- Grelha de 8–12 quadros placeholder com título, dimensões, preço fictício.
- Cada cartão tem "Saber mais" → WhatsApp com mensagem incluindo o nome do quadro.

## Idioma PT/EN

- Contexto simples `LanguageProvider` em `src/lib/i18n.tsx` com hook `useT()` e dicionário em `src/lib/translations.ts` (PT default, EN secundário).
- Preferência guardada em `localStorage`.
- Seletor PT | EN no header.

## Design system (src/styles.css)

Paleta Cherry Blossom mapeada para tokens semânticos em `@theme inline`:
- `--background: #fef0f5`
- `--foreground: #4a1f2e` (rosa escuro para contraste AA)
- `--primary: #c45c7c` (rosa forte — botões)
- `--secondary: #f8c8d8`
- `--accent: #e88aab`
- `--muted: #fdf5f8`

Tipografia carregada via `<link>` no `__root.tsx`:
- Heading: **Lora** (serifada, elegante)
- Body: **Nunito Sans**

Toques artísticos: ligeira textura/grain em hero, cantos arredondados suaves (radius 0.75rem), bordas finas em rosa pálido, transições suaves.

## Imagens

Geradas via `imagegen` (modo fast, estilo aguarela suave em tons rosa):
- 1 hero da home
- 3 imagens ambiente (uma por faixa etária)
- 8 quadros placeholder para a galeria

## WhatsApp

URL base: `https://wa.me/351926507257?text=<mensagem encodada>`. Helper `buildWhatsAppUrl(message)` em `src/lib/whatsapp.ts`. Botão flutuante fixo visível em todas as páginas (mobile-friendly) + CTAs inline.

## SEO

Cada rota com `head()` próprio: title, description, og:title, og:description (bilingue conforme idioma ativo no SSR via default PT). `og:image` apenas nas leaf routes com imagem real (home hero, página de quadro destacado).

## Detalhes técnicos

- TanStack Start + Tailwind v4 (tokens em `src/styles.css` via `@theme inline`).
- Sem backend: site puramente estático/SSR de divulgação.
- Sem Lovable Cloud (não é necessário).
- Acessibilidade: contraste validado, `alt` em todas as imagens, navegação por teclado.
- Responsivo mobile-first.

## Fora de âmbito

- Carrinho/checkout (quadros apenas divulgação — contacto via WhatsApp).
- Sistema de reservas online.
- Backend/base de dados/autenticação.
