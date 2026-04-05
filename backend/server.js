const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "data.txt";

app.get("/", (req, res) => {
    res.send("Student Record Backend Running");
});

app.get("/students", (req, res) => {
    fs.readFile(FILE, "utf8", (err, data) => {
        if (err) return res.send([]);
        res.send(data.split("\n"));
    });
});

app.post("/students", (req, res) => {
    const name = req.body.name;
    fs.appendFile(FILE, name + "\n", () => {
        res.send("Student added");
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});





