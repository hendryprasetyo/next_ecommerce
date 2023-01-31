/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("product", function (table) {
    table.increments();
    table.string("name", 100).notNullable();
    table.string("image").nullable();
    table.string("url").nullable();
    table.string("details").nullable();
    table.string("slug", 100).notNullable().unique();
    table.string("sku", 100).notNullable();
    table.float("price").notNullable().defaultTo(0);
    table.float("discount").notNullable().defaultTo(0);
    table.smallint("quantity").notNullable().defaultTo(0);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("product");
};
