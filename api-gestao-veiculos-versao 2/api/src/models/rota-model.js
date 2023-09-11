const { Model, DataTypes } = require("sequelize");

class RotaModel extends Model {
    static init(sequelize) {
        super.init({
            Nome_Rota: DataTypes.INTEGER,
            Descrição_Rota: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'Rotas',
            timestamps: false
        });
    }
}

module.exports = { RotaModel };
