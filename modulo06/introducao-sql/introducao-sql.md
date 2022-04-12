# Banco de Dados e Introdução a SQL
---

### Exercício 1
```sql
CREATE TABLE Actor(
id VARCHAR (255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR (6) NOT NULL
);
```

#### a) - **VARCHAR**, **DATE**, **PRIMARY** **KEY** e **NOT** **NULL**:
  *  **VARCHAR**(N) - onde (n) é o número máximo de caracteres que o campo aceita.
  *  **DATE** - representa uma data (YYYY-MM-DD).
  *  **PRIMARY** **KEY** - Cada item deve possuir um identificador único, chamado de chave primária (Primary Key - PK).
  *  **NOT** **NULL** - O campo definido como NOT NULL precisa de algum valor na coluna, mesmo que seja um valor vazio como um "".

#### b) - **SHOW** **DATABASES** e **SHOW** **TABLES**:
  *  **SHOW** **DATABASES** = Ver os bancos de dados presentes no sistema.
  *  **SHOW** **TABLES** = Ver as tabelas do banco de dados atual.

#### c)  **DESCRIBE** Actor (**DESCRIBE**: Usado para conferir a estrutura de uma tabela, O comando **DESCRIBE** é um atalho para o comando **SHOW** **COLUMNS** **FROM**;)
  * O resultado foi a tabela apresentada abaixo:

  Field     |     Type   |  Null  |  Key  |  Default  |  Extra
  --------  |------------|--------|-------|-----------|--------
  id        |varchar(255)|NO      |PRI    |NULL       |        
  name      |varchar(255)|NO      |       |NULL       |        
  salary    |float       |NO      |       |NULL       |        
  birth_date| date       |NO      |       |NULL       | 
  gender    |varchar(6)  |NO      |       |NULL       | 


### Exercício 2
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001",
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

#### a) - Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963
```sql
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
    "002",
    "Glória Pires",
    1200000,
    "1963-07-23",
    "female");
```

#### b) - Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.
    R) - Quando tentamos usar o mesmo Id apresenta o erro de Key duplicada:
    *Error Code: 1062. Duplicate entry '2' for key 'PRIMARY'*
    *Código de erro: 1062. Entrada duplicada '2' para a chave 'PRIMARY'*

#### c) - Verificar e corrigir erro:
```sql
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
    R) - Error Code: 1136. Column count doesn't match value count at row 1 / Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
    A quantidade de colunas não corresponde à contagem de valores da linha 1 ou seja, tem 3 colunas na linha 1 e 5 valores para serem adicionados a tabela.

O correto seria:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

#### d) - Verificar e corrigir erro:
```sql
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```
    R) - Error Code: 1364. Field 'name' doesn't have a default value / Código de erro: 1364. O campo 'nome' não tem um valor padrão
    Nossa tabela tem 5 valores a serem preenchidos, e existe um item faltante nome, que esta definido como not null, portando ele é de preenchimento obrigatório.

O correto seria:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Francisco Cuoco",
  400000,
  "1949-04-18", 
  "male"
);
```

#### e) - Verificar e corrigir erro:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```
    R) - Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 / CCódigo de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
    Nossa tabela tem o campo birth_date definido como DATE mas a forma como ele esta sendo empregado é como se fosse um número.

O correto seria:
``` sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
``` 
### Exercício 3
#### a) - Escreva uma query que retorne todas as informações das atrizes:
```sql
SELECT * from Actor
WHERE gender = "female"
```
#### b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
```sql
SELECT name, salary FROM Actor
WHERE name = "Tony Ramos"
```
#### c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
```sql
SELECT gender FROM Actor
WHERE gender = "invalid"
```
    R) - Resposta veio como gender vazio, 0 row(s) returned

#### d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
```sql
SELECT id, name, salary FROM Actor
WHERE salary <= 500000
```
#### e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta.
```sql
SELECT id, nome from Actor
WHERE id = "002"
```
    R) - Error Code: 1054. Unknown column 'nome' in 'field list' / Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'
    Nossa tabela recebe paramento name, mas esta sendo solicitado o parametro nome

