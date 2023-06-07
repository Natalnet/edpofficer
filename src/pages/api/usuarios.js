import pool from '../../lib/db'

export default async function handler(req, res) {
  const con  = await pool.connect();
  const result = await con.query('SELECT * FROM usuario');
  con.release();
  res.status(200).json(result.rows)
}
