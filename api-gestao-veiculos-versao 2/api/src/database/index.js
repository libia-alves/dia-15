const { Sequelize } = require('sequelize');
const configDatabase = require('./config');


const { UserModel } = require('../models/user-model');




const database = new Sequelize(configDatabase);


UserModel.init(database);


module.exports = database;
