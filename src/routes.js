const { Router } = require("express");
const routes = Router();

const GameController = require("./app/controllers/GameController");

routes
  .get("/games", GameController.index)
  .get("/game/:id", GameController.listOne)
  .post("/game/create", GameController.create)
  .delete("/game/:id", GameController.delete)
  .put("/game/:id", GameController.edit);

module.exports = routes;
