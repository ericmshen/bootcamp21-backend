const BaseModel = require('./BaseModel')
const { ManyToManyRelation } = require('./BaseModel')
const Song = require('./Song')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    // const Relation = require('./Relation')

    return {
      songs: {
        relation: ManyToManyRelation, // would this be many to many
        modelClass: Song,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.userId',
            to: 'relations.songId',
          },
          to: 'songs.id',
        },
      },
      matches: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'matches.user1Id',
            to: 'matches.user2Id',
          },
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = User
