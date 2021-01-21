// const { ManyToManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')
// const User = require('./User')

class Match extends BaseModel {
  static get tableName() {
    return 'matches'
  }
}

module.exports = Match
