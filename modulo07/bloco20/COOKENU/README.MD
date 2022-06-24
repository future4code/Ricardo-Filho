<h1 id="topo">Autorização e user roles</h1>

---

## O que esperamos que você entenda com  essa aula?

- Entender sobre autorização, com o conceito de User Roles.

---

## Exercícios

### O que funciona

   * [Exercício 1](#exec1)
      * [a) Alterar tabela de usuários](#tabela)
      * [b) Alterar os types](#types)
      * [c) Alterar cadastro de usuário](#cadastro)
      * [d) Alterar login de usuário](#cadastro)
  * [Exercicio 2](#exer2)
      * [a) Alterar endpoint erro Unauthorized](#Unauthorized) 


- 📖 Enunciado
    
### Instruções gerais
    
No exercício de hoje, vamos treinar as modificações que fizemos na aula: criar *User Roles*. Você pode usar o template de aula ou fazer o projeto do zero, a partir de uma pasta que você mesmo criar. Para isso, reunimos as instruções principais aqui:
    
<h4 align="right"><a href="#topo">Topo⬆️</a></h4>
            
### Agora, faça os exercícios propostos
    
    Durante os exercícios, vamos fazer algumas perguntas para você. Responda-as em um arquivo *markdown* (veja as instruções no notion das semanas anteriores, caso precise).
    
  
### Exercício 1
        
Agora, vamos pensar em um pouco nas funcionalidades relacionadas aos tipos de usuário. Para isso, vamos ter que fazer umas modificações no banco de dados.


<h3 id="tabela">Alterar tabela de usuários</h3>

Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*


![image](https://user-images.githubusercontent.com/89301596/174913509-447b855d-a7b6-480d-b0d4-73c357f40ee2.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

<h3 id="types">Alterar os types</h3>

b) *Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*

![image](https://user-images.githubusercontent.com/89301596/174913575-990162ed-1847-4768-8aad-8b11426bb3fc.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

<h3 id="cadastro">Alterar cadastro de usuário</h3>

c) *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*

![image](https://user-images.githubusercontent.com/89301596/174909582-a1d0fc6d-8593-4812-8eca-2868ff67d03b.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

<h3 id="login">Alterar login de usuário</h3>

d) *Altere o login para criar o token com o `role` do usuário*

![image](https://user-images.githubusercontent.com/89301596/174909672-0544cded-5d23-48f1-bc75-fad6a237bbb7.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

        
### Exercício 2
        
Agora, vamos usar esse `role` no endpoint `/user/profile`. Somente o usuários "normais" podem acessar esse endpoint. 

<h3 id="Unauthorized">Alterar endpoint erro Unauthorized</h3>

a) *Altere o endpoint para que retorne um erro de `Unauthorized` para os usuários que "não sejam normais" e tentem acessar esse endpoint*

![image](https://user-images.githubusercontent.com/89301596/174910327-7cfa8e46-4888-432c-a4b6-c34e9d093bf2.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

<h1 id="imagens">Imagens</h1>

### Estrutura de pastas
![image](https://user-images.githubusercontent.com/89301596/174909017-3272f205-227c-48ca-a719-2b3ab0765347.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

### UserBusiness - createUser
![image](https://user-images.githubusercontent.com/89301596/174909582-a1d0fc6d-8593-4812-8eca-2868ff67d03b.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

### UserBusiness - loginUser

![image](https://user-images.githubusercontent.com/89301596/174909672-0544cded-5d23-48f1-bc75-fad6a237bbb7.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

### UserBusiness - profile

![image](https://user-images.githubusercontent.com/89301596/174909768-1b63c362-764c-48ac-94e7-1e5011fbc649.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>


### UserController - signup

![image](https://user-images.githubusercontent.com/89301596/174910208-95045e04-506a-475f-a566-0583e0e21119.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

### UserController - profile

![image](https://user-images.githubusercontent.com/89301596/174910327-7cfa8e46-4888-432c-a4b6-c34e9d093bf2.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

### userRouter - routes

![image](https://user-images.githubusercontent.com/89301596/174910444-81dff9f3-015c-4775-90c5-88475fac943e.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

### UserDatabase - insertUser

![image](https://user-images.githubusercontent.com/89301596/174910553-adf42f8c-c450-45ae-9591-26a6c5f9918c.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

### UserDatabase - findUserByEmail

![image](https://user-images.githubusercontent.com/89301596/174910647-a1b56c65-50fd-44b6-a518-5e53885e0499.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

### Authenticator.ts

![image](https://user-images.githubusercontent.com/89301596/174910762-47a0fd23-79dd-4c42-9dbe-d2269ca00b52.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

### generateID.ts

![image](https://user-images.githubusercontent.com/89301596/174910963-9170a55f-a004-4351-87d3-855041e941f9.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

### HashManager.ts

![image](https://user-images.githubusercontent.com/89301596/174911056-c0e6b1ef-b30c-4a86-a247-ff259162fc56.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

### TokenGenerator.ts 

![image](https://user-images.githubusercontent.com/89301596/174911184-eeaaea2a-58ca-4311-b2e4-80e63326b700.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

### resquest.rest

![image](https://user-images.githubusercontent.com/89301596/174911313-be671f89-aeac-4721-bbef-9c89340ea1cc.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>