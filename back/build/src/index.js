"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serve_index_1 = __importDefault(require("serve-index"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = 3000;
const www = '../front/dist/front';
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
app.use(cors_1.default());
app.use(express_1.default.json());
app.get('/api/articles', (req, res) => {
    res.json(articles);
});
app.post('/api/articles', (req, res) => {
    const article = req.body;
    seq++;
    article.id = 'a' + seq;
    articles.push(article);
    res.status(201).json(article);
});
app.delete('/api/articles', (req, res) => {
    const ids = req.body;
    articles = articles.filter(a => !ids.includes(a.id));
    res.status(204).end();
});
app.use(express_1.default.static(www));
app.use(serve_index_1.default(www, { icons: true }));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map