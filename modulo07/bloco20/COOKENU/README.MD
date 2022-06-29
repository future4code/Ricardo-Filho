<image src="https://user-images.githubusercontent.com/89301596/175681824-4d8ec6fe-dc0e-4505-a9cf-aac4f456af49.png" style= "width: 70px">

<h1 id="topo"> NWFS - Cookenu</h1>

* [Exercicio da Semana](#sobre)
   
   * [Enunciado](#enunciado)

   * [O que funciona](#funciona)
       * [1 - Cadastro](#cadastro)
       * [2 - Pegar todos os usuários](#getusers)
       * [3 - Login](#login)
       * [4 - Buscar o próprio perfil](#getprofile)
       * [5 - Criar Receita](#receita)


  * [O que ainda não funciona](#nfunciona)

  * [Desafios](#ndesafios)
      * 5. Seguir Usuário](#follow)
      * 6. Deixar de seguir usuário](#followout)
      * 6. Ver todo o Feed](#feedfriends)
      * 7. Ver apenas um tipo de post do Feed
      * 8. Curtir Post
      * 9. Descurtir Post
      * 10. Comentar Post
<h2 id="sobre">Exercício da Semana</h2>

Você sabia que está ficando mais relevante no mundo de devs? Quanto mais e mais projetos você faz, mais tem clientes te divulgando por aí!

De manhã, você acordou, tomou uma bela xícara de café, verificou sua caixa de email e viu que tinha mais uma proposta de *Freela*. *Freela* vem de *Freelancer*, que é um trabalhador autônomo que sempre trabalha em projetos diferentes. Dessa vez, um cliente deseja te pagar muito bem para implementar o *Cookenu*.

<h4 align="right"><a href="#topo">Topo</a></h4>

<h3 id="enunciado">Enunciado</h3>

Esse produto nada mais é do que uma rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado. Ela possui todas as funcionalidades mais comuns em redes sociais:

<h4 align="right"><a href="#topo">Topo</a></h4>
    
<h2 id="cadastro">1. Cadastro</h2>
        
Como o projeto está no início, o usuário só precisa informar: o e-mail, nome a sua senha para realizar o cadastro. A senha tem uma regra: ela deve conter, no mínimo, 6 caracteres.

<h2 id="login">2. Login</h2>
     
Basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. Os endpoints de login e cadastro devem retornar **um** **token.**

<h2 id="getprofile"> 3. Informações do próprio perfil</h2>
        
A partir do token de autenticação fornecido no login, o usuário deve ser capaz de ver as suas informações não sensíveis salvas no banco (id e email)

<h2 id="receita">4. Criar receitas</h2>
        
O usuário deve poder criar uma receita. A receita deve ter os seguintes atributos: título, descrição/modo de preparo e data de criação

5. Seguir usuário
        
Um usuário deve poder seguir outros usuários. Para isso, ele deve fornecer o id do usuário que deseja seguir. Atente-se que essa funcionalidade se assemelha ao do instagram: um usuário seguir outro, não significa que "esse outro" está seguindo o primeiro.

6. Feed
        
Um usuário deve poder visualizar as receitas criadas pelos usuários que ele segue. As receitas devem estar ordenadas pela data de criação.
         
       
<h4 align="right"><a href="#topo">Topo</a></h4>

Todos os endpoints, com exceção do Signup e Login, devem exigir autenticação.

- **Signup**
      
O seu código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos
O seu código deve gerar o id do usuário
    
- **Login**
           
O seu código deve validar se os dois campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos
    
- **Pegar próprio perfil**
    
    
- **Pegar perfil de outro usuário**
      
- **Criar receita**

Perceba que, no banco de dados, devemos guardar a data de criação da receita, mas o usuário não envia. Você deve assumir que a receita foi criada no momento em que o usuário bate nessa requisição
    
- **Pegar receita**             
   
- **Desafios**
     
- **Seguir usuário**

Observações:
Você deve verificar se o id do usuário é válido (se não está vazio ou se não foi enviado)

- **Deixar de seguir usuário**
  
Observações:
Você deve verificar se o id do usuário é válido (se não está vazio ou se não foi enviado)

**Pegar feed de receitas**

**Criar mais um tipo de usuário**
        
Agora, você deve adicionar na sua aplicação um role para representar o tipo de usuário. Faça as alterações necessárias no signup, login e geração do token

Daqui para baixo, há somente a descrição do que cada uma das funcionalides faz. Agora é pensar com calma e:

- Definir se um endpoint é suficiente;
- Escolher o método/verbo;
- Criar validações de input;
- Definir o formato de saída;
- Verificar se algum outro endpoint deverá ser modificado
  
      
- **Editar receita**

- **Deletar receita**

- **Deletar conta**
        
- **Esqueci a senha**