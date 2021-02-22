INSERT INTO users (surname, firstname, email, psw)
VALUES ('Anyone', 'Someone', 'anyemail@gmail.com', '489f719cadf919094ddb38e7654de153ac33c02febb5de91e5345cbe372cf4a0');

INSERT INTO users (surname, firstname, email, psw)
VALUES ('Elly', 'Someone1', 'any1email@gmail.com', 'a941a4c4fd0c01cddef61b8be963bf4c1e2b0811c037ce3f1835fddf6ef6c223');

INSERT INTO schedules (user_id, week_day, start_at, end_at)
VALUES ('1', '2', '2021-06-22 12:10:25+11', '2021-06-22 19:10:00+11');

INSERT INTO schedules (user_id, week_day, start_at, end_at)
VALUES ('2', '3', '2021-06-23 05:10:25+11', '2021-06-22 11:10:00+11');

--SUCCESSFULLY IMPLEMENT TIMESTAMPTZ DATA