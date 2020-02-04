import { createPool } from 'mysql2/promise';
//Env variables.
const dotenv = require('dotenv');
dotenv.config();
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.env;


// MySQL connection
export async function connect(){
    
    const connection = await createPool({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: MYSQL_DB,
        connectionLimit: 10
    });

    return connection;

}