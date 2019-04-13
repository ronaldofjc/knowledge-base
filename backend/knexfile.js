const { dbPostgres } = require("./.env");

module.exports = {
  client: "postgresql",
  connection: dbPostgres,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
