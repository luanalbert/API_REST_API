const { DataTypes } = require("sequelize");
const connection = require("../../database/index");

const Game = connection.define("games", {
  name: DataTypes.STRING,
  image: DataTypes.STRING,
  price: DataTypes.STRING,
  year: DataTypes.STRING,
});

module.exports = Game;
