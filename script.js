// const mysql = require('mysql');

// // Create a connection to the MySQL database
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "admin",
//     password: "temp",
//     database: "mydb"
// });

// // Connect to the database and create a table
// con.connect((err) => {
//     if (err) {
//         console.error("Connection failed: " + err.message);
//         return;
//     }
//     console.log("Connected to MySQL!");

//     const sql = `
//         CREATE TABLE IF NOT EXISTS users (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             xp INT NOT NULL
//         )
//     `;

//     con.query(sql, (err, result) => {
//         if (err) {
//             console.error("Error creating table: " + err.message);
//             return;
//         }
//         console.log("Table created or already exists!");
//     });

//     // Close the database connection after operation
//     con.end((err) => {
//         if (err) {
//             console.error("Error closing connection: " + err.message);
//             return;
//         }
//         console.log("Database connection closed.");
//     });
// });

// async function fetchXMLData() {
//     const res = await fetch("stat.xml");
//     const xmlText = await res.text();
//     const parser = new DOMParser();
//     const xmlDoc = parser.parseFromString(xmlText, "application/xml");

//     const entry = xmlDoc.querySelector("entry");
//     document.getElementById("learn-xp").innerHTML = entry.querySelector("learn").textContent;
//     document.getElementById("creative-xp").innerHTML = entry.querySelector("creative").textContent;
//     document.getElementById("health-xp").innerHTML = entry.querySelector("health").textContent;
//     document.getElementById("spent-xp").innerHTML = entry.querySelector("spent").textContent;
// }

//fetchData().catch(error => console.error("Error fetching data:", error));
async function fetchData() {
    const xp = 100;

    document.getElementById("learn-xp").innerHTML = xp;
    document.getElementById("creative-xp").innerHTML= xp;
    document.getElementById("health-xp").innerHTML = xp;
    document.getElementById("spent-xp").innerHTML = xp;
}

fetchData()