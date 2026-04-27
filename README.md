# Psicóloga Mariana Rodrigues 🧠

Landing page institucional da psicóloga infantil **Mariana Rodrigues**, com foco em apresentação de serviços, áreas de atuação e canais de contato.

## Visão Geral 📌

Este projeto foi desenvolvido como uma página única (single page) com seções bem definidas para:

- apresentação inicial e proposta de valor;
- especialidades de atendimento (TEA, TDAH, TOD e orientação parental);
- exibição do espaço terapêutico;
- seção "Sobre Mim";
- contato por WhatsApp, e-mail, Instagram e LinkedIn.

## Tecnologias Utilizadas 🛠️

- **React 19** + **TypeScript**
- **Vite** (ambiente de desenvolvimento e build)
- **Tailwind CSS v4**
- **Lucide React** (ícones)
- **ESLint** (padronização e qualidade de código)

## Estrutura do Projeto 🗂️

```text
psico-mari/
|- public/
|  `- icons.svg
|- src/
|  |- assets/                  # Imagens e recursos visuais
|  |- components/
|  |  `- WppFloatingButton.tsx # Botão flutuante do WhatsApp
|  |- Home/
|  |  |- navbar.tsx
|  |  |- hero.tsx
|  |  |- atuacao.tsx
|  |  |- consultorio.tsx
|  |  |- sobre.tsx
|  |  `- footer.tsx
|  |- App.tsx                  # Composição da página principal
|  |- main.tsx                 # Entrada da aplicação
|  `- index.css                # Tema e estilos globais
|- eslint.config.js
|- postcss.config.js
|- vite.config.ts
|- tsconfig*.json
`- package.json
```

## Pré-requisitos ✅

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18+ recomendada)
- npm (já vem com o Node)

## Como Rodar Localmente 🚀

```bash
# 1) Instalar dependências
npm install

# 2) Iniciar ambiente de desenvolvimento
npm run dev
```

Após iniciar, abra a URL exibida no terminal (normalmente `http://localhost:5173`).

## Scripts Disponíveis 📜

- `npm run dev`: inicia o servidor local com hot reload.
- `npm run build`: gera build de produção em `dist/`.
- `npm run preview`: serve localmente a build de produção.
- `npm run lint`: executa verificação de lint no projeto.

## Padrões de Estilo e Tema 🎨

As cores de marca estão centralizadas no `@theme` dentro de `src/index.css`, com tokens como:

- `--color-brand-green`
- `--color-brand-blue2`
- `--color-brand-orange`

Esses tokens são usados nas classes utilitárias para manter consistência visual em toda a interface.

## Responsividade 📱

O layout foi construído com abordagem responsiva:

- navegação com menu mobile (hambúrguer e dropdown);
- grids que adaptam de 1 para múltiplas colunas em telas maiores;
- botões e CTAs com comportamento consistente entre desktop e mobile.

## Build e Deploy 📦

Para gerar versão de produção:

```bash
npm run build
```

Os arquivos finais serão gerados na pasta `dist/`, pronta para hospedagem em serviços estáticos (ex.: Vercel, Netlify, GitHub Pages, servidor próprio).

## Contato 📬

- **Profissional**: Mariana Rodrigues
- **WhatsApp**: [Clique para conversar](https://wa.me/+5534996373011) 💬
- **Instagram**: [@srodriguesmari\_](https://www.instagram.com/srodriguesmari_/)
- **LinkedIn**: [Mariana Rodrigues Santana](https://www.linkedin.com/in/mariana-rodrigues-santana-7b448521b/)

## Licença 📄

Este projeto está em repositório privado (`private: true` no `package.json`).
Defina a licença conforme sua estratégia de publicação/uso.
