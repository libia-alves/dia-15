const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { FoodModel } = require('../models/food-model');
const { UserModel } = require('../models/user-model');
const { CustomerModel } = require ('../models/customer-model');



const database = new Sequelize(configDatabase);

FoodModel.init(database);
UserModel.init(database);
CustomerModel.init(database);

module.exports = database;
