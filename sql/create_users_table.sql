DROP TABLE IF EXISTS schedules;

DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS combined;

CREATE TABLE IF NOT EXISTS users (
    user_id serial PRIMARY KEY,
    surname VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    psw VARCHAR(100) NOT NULL
);


CREATE TABLE IF NOT EXISTS schedules ( --cascades to drop (look into)
    unique_key serial PRIMARY KEY,
    user_id INT,
    week_day INT CHECK (week_day >= 1 AND week_day <= 7),
    start_at TIMESTAMPTZ NOT NULL,
    end_at TIMESTAMPTZ NOT NULL,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id) 
            REFERENCES users(user_id)
);

