CREATE TABLE users (
    user_id serial PRIMARY KEY,
    surname VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    psw VARCHAR(100) NOT NULL
);
CREATE TABLE schedules (
    user_id serial PRIMARY KEY,
    ID_user INTEGER(100) NOT NULL,
    week_day VARCHAR(50) NOT NULL,
    start_at TIMESTAMP WITH TIME ZONE(100) NOT NULL,
    end_at TIMESTAMP WITH TIME ZONE(100) NOT NULL
);