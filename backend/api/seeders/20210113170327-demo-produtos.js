'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('produtos', [
      {
        nome: 'Rúcula',
        quantidade: 30,
        fornecedor: 'HortiFruit',
        categoria: 'Verduras',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Abobrinha',
        quantidade: 45,
        fornecedor: 'LegumeMaster',
        categoria: 'Legumes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mamão',
        quantidade: 20,
        fornecedor: 'HortiFruit',
        categoria: 'Frutas',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('produtos', null, {});

  }
};
