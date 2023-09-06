const CLI = require("./lib/cli")
const connection = require('./config/connection');

const cli = new CLI()

connection.mysql();

cli.run()