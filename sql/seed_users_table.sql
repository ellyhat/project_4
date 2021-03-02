--Seed tables with initial data

INSERT INTO users (surname, firstname, email, psw)
VALUES ('Simpson', 'Bart', 'itsbart@gmail.com', '489f719cadf919094ddb38e7654de153ac33c02febb5de91e5345cbe372cf4a0'); --happy

INSERT INTO users (surname, firstname, email, psw)
VALUES ('James', 'Rick', 'itsrick@gmail.com', 'a941a4c4fd0c01cddef61b8be963bf4c1e2b0811c037ce3f1835fddf6ef6c223'); --sunshine

INSERT INTO users (surname, firstname, email, psw)
VALUES ('Knowles', 'Beyonce', 'itsbeyonce@gmail.com', '80f189984e5ca70287d13342f6daa0db45cba3c131c4e46dc81360f3a4c4f690'); --music

INSERT INTO schedules (user_id, week_day, start_at, end_at)
VALUES ('1', '2', '2021-06-22 12:10:25+11', '2021-06-22 19:10:00+11');

INSERT INTO schedules (user_id, week_day, start_at, end_at)
VALUES ('1', '2', '2021-07-22 12:10:25+11', '2021-07-22 19:10:00+11');

INSERT INTO schedules (user_id, week_day, start_at, end_at)
VALUES ('2', '3', '2021-06-23 05:10:25+11', '2021-06-22 11:10:00+11');

INSERT INTO schedules (user_id, week_day, start_at, end_at)
VALUES ('3', '6', '2021-06-21 05:10:25+11', '2021-06-21 11:10:00+11');

-- CREATE TABLE combined AS 
-- SELECT users.*,  schedules.week_day, schedules.start_at, schedules.end_at, schedules.unique_key 
-- FROM users LEFT JOIN schedules ON 
-- users.user_id = schedules.user_id; 


