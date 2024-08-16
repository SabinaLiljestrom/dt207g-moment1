/**
 * CV
 * Av Sabina Liljeström
 */

const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

// anslut till databas
const db = new sqlite3.Database("./db/cv.db");

// inställningar
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// routing
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/add-course", (req, res) => {
    // Skicka med error som tom sträng när sidan först laddas
    res.render("add-course", {
        error: ""
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

// Lägg till kurs
app.post("/add-course", (req, res) => {
    let coursecode = req.body.coursecode;
    let coursename = req.body.coursename;
    let syllabus = req.body.syllabus;
    let progression = req.body.progression;
    let error = "";

    // Kontrollera input
    if (coursecode !== "" && coursename !== "" && syllabus !== "" && progression !== "") {
        
    } else {
        error = "Du måste fylla i alla fält";
    }

    // Rendera sidan igen med eventuellt felmeddelande
    res.render("add-course", {
        error: error
    });
});

// Starta applikationen
app.listen(port, () => {
    console.log("Application started on port: " + port);
});
