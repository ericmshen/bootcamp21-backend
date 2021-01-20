// const { ManyToManyRelation, BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Usergenre extends BaseModel {
  static get tableName() {
    return 'usergenres'
  }

  static get relationMappings() {
    return {

    }
  }
}

module.exports = Usergenre
