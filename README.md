# Luminae

Um projeto demostrativo e não comercial de um site E-commerce, voltado para vendas de produtos em geral, por exemplo como Amazon, MercadoLivre e etc.

A ideia é criar um site onde você possa navegar entre os produtos e simular a compra, e também poder simular como um vendedor, podendo colocar seu produto à venda.

Futuramente também será adicionado um sistema para simular um login ou uma criação de conta.

## Figma/Créditos

Estou usando o Design e algumas ideias da Australiana ***Saina Ghasemi*** de Melbourne, o projeto do figma é [este](https://www.figma.com/file/UN5zuXxowlakVlkj9u7ef8/Ecommerce-UI-Kit-(Community)?node-id=0%3A1&mode=dev).

Estou usando ele como base e fazendo algumas melhorias e mudanças, deixando assim mais dinâmico e interativo.

## Dependências/Ferramentas

- Next.js
- TypeScript - Automáticamente installado com o **next create app**.
- Emotion - `npm i @emotion/styled @emotion/react && npm install @emotion/css`.
- TailwindCSS - Automáticamente installado com o **next create app**.
- Redux-Toolkit - `npm install @reduxjs/toolkit react-redux @types/react-redux`
- uuid - `npm install uuid && npm install @types/uuid`

## Dinamicidade dos Dados

Nesta versão que estou trabalhando deste projeto, o objetivo primeiramente é criar o template do site, por isso, estou criando vários arquivos **JSON** para simular uma possível e futura implementação de um API que consiga gerir esses dados, trazendo assim um já template dinâmico.

## DOCS - Funcionalidades:

### TailwindCSS

#### Fontsize - extends

- 2xs: 10px
- 3xs: 8px

#### Spacing - extends

- 0.75: 3px
- Mobile: 20px
- Tablet: 60px

#### Screen - extends

- xs: 500px

#### Colors - extends

- whiteText: #f0f0f0
- grayText: #C4C4C4
- veryGrayText: #9D9D9D
- notifications: #d02E00

### utils - functions

#### priceWithoutDiscount

Função matemática para calcular o preço de um produto após o desconto.

### utils - styles/components

#### BackgroundScreen

Componente que facilita a criação de um Background que preenche a tela toda.

- Precisa que tanto ele tanto o componente que recebe receberá o background tenha a mesma altura/height.
- Não recebe um children!
- Sem valor semântico (div).

#### ContainerList 

Componente que cria alguns estilos padrões como Container.

- Semanticamente é uma ``ul``, logo você deve substituir ele com a ul se for necessário.

#### StarGrades 

Componente que cria as estrelas de notas do produto, sendo assim, criando as estrelas preenchidas, meio preenchidas ou estrelas não preenchidas.

Todo "produto" tem em seus dados uma nota de 0 a 5, que pode também ser um valor decimal que terminal com 5, por exemplo 4.5, e esse ".5" representa uma meia estrela, ou seja, o componente pega a nota do produto e faz contas matemáticas para saber quantas estrelas de cada o produto tem. 