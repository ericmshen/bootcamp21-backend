const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'matches', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('user1Id')
    .references('users.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

  table
    .uuid('user2Id')
    .references('users.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
})

exports.down = async knex => knex.schema.dropTableIfExists('matches')
