const express = require("express");
const open = require("open");
const fs = require("fs");
const app = express();
require("dotenv").config();

app.use(express.json());

app.post("/webhook", (req, res) => {
    const { body, headers } = req;

    const jsonString = JSON.stringify({
        body,
        headers,
    });

    fs.writeFile("webhook.json", jsonString, (err) => {
        if (err) {
            console.log("err", err);
        }
    });
    res.sendStatus(200);
});

app.get("/", (_, res) => {
    fs.readFile("./webhook.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("err", err);
            res.sendStatus(500);
        }
        res.send(JSON.parse(jsonString)).status(200);
    });
});

app.listen(process.env.PORT);
console.log(`listening on ${process.env.PORT}`);
