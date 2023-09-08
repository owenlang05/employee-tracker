const db = require('../config/connection').mysql();

class Roles {

    view() {
        const sql = "SELECT * FROM roles";
        db.query(sql, (err, roles) => {
            if (err) {
                return console.log(err)
            }

            console.log(roles);
        })
    }

    add(title, salary, department) {
        const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
        db.query(sql, [title, salary, department], (err) => {
            if (err) {
                return console.log(err)
            }

            console.log("Successfully added role.")
        })
    }
}

module.exports = new Roles;