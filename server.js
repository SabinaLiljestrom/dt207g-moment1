/**
 * CV
 * Av Sabina Liljeström
 */

const express = require("express");
const bodyParser = require ("body-parser");
const sqlite3 = require ("sqlite3").verbose();

//anslut till databas
const db = new sqlite3.Database("./db/cv.db");

//inställningar
const app = express();
const port = 3000;
app.set ("view engine", "ejs");
app.use (express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//routing
app.get ("/", (req, res) => {
    res.render("index");
});

app.get("/add-course", (req, res) => {
    res.render("add-course");
});

app.get("/about", (req, res) => {
    res.render("about");
});

//starta applikationen
app.listen(port, ()=>{
    console.log("application stated on port: "+port);
});