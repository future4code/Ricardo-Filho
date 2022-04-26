# Banco de Dados e Relações em SQL
---
### Exercício 1
<!---
No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações. 

As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação **1:N**. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela.
-->

#### a) - Chave estrangeira é a chave que permite a referência a registros oriundos de outras tabelas. Ou seja, é o campo ou conjunto de campos que compõem a chave primária de uma outra tabela

#### b) - Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

```sql

CREATE TABLE Rating (
  id VARCHAR(255) PRIMARY KEY,
  comment TEXT NOT NULL,
  rate FLOAT NOT NULL,
  movie_id VARCHAR(255),
  FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);
```

#### c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

        R) - Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`joy-419954-ricardo-filho`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`filmes_id`) REFERENCES `filmes` (`id`))
        R) - Não é possível adicionar ou atualizar uma linha pois não existe a referencia do Id da chave estrangeira.


#### d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

```sql
ALTER TABLE filmes DROP COLUMN rating;
```

#### e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
        R) - Não é possível deletar ou atualizar uma linha que faça referencia a chave primaria de outra tabela.

### Exercício 2

Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação **N:M.**

Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.

```sql
CREATE TABLE MovieCast (
filmes_id VARCHAR(255),
Actor_id VARCHAR(255),
FOREIGN KEY (filmes_id) REFERENCES filmes(id),
FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
##### a) - Explique, com as suas palavras, essa tabela.
        R) - Foi criada uma tabela que faça referencia entre os ids dos **Filmes** com os ids dos **Atores**.

##### b) - Crie, ao menos, 6 relações nessa tabela
```sql
INSERT INTO MovieCast (filmes_id, Actor_id) VALUES
    ("2","2"),
    ("4","2"),
    ("5","7"),
    ("1","1"),
    ("5","1"),
    ("2","6"),
    ("4","7");
```
|filmes_id|Actor_id|
|---------|--------|
2         |2       |
4         |2       |
5         |7       |
1         |1       |
5         |1       |
2         |6       |


##### c) - Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
```sql
INSERT INTO MovieCast (filmes_id, Actor_id) VALUES
    ("6","2");
```
        R) - Não foi possível adicionar ou atualizar pois não existe referencia entre um id inexistente oi inválido
##### d) - Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query

```sql
DELETE FROM Actor
WHERE id = "2";
```
        R) - Não foi possível excluir ou atualizar a linha pois ela tem ligação com outra tabela(MovieCast), usando uma chave estrangeira.

### Exercício 3

Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já **juntar** informações delas duas. Isso pode ser feito através do operador `JOIN`. 

Vamos começar estudando o `INNER JOIN`. Esse operador retorna somente os dados que possuem **correspondentes** **nas duas tabelas**. Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas respectivas avaliações, poderíamos fazer assim:

```sql
SELECT * FROM filmes 
INNER JOIN Rating ON filmes.id = Rating.filmes_id;
```
##### a) - Explique, com suas palavras, a query acima. O que é o operador ON?
id  |name              |synopsis  |launch    |play_limit_date  |id  |Comment   |rate  |filmes_id
----|------------------|----------|----------|-----------------|----|----------|------|----------
4   |Central do Brasil |...texto..|1998-04-03| null            |1   |Muito Bom!|7     |4 
2   |Doce de mãe       |...texto..|2012-12-27| null            |2   |bom!      |6     |2 

        R) - o INNER JOIN busca e retorna os registros que são comuns entre as tabelas.
        R) - ON representa uma ou mais JOIN condições pelas quais podemos combinar registros de uma tabela para outra.

##### b) - Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

```sql
select name, filmes.id, rate from filmes
inner join Rating on filmes.id = Rating.filmes_id;
```