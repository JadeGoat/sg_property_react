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

app.get('/api/getRentalDataByYear', (req, res) => {
  const year = req.query.year;
  const sqlQuery = 'SELECT * FROM hdb_rental_avg_year WHERE approval_year = ?';
  db.query(sqlQuery, [year], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getResaleDataByYear', (req, res) => {
  const year = req.query.year;
  const sqlQuery = 'SELECT * FROM hdb_resale_avg_year WHERE transact_year = ?';
  db.query(sqlQuery, [year], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getYearInRental', (req, res) => {
  const sqlQuery = 'SELECT DISTINCT(approval_year) FROM hdb_rental_avg_year ORDER BY approval_year DESC';
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getYearInResale', (req, res) => {
  const sqlQuery = 'SELECT DISTINCT(transact_year) FROM hdb_resale_avg_year ORDER BY transact_year DESC';
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getRentalDataByTown', (req, res) => {
  const town = req.query.town;
  const sqlQuery = 'SELECT * FROM hdb_rental_avg_town WHERE town = ?';
  db.query(sqlQuery, [town], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getResaleDataByTown', (req, res) => {
  const town = req.query.town;
  const sqlQuery = 'SELECT * FROM hdb_resale_avg_town WHERE town = ?';
  db.query(sqlQuery, [town], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getCarparkDataByTown', (req, res) => {
  const town = req.query.town;
  const sqlQuery = 'SELECT lat, lon, address as label, short_term_parking, free_parking, postal_code as status ' +
                   'FROM carpark_info_clean2 WHERE town = ?';
  db.query(sqlQuery, [town], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getTownInRental', (req, res) => {
  const sqlQuery = 'SELECT DISTINCT(town) FROM hdb_rental_avg_town ORDER BY town ASC';
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getTownInResale', (req, res) => {
  const sqlQuery = 'SELECT DISTINCT(town) FROM hdb_resale_avg_town ORDER BY town ASC';
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getTownInCarpark', (req, res) => {
  const sqlQuery = 'SELECT DISTINCT(town) FROM carpark_info_clean ORDER BY town ASC';
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getChildCareData', (req, res) => {
  const sqlQuery = 'SELECT * FROM child_care';
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getElderlyCareData', (req, res) => {
  const sqlQuery = 'SELECT * FROM elderly_care';
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getHawkerCentreData', (req, res) => {
  const sqlQuery = 'SELECT * FROM hawker_centre';
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/api/getHealthierEateriesData', (req, res) => {
  const sqlQuery = 'SELECT * FROM healthier_eateries';
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});