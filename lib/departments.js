const db = require('../config/connection').mysql();

class Departments {

    view() {
        const sql = "SELECT * FROM departments";
        db.query(sql, (err, departments) => {
            if (err) {
                return console.log(err)
            }

            console.log(departments);
        })
    }

    add(name) {
        const sql = `INSERT INTO departments (name) VALUES (?)`;
        db.query(sql, name, (err) => {
            if (err) {
                return console.log(err)
            }

            console.log("Successfully added.")
        })
    }
}

module.exports = new Departments;