const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "../data.txt";

// Get students
app.get("/students", (req, res) => {
    fs.readFile(FILE, "utf8", (err, data) => {
        if (err) return res.send([]);
        res.send(data.split("\n"));
    });
});

// Add student
app.post("/students", (req, res) => {
    const student = req.body.name;

    fs.appendFile(FILE, student + "\n", () => {
        res.send("Student Added");
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});<!DOCTYPE html>
<html>
<head>
<title>Student Record System</title>
</head>

<body>

<h1>Student Record</h1>

<input id="name" placeholder="Enter student name">
<button onclick="addStudent()">Add</button>

<ul id="list"></ul>

<script src="script.js"></script>

</body>
</html>