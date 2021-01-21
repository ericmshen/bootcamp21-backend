// const { ManyToManyRelation, BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Userartist extends BaseModel {
  static get tableName() {
    return 'userartists'
  }
}

module.exports = Userartist
