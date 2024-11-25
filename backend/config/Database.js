import {Sequalize} from "sequelize";

const db = new Sequalize('thrifthunt','root','',{
    host : 'localhost',
    dialect: 'mysql',
})

export default db;