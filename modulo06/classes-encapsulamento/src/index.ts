import { Request, Response } from 'express';
import UserAccount from './Class/UserAccount';
import { app } from "./App";
import Bank from './Class/Bank';


//1 - - Exercício 1
    //Analise a classe `UserAccount` abaixo. Perceba quais propriedades são públicas e
    //quais são privadas e responda as perguntas discursivas em comentários no arquivo `index.ts`
//a) - Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
// R: O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe..
// R: Fazendo uso de funções

  app.post('/user', async (req: Request, res: Response) => {
    try {
        const {cpf, name, age} = req.body
        const user = new UserAccount(cpf, name, age)
       
       res.status(201).send(user);
    } catch (error: any) {
       throw new Error(error.message);
    }
 });

 app.get('/user', async (req: Request, res: Response) =>{
   try {
      const dataBase = new Bank([],[])

      const result = dataBase.getAccount()

      res.send(result)
   } catch (error) {
       throw new Error(error.message);
   }
   
 }
 )
 //b) - Copie o código abaixo para o seu exercício de hoje;
 //crie uma instância dessa classe (dê o nome, cpf e idade
 //que você quiser). Quantas vezes a mensagem "Chamando o
 //construtor da classe User" foi impressa no terminal?
 // R: A mensagem aparece apenas uma vêz.

 //c) - c) Como conseguimos ter acesso às propriedades privadas de uma classe?
 // R: Usando o método getters