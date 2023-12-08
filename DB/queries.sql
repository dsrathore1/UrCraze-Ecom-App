-- Active: 1702042465782@@127.0.0.1@5432@UC_ADMIN

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE
    IF NOT EXISTS CONTACT_DETAILS (
        uid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        ID SERIAL NOT NULL,
        NAME VARCHAR(80) NOT NULL,
        EMAIL VARCHAR(70) UNIQUE NOT NULL,
        MSG TEXT NOT NULL,
        QUERY_ON TIMESTAMP CURRENT_TIMESTAMP DEFAULT
    );

INSERT INTO
    CONTACT_DETAILS(ID, NAME, EMAIL, MSG)
VALUES (
        DEFAULT,
        'JOHN DOE',
        'johndeo@gmail.com',
        'I am john deo here i am inserting text for checking database connection is properly done or not!'
    );

SELECT * FROM contact_details;