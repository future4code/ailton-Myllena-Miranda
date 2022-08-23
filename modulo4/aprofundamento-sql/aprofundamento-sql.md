### Exercício 1
```
SET SQL_SAFE_UPDATES = 0;
ALTER TABLE Actor ADD tipo_sorvete_favorito VARCHAR(255);
SELECT * FROM Actor;
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
ALTER TABLE Actor CHANGE tipo_sorvete_favorito favorite_ice_cream_flavor VARCHAR(255);
 a) ALTER TABLE Actor DROP COLUMN salary;
 altera a tabela apagando a propriedade "salary"
 b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
 Altera a propriedade "gender" para "sex", string com até 6 caracteres
 c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
 mantem a propriedade genter com um alimitação de até 255 caracteres
 d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100)
```
### Exercício 2
```
 a) 
UPDATE Actor
SET name = "Myllena"
WHERE id = "003";
 b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
 c)
UPDATE Actor 
SET 
    name = 'juju paes',
    salary = 500,
    birth_date = '2020-12-01',
    gender = 'male',
    favorite_ice_cream_flavor = 'chocolate',
    type = 'gabriel'
WHERE
    id = '005';
    
 d) 
    UPDATE Actor
SET oi = "Moacyr Franco"
WHERE id = "001";
 Error Code: 1054. Unknown column 'oi' in 'field list' campo desconhecido (não existe)
```
### Exercício 3
 ```
 a)
DELETE FROM Actor WHERE name = "Anne Hathaway";
 b)
DELETE FROM Actor WHERE salary > 1000000;
```
### Exercício 4
 ```
SELECT COUNT(*) AS quantidade_atores FROM Actor;
SELECT COUNT(*) AS atrizes FROM Actor WHERE gender = "female";
SELECT AVG(salary) FROM Actor;
 a)
SELECT MAX(salary) FROM Actor;
 b) 
SELECT MIN(salary) FROM Actor WHERE gender="female";
 c)
SELECT COUNT(*) FROM Actor WHERE gender="female";
 d)
SELECT SUM(salary) FROM Actor; 
```
### Exercício 5
```
SELECT * FROM Actor LIMIT 3;
SELECT * FROM Actor ORDER BY name ASC;
SELECT * FROM Actor ORDER BY name ASC LIMIT 4;
SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
 a) Retorna a soma de cada grupo de genero, male & female
 b)
SELECT id, name FROM Actor ORDER BY name DESC;
 c)
SELECT * FROM Actor ORDER BY salary;
 d) 
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
 e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```
### Exercício 6
```
 a)
ALTER TABLE Filme ADD data_limite_filme DATE;
SELECT * FROM Filme;
 b)
ALTER TABLE Filme CHANGE avaliacao avaliacao FLOAT;
 c)
 UPDATE Filme
SET data_limite_filme = "2022-08-23"
WHERE id = "001";

 UPDATE Filme
SET data_limite_filme = "2020-08-23"
WHERE id = "002";
 d)
DELETE FROM Filme WHERE id ="001";
UPDATE Filme
SET sinopse = "e ai turubom"
WHERE id = "001";
 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
 Ele executa a ação mas nada é afetado na tabela pois ele não encontra a id informada
```
### Exercício 7
```
SELECT * FROM Filme;
 a)
SELECT COUNT(*) FROM Filme WHERE avaliacao > 7.5;
 b)
SELECT AVG(avaliacao) FROM Filme;
 c)
 UPDATE Filme
SET data_limite_filme = "2022-09-23"
WHERE id = "004";
SELECT COUNT(*) FROM Filme WHERE data_limite_filme > CURDATE();
 d)
SELECT COUNT(*) FROM Filme WHERE data_lancamento > CURDATE();
 e)
SELECT MAX(avaliacao) FROM Filme;
 f)
SELECT MIN(avaliacao) FROM Filme;
```
### Exercício 8
```
 a)
SELECT * FROM Filme ORDER BY nome;
 b)
SELECT * FROM Filme ORDER BY nome LIMIT 1;
 c)
SELECT * FROM Filme
ORDER BY avaliacao DESC
LIMIT 2;
```













