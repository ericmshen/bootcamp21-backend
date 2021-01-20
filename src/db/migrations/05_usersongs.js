const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'usersongs', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('personId')
    .references('users.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

  table
    .uuid('songId')
    .references('songs.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
})

exports.down = async knex => knex.schema.dropTableIfExists('usersongs')
