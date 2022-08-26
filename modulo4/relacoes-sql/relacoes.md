`
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filme(id)
);
-- a) uma chave estrangeira referencia uma outra tabela e fica linkada a ela
-- b)
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Chorei muito!",
    7,
		"004"
); 
-- c) 

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "muito bom!",
    7,
		"001"
); 
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`ailton-myllena-miranda`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filme` (`id`))
-- o id do filme não existe
-- d)
ALTER TABLE Filme DROP COLUMN avaliacao;
DESCRIBE Filme;
-- e)
DELETE FROM Filme WHERE id ="004";
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`ailton-myllena-miranda`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filme` (`id`))
-- Não é possivel apagar um filme sem apagar o rating antes por conta da foreign key

-- Exercicio 2
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filme(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
DESCRIBE MovieCast;
-- A) ela cria uma tabela com 2 propriedades de tabelas diferentes, duas chaves estrangeiras na mesma tabela
-- b)
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
);
SELECT * FROM Actor;
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
    "001"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"003",
    "003"
);
-- c) dá erro
-- d) não permite

-- Exercício 3
SELECT * FROM Filme 
INNER JOIN Rating ON Filme.id = Rating.movie_id;
-- a ) A query acima "juntou" a informação da tabela filmes com a do rating 
--  O operador ON faz a ligação entre as foreign keys
-- b) 
SELECT m.id as movie_id, r.rate as rating FROM Filme m
INNER JOIN Rating r ON m.id = r.movie_id;

`