import express from "express";
import serveIndex from "serve-index";
import cors from "cors";
import { Article } from "./article";

const app = express();
const port = 3000;
const www = "../front/dist/front";

const articles = [
  {
    name: "Tournevisxxxx",
    price: 2.99,
    qty: 123,
  },
  {
    name: "Tournevis cruciforme",
    price: 3.45,
    qty: 12,
  },
  {
    name: "Tondeuse à gazon",
    price: 150,
    qty: 20,
  },
  {
    name: "Marteau",
    price: 3.67,
    qty: 300,
  },
];

app.use((req, res, next) => {
  console.log("req.url: ", req.url);
  next();
});

app.use(cors());
app.use(express.json());

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.post("/api/articles", (req, res) => {
  const article = req.body as Article;
  articles.push(article);
  res.json(articles);
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
