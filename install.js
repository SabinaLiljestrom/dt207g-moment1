/**
 * install-script för cv 
 * Av Sabina Liljeström
 */ 

const sqlite3 = require("sqlite3").verbose();

// skapa databas
const db = new sqlite3.Database("./db/cv.db");

// Skapa tabell med id | coursecode | coursename | syllabus | progression  
db.serialize(() => {
    db.run("DROP TABLE IF EXISTS cv;");

    db.run(`
    CREATE TABLE cv(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        coursecode TEXT NOT NULL,
        coursename TEXT NOT NULL,
        syllabus TEXT NOT NULL,
        progression TEXT NOT NULL,
        posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
    );
    `);
});

db.close();
