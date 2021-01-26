import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('books', (tbl) => {
    tbl.increments('id').primary();

    tbl.text('title').notNullable().defaultTo(null);
    tbl.json('authors').notNullable().defaultTo(JSON.stringify([]));
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('books');
}
