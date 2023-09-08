const inquirer = require('inquirer')
const Departments = require('./departments')
const Roles = require('./roles')
const Employees = require('./employees')

class CLI {
    run() {
        inquirer
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
                    Departments.getDepartments()
                    break;
                case ("View All Roles"):
                    Roles.view()
                    break;
                case ("View All Employees"):
                    Employees.view();
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

                    inquirer.prompt([
                        {
                            type: "input",
                            name: "title",
                            message: "Role Title: "
                        },
                        {
                            type: "input", 
                            name: "salary",
                            message: "Salary: "
                        },
                        {
                            type: "input",
                            name: "department",
                            message: "Department ID?: "
                        }
                    ]).then(({title, salary, department}) => {
                        Roles.add(title, salary, department)
                    })
                    break;
                case ("Add an Employee"):
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "first",
                            message: "First Name: "
                        },
                        {
                            type: "input", 
                            name: "last",
                            message: "Last Name: "
                        },
                        {
                            type: "input",
                            name: "manager",
                            message: "Manager ID(leave blank if none): "
                        },
                        {
                            type: "input",
                            name: "role",
                            message: "Role ID?: "
                        }
                    ]).then(({first, last, manager, role}) => {
                        Employees.add(first, last, manager, role)
                    })
                    break;
                case ("Update Employee Role"):
                    inquirer.prompt([
                        {
                            type: "input",
                            name: "id",
                            message: "Employee ID"
                        },
                        {
                            type: "input",
                            name: "role",
                            message: "New role ID"
                        }
                    ]).then(({id, role}) => {
                        Employees.updateRole(id, role);
                    })
                    break;
                case ("Quit"):
                    return 0;
            }
        })
    }
}

module.exports = CLI