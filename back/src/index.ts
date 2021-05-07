import express from 'express';
import serveIndex from 'serve-index';
import cors from 'cors';
import {Article} from './article';
import {resolve} from 'path';

const app = express();
console.log('process.env.PORT: ', process.env.PORT);
const port = +(process.env.PORT || '3000');
const www = resolve(process.cwd(), '../front/dist/front');

let seq = 4;

let articles = [
  {
    id: 'a1',
    name: 'Tournevisxxxx',
    price: 2.99,
    qty: 123,
  },
  {
    id: 'a2',
    name: 'Tournevis cruciforme',
    price: 3.45,
    qty: 12,
  },
  {
    id: 'a3',
    name: 'Tondeuse à gazon',
    price: 150,
    qty: 20,
  },
  {
    id: 'a4',
    name: 'Marteau',
    price: 3.67,
    qty: 300,
  },
];

app.use((req, res, next) => {
  console.log('req.url: ', req.url);
  next();
});

app.use(cors());
app.use(express.json());

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.post('/api/articles', (req, res) => {
  const article = req.body as Article;
  seq++;
  article.id = 'a' + seq;
  articles.push(article);
  res.status(201).json(article);
});

app.delete('/api/articles', (req, res) => {
  const ids = req.body as string[];
  articles = articles.filter(a => !ids.includes(a.id));
  res.status(204).end();
});

app.use('/api', (req, res) => {
  res.status(404).end();
});

app.use(express.static(www));
app.use(serveIndex(www, {icons: true}));

app.use((req, res) => {
  res.sendFile(resolve(www, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
