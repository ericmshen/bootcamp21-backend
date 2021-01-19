const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table.string('password').notNullable()
  table.string('firstName').notNullable()
  table.string('lastName').notNullable()
  table.date('birthday')
  table.string('phoneNumber').notNullable()
  table.int('age').notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
