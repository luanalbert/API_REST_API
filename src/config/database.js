module.exports = {
  dialect: "sqlite",
  host: "127.0.0.1",
  storage: "src/database/db.sqlite",
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
