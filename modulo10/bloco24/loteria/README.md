<h1 id="topo">Loteria - Rodada 04 de cases </h1>
  
Endereço surge: **[Resultado Loterias]()**

  * [Indice](#funciona)
      * [O Desafio](#desafio)
      * [Requisitos não funcionais](#naofuncionais)
      * [Extras](#extras)
  * [Imagens](#imagens)
      * [Estrura de Pastas e Arquivos](#estrutura)
      * [Páginas Desktop](#inicial) 
      * [Página Mobile inicial - Responsive](#inicialresp)
   * [Tecnologias usadas](#tecs)
  * [Como executar na sua máquina](#executar)
      * [Conhecendo o cli do react](#conhecendo)
      * [Instalando o cli do react](#instalando)
         * [Instalando com Yarn](#instyarn)
         * [Instalando com Npm](#instnpm)
      * [Criando a app com o cli do React](#criando)
         * [Criando com create-react-app](#createreact)
         * [criando com Npx](#criandocomnpx)
      * [Subindo App](#subindoapp)
         * [Subindo com Yarn](#subindocomyarn)
         * [Subindo com npm](#subindocomnpm)
  * [Getting Started with Create React App](#create)

***

<h2>Case 04 - front-end-challenge - Jogos da Loteria </h2>
<h4>A proposta do exercício de front-end da Brainn é ser simples e divertido.

<h4>Enunciado: 🇧🇷</h4>
<h4>Linguagens/Frameworks: React + Typescript opcional </h4>
<h4>Dificuldade: 💡</h4>
<h4>Tarefa: Resultados da Loteria.</h4>

<h4 align="right"><a href="#topo">Topo</a></h4>

***

<h2 id="desafio">O DESAFIO</h2>

***
> Desafio para os futuros front-end's

# Exercício de Front-end

## Introdução

A proposta do exercício de front-end da **Brainn** é ser simples e divertido.

<br>

## Exercício

O objetivo é construir uma **aplicação web front-end** que mostre os **Resultados das Loterias**.

### Recursos

- Layout: https://www.figma.com/file/H2qrYBCFMf4didYmxRwTxP/Brainn-Frontend-Challenge
- API: https://brainn-api-loterias.herokuapp.com
- Tipografia (webfont): [Montserrat](https://fonts.google.com/specimen/Montserrat)

### Requisitos & Funcionalidades

- A aplicação terá que suportar **6 sorteios**: `Mega-sena`, `Quina`, `Lotofácil`, `Lotomania`, `Timemania` e `Dia de sorte`
- Todos esses sorteios estarão em um combo-box/select
- Ao mudar esse combo-box, terá que mudar o **tema do sorteio**, **número do sorteio**, **data do sorteio** e **números sorteados**
- A aplicação terá que ser responsiva, pelo menos para celulares, conforme layout
- O consumo da API pode ser feito via REST ou GraphQL
- Criar rotas com React Router DOM (opcional)

### Tecnologias esperadas

- React com TypeScript
- Testes com React Testing Library e/ou Cypress

<br>

## Dúvidas

Se você possui alguma dúvida sobre o desafio, você pode entrar em contato por e-mail com o recrutamento que já estará acompanhando seu processo ou através do e-mail mariana@brainn.co.

<br>

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="naofuncionais">Requisitos não Funcionais</h2>

***

 🎥 O app deverá ser criado usando [React](https://reactjs.org/)

 Na raiz do projeto, será necessário incluir um arquivo README.md com as instruções para construir seu projeto localmente. Opcionalmente você pode detalhar as razões pelas escolhas de ferramentas e técnicas aplicadas ao desafio.

 🎥 O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge

 🎥 O app deverá ser responsivo

<h4 align="right"><a href="#topo">Topo</a></h4>

***

<h2 id="imagens">Imagens</h2>

<h3 align="center" id = "estrutura">Estrutura de Pastas e Arquivos</h3>

![image](https://user-images.githubusercontent.com/89301596/188340004-37ae05a8-cab5-4964-884c-ad448a13ef24.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 align="center" id = "inicial">Página Desktop Inicial - Mega-Sena</h3>

![image](https://user-images.githubusercontent.com/89301596/188340071-b158cb57-4706-4b97-8209-8dbcc4050fbf.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 align="center" id = "inicial">Página Desktop Quina</h3>

![image](https://user-images.githubusercontent.com/89301596/188340117-b6428172-7343-49c1-b40f-ffa5abacc09a.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 align="center" id = "inicial">Página Desktop LotoFacil</h3>

![image](https://user-images.githubusercontent.com/89301596/188340231-c88cafb6-11e5-4123-8fb0-0adb0f75547b.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 align="center" id = "inicial">Página Desktop LotoMania</h3>

![image](https://user-images.githubusercontent.com/89301596/188340280-2a146aa5-7ab4-4998-af88-27e8a93459f3.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 align="center" id = "inicial">Página Desktop TimeMania</h3>

![image](https://user-images.githubusercontent.com/89301596/188340324-c7c25656-1406-4abb-8a2d-929c66b9333b.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 align="center" id = "inicial">Página Desktop Dia de Sorte</h3>

![image](https://user-images.githubusercontent.com/89301596/188340353-5a7f30f1-6790-477b-923b-a5941f952fd4.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 align="center" id="inicialresp">Página Mobile inicial - Responsive</h3>

![image](https://user-images.githubusercontent.com/89301596/188340495-0c2bf736-22da-416e-9f2f-6a035568839d.png)


<h4 align="right"><a href="#topo">Topo</a></h4>

***

<h2 id="tecs">As seguintes tecnologias/ferramentas foram usadas na construção do projeto:</h2>

📌<a href="https://reactjs.org/" target="_blank">React</a>

📌<a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">CSS</a>

📌<a href="https://reactrouter.com/" target="_blank">react-router-dom</a>

📌<a href="https://styled-components.com/" target="_blank">styled-component</a>

📌<a href="https://axios-http.com/docs/intro" target="_blank">Axios</a>


***

<h2 id= "executar">Como executar na sua máquina</h2>
<br>

<h2 id="conhecendo">Conhecendo o cli do react</h2>

***

Como de costume, atualmente está sendo uma boa prática os frameworks possuírem um __cli (client)__ para ajudar na utilização do mesmo, assim como os outros o React também adotou esse padrão e criou seu cli, o famoso create-react-app. Com ele conseguimos criar uma aplicação em React, com boa parte das configurações realizadas (podem ser customizadas), com isso, conseguimos focar mais no aprendizado e desenvolvimento.

<h2 id="instalando">Instalando o cli do React</h2>

***
Para realizarmos a instalação do cli podemos realizar de duas maneiras: com **[yarn](https://blog.matheuscastiglioni.com.br/categoria/arquitetura/)** ou **[npm](https://www.npmjs.com/)**.

Não irei abordar como instalar ambos gerenciadores de pacotes ou dependência, porém, o processo instalação pode facilmente ser encontrado na documentação oficial de ambos.

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 id="instyarn"> Instalando com Yarn</h3>

***
Para realizar a instalação com Yarn, podemos rodar o comando global add:

```javascript
yarn global add create-react-app
```

<h3 id="instnpm">Instalando com npm</h3>

Para realizar a instalação com npm, podemos rodar o comando install -g ou i -g:
```javascript
npm install -g create-react-app
```
Ou
```javascript
npm i -g create-react-app
```
>Obs: Em ambos os casos estamos instalando o create-react-app como global, para que possa ser rodado em qualquer lugar do nosso terminal e compartilhado a mesma versão em todos os projetos (em alguns casos o pessoal preferem utilizar uma versão para cada projeto).

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="criando">Criando a app com o cli do react</h2>

***
Pronto, agora que já temos nosso cli instalado, podemos finalmente criar a nossa app, o processo pode ser feito de duas maneiras diferentes, sendo elas: com o create-react-app ou npx.

A única diferença é que com o create-react-app precisamos tê-lo instalado em nossa máquina, agora o npx irá executar o create-react-app sem instalá-lo na máquina local.

<h3 id="createreact">Criando com create-react-app</h3>

***
Para criar uma aplicação com o create-react-app podemos fazer de duas maneiras: Em uma pasta já existente ou em uma nova pasta.

#### Criando em uma nova pasta

Para criarmos a aplicação (estou chamando de aplicação para melhor entendimento do post), em uma nova pasta apenas rodamos o create-react-app seguido pelo noma da aplicação:

```javascript
create-react-app minha-primeira-app
```
[![asciicast](https://asciinema.org/a/7LyJl6oJdxUKh9wcQ1aPDf1px.svg)](https://asciinema.org/a/7LyJl6oJdxUKh9wcQ1aPDf1px)

<h4 align="right"><a href="#topo">Topo</a></h4>

### Criando em uma pasta já existente

***
Assim como podemos criar uma nova pasta, também podemos utilizar uma pasta já existente para criar nossa aplicação em React. A diferença é que devemos navegar até a pasta pelo terminal (cd caminho_ate_a_pasta) e em vez de passar um nome para o create-react-app passamos um . (para referenciar a pasta atual):

```javascript
create-react-app .
```

[![asciicast](https://asciinema.org/a/mxaR9nEp8CEjd97GPdBwny945.svg)](https://asciinema.org/a/mxaR9nEp8CEjd97GPdBwny945)
<h3 id="criandocomnpx">Criando com npx</h3>

***
Além de utilizar o create-react-app já instalado na máquina, podemos pedir para o npx executá-lo e criar nossa aplicação, nesse caso a instalação do create-react-app não precisa e nem será feita:

```javascript
npx create-react-app minha-primeira-app
```
[![asciicast](https://asciinema.org/a/xAvouJ8DhoI8ELZc20LRX4nBN.svg)](https://asciinema.org/a/xAvouJ8DhoI8ELZc20LRX4nBN)

>Obs: A opção de utilizar uma pasta já existente, também vale para o npx e deve ser feita da mesma maneira, apenas adicionando o npx na frente do comando, ou seja, precisamos navegar até a pasta (cd) para executar o comando e passar um . em vez de um nome.

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="subindoapp">Subindo nossa app</h2>
Com a nossa aplicação criada, podemos subí-la de duas maneiras, através do yarn ou npm, isso vai depender da sua preferência ou gosto por um desses gerenciadores de pacote.

<h3 id="subindocomyarn">Subindo app com yarn</h3>
Para subir a app utilizando o yarn precisamos apenas rodar o comando start:

```javascript
yarn start
```
<h3 id="subindocomnpm">Subindo app com npm</h3>

De forma semelhante ao yarn, com o npm precisamos também rodar o start:
```javascript
npm start
```
ou
```javascript
npm run start
```
Em ambos os casos, assim que nossa app subir, o navegador será automaticamente aberto com uma página principal padrão (default) do React.

![image](https://user-images.githubusercontent.com/89301596/180660775-7ba2d02d-a913-4d4d-a8d6-bf905a4137fa.png)

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id = "create">Getting Started with Create React App</h2>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<h4 align="right"><a href="#topo">Topo</a></h4>