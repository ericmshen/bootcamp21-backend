const BaseModel = require('./BaseModel')

class Usersong extends BaseModel {
  static get tableName() {
    return 'usersongs'
  }
}

module.exports = Usersong
