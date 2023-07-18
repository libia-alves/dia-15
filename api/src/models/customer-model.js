const { Model, DataTypes } = require("sequelize");

class CustomerModel extends Model {
    static init(sequelize) {
        super.init({
            Name: DataTypes.TEXT,
    
            Email: DataTypes.TEXT,
       
        }, {
            sequelize,
            tableName: 'customers',
            timestamps: false
        });
    }
}

module.exports = { CustomerModel };
