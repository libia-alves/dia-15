'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn(
      'Veiculos',
      'ID_Rotas',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        references: { model: 'Rotas', key: 'ID' },
      }
    );


  await queryInterface.addColumn(
      'Veiculos',
      'ID_Horario',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        references: { model: 'Horarios', key: 'ID' },
      }
    );



  await queryInterface.addColumn(
      'Veiculos',
      'ID_Escolas',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        references: { model: 'Escolas', key: 'ID' },
      }
    );
  },




  async down (queryInterface, Sequelize) {
      

    await queryInterface.removeColumn('Veiculos', 'ID_Rotas');
  
    await queryInterface.removeColumn('Veiculos', 'ID_Horario');
  
    await queryInterface.removeColumn('Veiculos', 'ID_Escolas');
  

  }
};
