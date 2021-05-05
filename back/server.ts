import express from "express";
import serveIndex from "serve-index";

const app = express();
const port = 3000;
const www = "../front/dist/front";

app.use((req, res, next) => {
  console.log("req.url: ", req.url);
  next();
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});