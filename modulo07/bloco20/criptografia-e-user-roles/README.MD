# Criptografia

<h2 id="topo">Conteúdo</h2>

## O que esperamos que você entenda com essa aula?

- Com usar o bcryptjs para salvar a senha do usuário;

---

## Exercícios

   * [O que funciona](#funciona)
       * [1 - Exercicio 1](#exer1)
         * [a-1) - O que são os round e salt?](#rs)
         * [a-2) - Que valores são recomendados para o round](#vr)
         * [a-3) - Que valor você usou](#vru)
         * [a-4) - Por quê](#pq)
       * [2 - Exercicio 2](#exer2)
         * [a) - Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.](#signup)
         * [b) - Faça a alteração do primeiro endpoint](#pe)
         * [c) - Faça a alteração do segundo endpoint](#se)
         * [d) - No exercício da aula anterior, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.](#pf)
- 📖 Enunciado
    
    ### Instruções gerais
    
    No exercício de hoje, vamos treinar as modificações que fizemos na aula: adicionar a criptografia. Você pode fazer o projeto do zero, a partir de uma pasta que você mesmo criar. Para isso, reunimos as instruções principais aqui:
    
    ### Inicie o projeto por aqui
    
    <aside>
    ⚠️ **IMPORTANTE** ⚠️
    
    1) Crie uma branch **a partir da branch master** para trabalhar no exercício de hoje. O nome da branch de hoje deve ser: `criptografia-e-user-roles`
    
    2) Dentro da pasta do módulo atual, crie uma pasta chamada `criptografia-e-user-roles` para trabalhar no exercício de hoje
    
    3) Não esqueça de entregar o arquivo `requests.rest` com os endpoints!
    
    </aside>
    
    ### Agora, faça os exercícios propostos
    
    Durante os exercícios, vamos fazer algumas perguntas para você. Responda-as em um arquivo *markdown* (veja as instruções no notion das semanas anteriores, caso precise).
    
    <h2 id="exer1">- Exercício 1</h2>
        
        A primeira implementação que vamos fazer refere-se à função que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: *bcryptjs*. A principal vantagem dele é que é gerada uma string aleatória e atrelada à entrada da criptografia. Isso **impede** que se faça o ataque chamado de ***rainbow table*,** que consiste em montar uma tabela com infinitas possibilidades da saída do *hash*. 
        
        Abaixo, há o exemplo de uso da função de *hash*
        
        ```tsx
        import * as bcrypt from "bcryptjs";
        
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(s, salt);
        console.log("encrypted message: ", result);
        ```
        
    a) *O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

* <h3 id="rs">a-1): O que são os round e salt?</h3>
        * R): O `Cost` ou Round determina o tempo de execução do algorítimo e `Salt` nada mais é do que a sua garantia de que, dado um salt aleatório, a mesma senha nunca será igualmente hasheada duas vezes.
#

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

* <h3 id="vr">a-2): Que valores são recomendados para o round?</h3>
        * R): O valor padrão recomendado é 12
#

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

* <h3 id="vru">a-3): Que valor você usou?</h3>
        * R): 12
#

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

* <h3 id="pq">a-4): Por quê?</h3>
        * R): Porque é o valor padrão "12" da maioria das libs e quanto maior melhor para a segurança, mas demanda mais tempo de execução, deve ser utilizado levando-se em conta o equipamento utilizados.
#

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

        b) *Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 
        
        c) *Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

![image](https://user-images.githubusercontent.com/89301596/174416692-13197d09-bc15-4875-9132-bde68efab1e4.png)
            
<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

    - Exercício 2
        
        Na aula anterior, implementamos os endpoints de *signup* e *login* sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: **no cadastro**, antes de salvar o usuário no banco, temos que **criptografar** a senha, para que, no banco, não fique a senha em si. Já, **no login**, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de *Hash* para isso. 
        
<h3 id="signup">a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*</h3>

        R):  Devemos modificar primeiro o de cadastro "signup", para que o usuário já seja cadastrado e sua senha criptografada.

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

<h3 id="pe">b) *Faça a alteração do primeiro endpoint*</h3>

![image](https://user-images.githubusercontent.com/89301596/174416908-4a9e35ac-06f5-4218-ad9e-f55dec01840d.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

<h3 id="se">c) *Faça a alteração do segundo endpoint*</h3>

![image](https://user-images.githubusercontent.com/89301596/174416993-bbe6059c-9836-4a91-8de6-30271ffa1355.png)

<h4 align="right"><a href="#topo">Topo⬆️</a></h4>

<h3 id="pf">d) *No exercício da aula anterior, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*</h3>
        
        R):  Não precisa, pois ele apenas pega as informações sem precisar de criptografia
<h4 align="right"><a href="#topo">Topo⬆️</a></h4>