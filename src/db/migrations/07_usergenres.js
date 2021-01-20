const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'usergenres', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('userId')
    .references('users.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

  table.string('genre')
})

exports.down = async knex => knex.schema.dropTableIfExists('usergenres')
