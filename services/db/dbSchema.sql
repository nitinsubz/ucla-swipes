DROP TABLE start_dates, starting_swipes, swipe_exceptions;

CREATE TABLE start_dates (
    id SERIAL PRIMARY KEY,
    quarter TEXT NOT NULL UNIQUE,
    start_date TEXT NOT NULL UNIQUE
);

CREATE TABLE starting_swipes (
    id SERIAL PRIMARY KEY,
    quarter TEXT NOT NULL,
    plan TEXT NOT NULL,
    intial_swipes TEXT NOT NULL
);

CREATE TABLE swipe_exceptions (
    id SERIAL PRIMARY KEY,
    quarter TEXT NOT NULL,
    plan TEXT NOT NULL,
    date TEXT NOT NULL,
    actual_swipes SMALLINT NOT NULL,
    expected_swipes SMALLINT NOT NULL
);