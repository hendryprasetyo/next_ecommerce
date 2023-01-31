/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments();
    table.string("email").unique().notNullable();
    table.string("username").unique().notNullable();
    table.string("name").notNullable();
    table.text("password").notNullable();
    table.text("access_token");
    table.text("refresh_token");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
