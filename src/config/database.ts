import { Sequelize } from "sequelize";

const B2PE_DB = new Sequelize(
  "B2PE_DB", // database name
  "root", // username
  "root", // password
  {
    host: "localhost",
    port: 3306, // port should be a number, not a string
    dialect: "mysql",
  }
);

export default B2PE_DB;
