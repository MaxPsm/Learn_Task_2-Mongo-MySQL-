SET SQL_SAFE_UPDATES = 0;
	UPDATE users 
	SET sum = sum + 10 WHERE email = "rew@mail.ru";
