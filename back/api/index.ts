import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import {Pool} from 'pg';
import cors from 'cors';

dotenv.config();
const app = express()

app.use(express.json())

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

  const getArticle = async (id:string) => {
    try {
      return await new Promise(function (resolve, reject) {
        pool.query("SELECT * FROM article WHERE id="+id, (error, results) => {
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



app.get('/Articles', (req: Request, res: Response) => {
    getArticles().then((val) => {
        res.status(200).json(val);
    });
});


app.get('/Article/:id', (req: Request, res: Response) => {
  getArticle(req.params.id).then((val) => {
      res.status(200).json(val);
  });
});

app.listen(() => {
  console.log(`App running on port.`)
})

module.exports = app;