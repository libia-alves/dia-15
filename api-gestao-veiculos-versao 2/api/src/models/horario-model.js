const { Model, DataTypes } = require("sequelize");

class HorarioModel extends Model {
    static init(sequelize) {
        super.init({
            Horário_Partida: DataTypes.INTEGER,
            Horário_Chegada: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'Horários',
            timestamps: false
        });
    }
}

module.exports = { HorarioModel };
