import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const client = new pg.Pool({
    host: process.env.PSQL_HOST,
    port: process.env.PSQL_PORT,
    user: process.env.PSQL_USER,
    database: process.env.PSQL_DB,
    password: process.env.PSQL_PWD,
});

export default client;