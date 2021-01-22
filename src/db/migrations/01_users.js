const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('username')

  table
    .string('email')
    .unique()
    .notNullable()

  table.string('password')
  table.string('firstName')
  table.string('lastName')
  table.date('birthdate')
  table.string('phoneNumber')
  table.integer('age')
  table.string('bio')

  table.integer('followers')
  table.string('imageurl')
  table.string('profileurl')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
