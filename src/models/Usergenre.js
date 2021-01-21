// const { ManyToManyRelation, BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Usergenre extends BaseModel {
  static get tableName() {
    return 'usergenres'
  }
}

module.exports = Usergenre
