
### Exercício 1
```
CREATE TABLE Actor(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);
```
 #### Mostra as tables que você tem criadas no seu banco de dados 
 SHOW TABLES;
 #### Mostrou a minha database
 SHOW DATABASES;
 #### Mostra as propriedades da tabela
  DESCRIBE Actor;
  
  ### Exercicio 2
  ```
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```
#### a)
```
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
#### b)
#### Error code:1062. Duplicate entry '002' for key 'PRIMARY', esse erro ocorre pois a id é única 
```
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Joana",
  1200000,
  "1963-08-23", 
  "female"
);
```
#### c)
#### Error code:1136. Column count doesn't match value count at row1
#### Faltou  informar todos os paramêtros 
```
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
#### Query corrijida
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
#### d) 
#### Error Code:1364. Field 'name' doesn't have a default value
#### o nome é obrigatório e não foi passado 
```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```
#### Query resolvida
```
INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Lucas",
  400000,
  "1949-04-18", 
  "male"
);
```
#### e)
#### Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
#### O erro aparece pois a data não foi passada em string
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```
#### Query arrumado
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
#### f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Timothee Chalamet",
  719333.33,
  "1995-12-27", 
  "male"
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Anne Hathaway",
  819333.33,
  "1982-11-12", 
  "female"
);
```
### Exercicio 3
```
SELECT * FROM Actor; 
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";
```
#### a)
```
SELECT * FROM Actor WHERE gender = "female";
```
#### b)
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```
#### c)
#### retornou uma row com os valores das propriedades como 'null'
```
SELECT * FROM Actor WHERE gender = "ivalid";
```
#### d)
```
SELECT id, name, salary from Actor WHERE salary <= 500000;
```
#### e)
#### Error Code:1054. Unknown column 'nome' in 'field list'
#### está escrito 'nome' em vez de 'name'
```
SELECT id, nome from Actor WHERE id = "002";
```
-- CORRIGIDO
```
SELECT id, name from Actor WHERE id = "002";
```
-- Exercicio 4
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
 -- a) a query acima limita os pre-requisitos de inicial e de salário para retoranr os dados de atores que se encaixam nos parametros estabelecidos
```
#### b)
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```
#### c)
```
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```
#### d)
```
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
  ```
  ### Exercicio 5
  #### a)
  ``` 
  CREATE TABLE Filme(
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
sinopse  TEXT NOT NULL,
data_lancamento DATE NOT NULL,
avaliacao int NOT NULL
);
```
#### b)
```
INSERT INTO Filme (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06", 
  7
);
```
```
INSERT INTO Filme (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/12/27", 
  10
);
```
```
INSERT INTO Filme (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02", 
  8
);
```
```
INSERT INTO Filme (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
  "004", 
  "Call Me By Your Name",
  "O jovem Elio está enfrentando outro verão preguiçoso na casa de seus pais na bela e lânguida paisagem italiana. Mas tudo muda com a chegada de Oliver, um acadêmico que veio ajudar a pesquisa de seu pai.",
  "2017/01/18", 
  10
);
```
```
SELECT * FROM Filme;
``` 
-- a)
```
SELECT id, nome,avaliacao from Filme WHERE id = "004";
```
-- b)
```
SELECT * FROM Filme WHERE nome ="Call Me By Your Name";
```
-- c) 
```
SELECT * FROM Filme WHERE avaliacao > 7;
```

### Exercicio 7
#### a)
```
SELECT * FROM Filme WHERE nome LIKE "%vida%";
```
#### b)
```
SELECT * FROM Filme WHERE nome LIKE "%Elio%" or sinopse LIKE "%Elio%";
```
#### c)
```
SELECT * FROM Filme
WHERE data_lancamento < "2022-08-22";
```
#### d)
```
SELECT * FROM Filme
WHERE data_lancamento < "2022-08-22" AND 
      (nome LIKE "%vida%" OR
      sinopse LIKE "%vida%") AND avaliacao > 7;
```
