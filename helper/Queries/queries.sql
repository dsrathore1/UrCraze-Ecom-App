-- Active: 1702386478115@@127.0.0.1@5432@ur_craze@public

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE
    IF NOT EXISTS CONTACT_DETAILS (
        uid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        ID SERIAL NOT NULL,
        NAME VARCHAR(80) NOT NULL,
        EMAIL VARCHAR(70) UNIQUE NOT NULL,
        MSG TEXT NOT NULL,
        QUERY_ON TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

INSERT INTO
    CONTACT_DETAILS(ID, NAME, EMAIL, MSG)
VALUES (
        DEFAULT,
        'Mount Battle',
        'mountbattle@gmail.com',
        'I am mount battle here i am inserting text for checking database connection is properly done or not!'
    );

SELECT * FROM contact_details;

SELECT * FROM CONTACT_DETAILS WHERE EMAIL=LOWER('amirkhan354@gmail.com') OR EMAIL=UPPER('amirkhan354@gmail.com');


SELECT * FROM CONTACT_DETAILS WHERE ID=1;

DELETE FROM contact_details WHERE id=5;