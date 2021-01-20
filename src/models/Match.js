// const { ManyToManyRelation } = require('./BaseModel')
const BaseModel = require('./BaseModel')
// const User = require('./User')

class Match extends BaseModel {
  static get tableName() {
    return 'matches'
  }

  static get relationMappings() {
    return {
      // matches: {
      //   relation: ManyToManyRelation,
      //   modelClass: User,
      //   join: {
      //     from: 'users.id',
      //     through: {
      //       from: 'matches.user1Id',
      //       to: 'matches.user2Id',
      //     },
      //     to: 'users.id',
      //   },
      // },
    }
  }
}

module.exports = Match
