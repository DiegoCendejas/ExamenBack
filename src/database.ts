import keys from './keys';
import mysql from 'promise-mysql';
//var mysql = require('promise-mysql');
//var conn=null;
const pool = mysql.createPool(keys.database);
pool.getConnection().then(connection => {
    console.log('DB Connected');
    pool.releaseConnection(connection);
});

export default pool;