O correto seria:
```sql
SELECT id, name from Actor WHERE id = "002"
```
### Exercício 4
#### Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:
   * cujos nomes começam com "A" ou "J"
  * cujos salários são maiores do que R$300.000

```sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```
#### a) Explique com as suas palavras a query acima
     R) - Usamos o SELECT * FROM Actor para achar nossa tabela, depois usamos o campo name para localizar estes que começem com a letra A e o coringa % junto com o operador LIKE que serve para comparar strings ficando LIKE "A%", depois usamos o operador OR para adicionar mais uma condição e por fim a condição extra name LIKE "J%" e para terminar colocamos AND = e para trazer os salários maior que 300000 ficando AND salary > 300000
#### b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00.
```sql
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```
#### c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.
```sql
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");
```
#### d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00.
```sql
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%")
AND salary BETWEEN 350000 AND 900000;
```
### Exercício 5
#### a) - Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.
     R) - o Tipo TEXT, serve para armazenar strings de texto com maior capacidade que os tipo CHAR/VARCHAR. Temos 4 tipos de TEXT, TINYTEXT – 255 Bytes (255 caracteres), TEXT – 64KB (65.535 caracteres), MEDIUMTEXT – 16MB (16.777.215 caracteres) e LONGTEXT – 4GB (4.294.967.295 caracteres)
```sql
CREATE TABLE filmes (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
synopsis MEDIUMTEXT NULL,
launch DATETIME NOT NULL,
assessment INT (2)
)
```
#### b) c) d) - Crie 4 filmes com as seguintes informações e  e) Pesquise algum filme brasileiro e crie ele na tabela
```sql
INSERT INTO filmes (id, name, synopsis, launch, assessment)
VALUES (
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06",
  7
),
(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/12/27",
  10
),
(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02",
  7
),
(
  "004",
  "Central do Brasil",
  "Em Central do Brasil, Dora (Fernanda Montenegro) trabalha escrevendo cartas para analfabetos na estação Central do Brasil, no centro da cidade do Rio de Janeiro. Ainda que a escrivã não envie todas as cartas que escreve - as cartas que considera inúteis ou fantasiosas demais -, ela decide ajudar um menino (Vinícius de Oliveira), após sua mãe ser atropelada, a tentar encontrar o pai que nunca conheceu, no interior do Nordeste.",
  "1998/04/03",
  8.5
),
(
  "005",
  "Deus é Brasileiro",
  "Cansado de tantos erros cometidos pela humanidade, Deus resolve tirar férias dela, decidindo ir descansar em alguma estrela distante. Para isso, precisa encontrar um substituto para ficar em seu lugar enquanto estiver fora. Ele resolve então procurá-lo no Brasil, já que é país tão religioso. Seu guia nessa busca é Taoca, um esperto pescador que vê em seu encontro com Deus sua grande chance de se livrar dos problemas pessoais. Juntos eles rodam o Brasil em busca de um substituto ideal.",
  "2002/10/05",
  8.5
)
```
### Exercício 6 - Escreva uma query que:

#### a) Retorne o id, título e avaliação a partir de um id específico;
```sql
SELECT id, name, assessment FROM filmes
WHERE id = 2;
```
#### b) Retorne um filme a partir de um nome específico;
```sql
SELECT id, name, synopsis, launch, assessment FROM filmes
WHERE name = "Se Eu Fosse Você";
```
#### c) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`
```sql
SELECT id, name, synopsis, assessment FROM filmes
WHERE assessment >=7;
```
### Exercício 7 - Escreva uma query que:

#### a) Retorna um filme cujo título contenha a palavra `vida`
```sql
SELECT * FROM filmes
WHERE title LIKE "%vida%";
```
    R) - Não existe nenhum filme com a palavra vida no título.

#### b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.
```sql
SELECT * FROM filmes
WHERE name LIKE "%Brasil%" OR synopsis LIKE "%Brasil%";
```
#### c) Procure por todos os filmes que já tenham lançado
```sql
SELECT * FROM filmes
WHERE launch < now() ;
```
#### d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.
```sql
SELECT * FROM filmes
WHERE launch < now() AND (name LIKE "%Brasil%" OR synopsis LIKE "%Brasil%") AND assessment >= 7 ;
```