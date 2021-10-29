INSERT INTO users (email, pass, sum, created)
VALUES
("rew@mail.ru", MD5("user3"), 45, '2021-05-25') AS alias
ON DUPLICATE KEY UPDATE pass = alias.pass, sum = alias.sum, created = alias.created
