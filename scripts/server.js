/* eslint-disable no-undef */
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.get('/api/getAvgDataByYear', (req, res) => {
  const year = req.query.year;
  const sqlQuery = 'SELECT * FROM hdb_resale_avg_year WHERE transact_year = ?';
  db.query(sqlQuery, [year], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getYear', (req, res) => {
  const sqlQuery = 'SELECT DISTINCT(transact_year) FROM hdb_resale_avg_year ORDER BY transact_year DESC';
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getAvgDataByTown', (req, res) => {
  const town = req.query.town;
  const sqlQuery = 'SELECT * FROM hdb_resale_avg_town WHERE town = ?';
  db.query(sqlQuery, [town], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getTown', (req, res) => {
  const sqlQuery = 'SELECT DISTINCT(town) FROM hdb_resale_avg_town ORDER BY town ASC';
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});