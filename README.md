# Luminae

Um projeto demostrativo e não comercial de um site E-commerce, voltado para vendas de roupas, mas também com venda de alguns aparelhos eletrônicos.

## Figma

Estou usando o Design e ideias da ***Saina Ghasemi***, Australiana de Melbourne, o projeto do figma é [este](https://www.figma.com/file/UN5zuXxowlakVlkj9u7ef8/Ecommerce-UI-Kit-(Community)?node-id=0%3A1&mode=dev), usando ele como base e fazendo algumas melhorias e mudanças.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Dependências

- Emotion
- Tailwind


## Problemas com a importação do styled do Emotion

Por algum motivo, talvez na hora da instalação do pacote, venho enfrentando um problema, meu auto-complete do *styled*, está importando `import styled from "@emotion/styled/macro";` ao invés de `import styled from "@emotion/styled";` por alguma motivo, esse ***/macro*** vem me causando problemas.

## Dinamicidade dos Dados

Nesta versão que estou trabalhando deste projeto, o objetivo primeiramente é criar o template do site, por isso, estou criando vários arquivos **JSON** para simular uma possível e futura implementação de um API que consiga gerir esses dados, trazendo assim um já template dinâmico.