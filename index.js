import getMetrics from "./getTikTokMetrics.js";
import cheerio from "cheerio";
import express from "express";
import getTikTokMetrics from "./getTikTokMetrics.js";
const PORT = 8000;

const app = express();

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/metrics", (req, res) => {
    res.send(getTikTokMetrics());
});