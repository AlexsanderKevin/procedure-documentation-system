const express = require("express")
const expressHandlebars = require('express-handlebars');
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
      console.error(err.message);
    }

    console.log('Connected to the database.');
});

// db.run('CREATE TABLE users(name text)');

db.run(`INSERT INTO users(name) VALUES(?)`, ['Kevin'], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
});


db.each(`SELECT name FROM users`, (err, row) => {
    if (err) {
    console.error(err.message);
    }
    console.log(row.name);
});
  

db.close((err) => {
    if (err) {
      return console.error(err.message);
    }

    console.log('Close the database connection.');
});

// const app = express()

// app.engine('hbs', expressHandlebars({
//     defaultLayout: 'main',
//     extname: '.hbs'
// }));

// app.set('view engine', 'hbs');

// app.get('/', (req, res) => {
//     res.render('home', {
//         post: {
//             author: 'Janith Kasun',
//             image: 'https://picsum.photos/500/500',
//             comments: [
//                 'This is the first comment',
//                 'This is the second comment',
//                 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.'
//             ]
//         }
//     });
// });

// app.get("/procedimentos", (req, res) => {
//     res.render("procedimentos")
// })

// app.listen(3000, () => {
//     console.log("Server running...")
// })