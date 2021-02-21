INSERT INTO users (surname, firstname, email, psw)
VALUES ('Anyone', 'Someone', 'anyemail@gmail.com', 'pswrdsa12341dccv');

INSERT INTO users (surname, firstname, email, psw)
VALUES ('Elly', 'Someone1', 'any1email@gmail.com', 'blahblah');

INSERT INTO schedules (ID_user, week_day, start_at, end_at)
VALUES ('1', '2', '2021-06-22 12:10:25+11', '2021-06-22 19:10:00+11');

INSERT INTO schedules (ID_user, week_day, start_at, end_at)
VALUES ('2', '3', '2021-06-23 05:10:25+11', '2021-06-22 11:10:00+11');

--SUCCESSFULLY IMPLEMENT TIMESTAMPTZ DATA