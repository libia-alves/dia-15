const { Model, DataTypes } = require("sequelize");

class VeiculoModel extends Model {
    static init(sequelize) {
        super.init({
            Tipo_Veiculo: DataTypes.STRING,
            Numero_Placa: DataTypes.STRING,
            Capacidade_Máxima_Passageiros: DataTypes.INTEGER,
            Contato_Motorista: DataTypes.INTEGER,
            ID_Rotas: DataTypes.INTEGER,
            ID_Horários: DataTypes.INTEGER,
            ID_Escola: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'Veiculos',
            timestamps: false
        });
    }
}

module.exports = { VeiculoModel };
