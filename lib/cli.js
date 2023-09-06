const inquirer = require('inquirer')
const Departments = require('./departments')

class CLI {
    run() {
        return inquirer
        .prompt([
            {
                type: "list",
                name: "initialOption",
                message: "What would you like to do?",
                loop: false,
                choices: [
                    "View All Departments",
                    "View All Roles",
                    "View All Employees",
                    "Add Department",
                    "Add Role",
                    "Add an Employee",
                    "Update Employee Role",
                    "Quit"
                        ]
            }
        ]).then(({initialOption}) => {

            switch(initialOption) {
                case ("View All Departments"):
                    Departments.view()
                    break;
                case ("View All Roles"):
                    break;
                case ("View All Employees"):
                    break;
                case ("Add Department"):
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "departmentName",
                            message: "What is the name of the department? "
                        }
                    ]).then(({departmentName}) => {
                        Departments.add(departmentName);
                    })
                    break;
                case ("Add Role"):
                    break;
                case ("Add an Employee"):
                    break;
                case ("Update Employee Role"):
                    break;
                case ("Quit"):
                    break;
            }
        })
    }
}

module.exports = CLI