module.exports = {
  dialect: "sqlite",
  host: "localhost",
  storage: "src/database/db.sqlite",
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
