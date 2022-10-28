<h1 align="center"> Iniciando projeto React Native </h1>
<img src='./src/assets/img/devtocruz.png'  style="display: block; margin: auto width: 50%;"/>

- Criar Projeto

  - npx create-expo-app --template bare-minimum

- Adicionar TypeScript

  - touch tsconfig.json
  - [Renomear] App.js -> App.tsx
  - yarn start
    [Instalar as dependências TypeScript]

- Adicionar Eslint + Prettier

  - yarn add --dev eslint-config-universe eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
  - [package.json] "eslintConfig": {"extends": "universe/native"}
  - touch eslint.js
  - [eslint.js] module.exports = {extends: "universe/native",}

- Adicionar Styled components

  - yarn add styled-components
  - yarn add @types/styled-components-react-native
  - [package.json] "resolution":{"styled-components": "ˆ5"}
