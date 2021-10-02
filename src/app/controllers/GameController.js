const Game = require("../models/Game");

module.exports = {
  async index(req, res) {
    const games = await Game.findAll();
    res.status(200).json(games);
  },
  async listOne(req, res) {
    let id = req.params.id;
    if (isNaN(id)) {
      res.sendStatus(400);
    } else {
      Game.findOne({ raw: true, where: { id } }).then((game) => {
        if (game == null) {
          res.sendStatus(404);
        } else {
          res.status(200);
          res.json(game);
        }
      });
    }
  },
  async create(req, res) {
    let { name, price, year } = req.body;
    if (name == "" || price == "" || year == "") {
      res.json({ message: "blank game, please fill in and then add." });
    } else {
      await Game.create({
        name: name,
        price: price,
        year: year,
      })
        .then(() => {
          res.status(201);
          res.json({ message: "successfully created game" });
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json({ message: "Error creating new game" });
        });
    }
  },
  async delete(req, res) {
    try {
      var id = req.params.id;
      if (isNaN(id)) {
        if (id == undefined) {
          res.sendStatus(400).json({ message: "Game is not found" });
        }
      } else {
        var id = parseInt(id);
        Game.destroy({
          where: {
            id: id,
          },
        });
        res.status(204).json({ message: "successfully deleted game" });
      }
    } catch (error) {
      res.send(500);
    }
  },
  async edit(req, res) {
    var id = req.params.id;

    if (isNaN(id)) {
      res.sendStatus(400);
    } else {
      var id = parseInt(id);
      if (id != undefined) {
        var { name, price, year } = req.body;

        Game.update(
          { name: name, price: price, year: year },
          {
            where: {
              id: id,
            },
          }
        );
        res.status(202).json({ messge: "successfully edited game" });
      } else {
        res.sendStatus(404);
      }
    }
  },
};
