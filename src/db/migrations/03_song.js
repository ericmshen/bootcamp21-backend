const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'songs', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('artistId')
    .references('artists.id')
    .notNullable()
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

  table.string('title').notNullable()
  table.string('genre')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('songs')
