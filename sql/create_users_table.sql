DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS schedules;

CREATE TABLE IF NOT EXISTS users (
    user_id serial PRIMARY KEY,
    surname VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    psw VARCHAR(100) NOT NULL
);


CREATE TABLE IF NOT EXISTS schedules (
    unique_key serial PRIMARY KEY,
    ID_user INT NOT NULL,
    week_day INT CHECK (week_day >= 1 AND week_day <= 7),
    start_at TIMESTAMPTZ NOT NULL,
    end_at TIMESTAMPTZ NOT NULL
);