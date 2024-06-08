const express = require('express')
const app = express()
const port = 3001
require('dotenv').config();
const Pool = require('pg').Pool

app.use(express.json())
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

const getArticles = async () => {
    try {
      return await new Promise(function (resolve, reject) {
        pool.query("SELECT * FROM article", (error, results) => {
          if (error) {
            reject(error);
          }
          if (results && results.rows) {
            resolve(results.rows);
          } else {
            reject(new Error("No results found"));
          }
        });
      });
    } catch (error_1) {
      console.error(error_1);
      throw new Error("Internal server error");
    }
  };



app.get('/', (req, res) => {
    getArticles().then((val) => {
        res.status(200).json(val);
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})