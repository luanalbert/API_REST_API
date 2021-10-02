"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("games", [
      {
        name: "Need for Speed Underground 2",
        price: "25,00",
        year: "2006",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "GTA 5",
        price: "25,00",
        year: "2015",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("games", null, {});
  },
};
