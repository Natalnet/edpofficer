
const { Pool } = require('pg');

let pool;

if(!pool) {
  pool = new Pool({
  connectionString: process.env.DB_CON
});
}

export default pool ;