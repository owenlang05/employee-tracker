const db = require('../config/connection').mysql();

class Employees {

    view() {
        const sql = "SELECT * FROM employees";
        db.query(sql, (err, employees) => {
            if (err) {
                return console.log(err)
            }

            console.log(employees);
        })
    }

    add(first, last, manager, role) {
        if (manager) {
            const sql = `INSERT INTO employees (first_name, last_name, manager_id, role_id) VALUES (?, ?, ?, ?)`;
            db.query(sql, [first, last, manager, role], (err) => {
                if (err) {
                    return console.log(err)
                }

                console.log("Successfully added employee.")
            })
        }
        else {
            const sql = `INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)`;
        db.query(sql, [first, last, role], (err) => {
            if (err) {
                return console.log(err)
            }

            console.log("Successfully added employee.")
        })
        }
    }

    updateRole(id, role) {
        const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;

        db.query(sql, [role, id], (err) => {
            if (err) {
                return console.log(err)
            }

            console.log("Successfully updated employee role.")
        })
    }
}

module.exports = new Employees;