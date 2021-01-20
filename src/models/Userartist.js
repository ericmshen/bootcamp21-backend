// const { ManyToManyRelation, BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Userartist extends BaseModel {
  static get tableName() {
    return 'userartists'
  }

  static get relationMappings() {
    return {

    }
  }
}

module.exports = Userartist
