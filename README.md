# Learn_Task_2-Mongo-MySQL-

1. Отобразите поля идентификатор ресторана, название, район и кухню для всех документов.
2. Отобразите поля идентификатор ресторана, название, район и кухню, но исключите поле _id для всех документов.
3. Отобразите все рестораны, которые находятся в районе Bronx.
4. Отобразите следующие 5 ресторанов после пропуска первых 5, которые находятся в районе Bronx.
5. Найдите рестораны, набравшие более 90 баллов.
6. Найдите рестораны, которые набрали более 80, но менее 100 баллов.
7. Найдите рестораны, которые находятся по широте менее -95.754168.
8. Найдите рестораны, которые не готовят американскую кухню, хотя бы раз набрали более 70 баллов и находятся по широте менее -65,754168.
9. Найдите рестораны, которые не готовят американскую кухню, набрали хотя бы один раз более 70 баллов и находятся по долготе более 35.754168. Выполните запрос без использования оператора $and.
10. Найдите рестораны, которые не готовят «американскую» кухню, хотя бы раз получили оценку «А» и не принадлежат району Brooklyn. Документы должны отображаться в соответствии с кухней в порядке убывания.
11. Найдите идентификатор ресторана, название, район и кухню для тех ресторанов, которые в качестве первых трех букв в названии ресторана используют «Wil».
12. Найдите рестораны, которые относятся к району Bronx и готовят американские или китайские блюда.
13. Найдите идентификатор ресторана, название, район и кухню для тех ресторанов, которые относятся к районам Staten Island, Queens, Bronx или Brooklyn.
14. Найдите идентификатор ресторана, название, район и кухню для тех ресторанов, которые не относятся к районам Staten Island, Queens, Bronx или Brooklyn.
15. Найдите идентификатор ресторана, название, район и кухню для тех ресторанов, которые ни разу не набрали более 10 баллов.
16. Найдите идентификатор ресторана, название, район и кухню для тех ресторанов, в которых готовят любую кухню, кроме американской и китайской, или название ресторана начинается с букв «Wil».
17. Найдите идентификатор ресторана, название и оценки для тех ресторанов, которые достигли оценки «А» и набрали 11 баллов по ISODate «2014-08-11T00:00:00Z».
18. Найдите идентификатор ресторана, название и оценки для тех ресторанов, где 2-й элемент массива оценок содержит оценку «А» и набрал 9 баллов по ISODate «2014-08-11T00:00:00Z».
19. Напишите запрос, чтобы расположить название кухни в порядке возрастания, а для этой же кухни район должен быть в порядке убывания.
20. Напишите запрос, чтобы узнать, есть ли рестораны у которых нету улицы. Нужно вывести число таких ресторанов.
21. Найдите идентификатор ресторана, название и оценки для тех ресторанов, которые возвращают 0 в качестве остатка после деления баллов на 7.
22. Напишите запрос, чтобы найти название ресторана, район, координаты и кухню для тех ресторанов, в которых где-то в названии есть последовательность букв «mon».
23. Напишите запрос, чтобы найти название ресторана, район, координаты и кухню для тех ресторанов, в которых первые три буквы названия - «Mad».


2. Основы MySQL
1. Создать UTF8 базу данных test
2. Создать в базе test UTF8 таблицу users с полями:
id: auto increment
email
pass: md5 от пароля
sum: деньги, целое число
updated: дата время изменения пользователя, должно проставляться автоматически при изменении данных
created: дата время создания пользователя, ставится руками при добавлении
3. Создать несколько пользователей, дата создания должна отличаться мин на 1 день + 1 запись на сегодня
4. Сделать выборки:
а) пользователь с email=XXXX
b) выбрать всех созданных сегодня пользователей
c) посчитать сколько было зарегистрировано пользователей за каждый день
d) посчитать сумму денег всех пользователей
5. Изменить деньги пользователей:
a) по id
b) по email
c) всех которые были созданы в прошлом месяце
6. Добавить уникальный ключ по полю email
7. Добавить нового пользователя, но если пользователь с таким email уже есть, то обновить его данные. on duplicate
8. Вывести все доступные базы данных
9. Вывести список таблиц
10. Вывести описание таблицы users
11. Получить команду создания таблицы users
12. Добавить в таблицу users поле sex после поля pass, которое может принимать три значения: 'unknown', 'M', 'F'. По умолчанию должно быть 'unknown'.
13. Изменить поле sum с целых на дробные
14. Переименовать поле sum в money
