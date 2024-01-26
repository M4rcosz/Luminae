# Luminae

Um projeto demostrativo e não comercial de um site E-commerce, voltado para vendas de roupas, mas também com venda de alguns aparelhos eletrônicos.

## Figma

Estou usando o Design e ideias da ***Saina Ghasemi***, Australiana de Melbourne, o projeto do figma é [este](https://www.figma.com/file/UN5zuXxowlakVlkj9u7ef8/Ecommerce-UI-Kit-(Community)?node-id=0%3A1&mode=dev), usando ele como base e fazendo algumas melhorias e mudanças.

## Dependências/Ferramentas

- Next.js
- TypeScript - Automáticamente installado com o **next create app**.
- Emotion - `npm install --save @emotion/css && npm i @emotion/styled @emotion/react`.
- TailwindCSS - Automáticamente installado com o **next create app**.

## Dinamicidade dos Dados

Nesta versão que estou trabalhando deste projeto, o objetivo primeiramente é criar o template do site, por isso, estou criando vários arquivos **JSON** para simular uma possível e futura implementação de um API que consiga gerir esses dados, trazendo assim um já template dinâmico.

## DOCS - Funcionalidades:

### style && containerPadX

**`style`** é basicamente um import de css de `@emotion/css` com o alias style que é exportado dentro do próprio arquivo `ContainerPadX.ts` e de outros arquivos de estilo no futuro, que por si estão na pasta `/common/styles`.

**`containerPadX`** é basicamente um estilo de espaçamento para a aplicação, onde é mais fácil de se efetuar uma manuntenção ou até responsivar, ou seja, tem o proposito para fácil manutenção do espaçamento dos containeres.

