const BaseModel = require('./BaseModel')
const { ManyToManyRelation } = require('./BaseModel')
const Usersong = require('./Usersong')
const Artist = require('./Artist')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      songs: {
        relation: ManyToManyRelation,
        modelClass: Usersong,
        join: {
          from: 'users.id',
          through: {
            from: 'usersongs.userId',
            to: 'usersongs.songId',
          },
          to: 'songs.id',
        },
      },
      artists: {
        relation: ManyToManyRelation,
        modelClass: Artist,
        join: {
          from: 'users.id',
          through: {
            from: 'userartists.userId',
            to: 'userartists.artistId',
          },
          to: 'artists.id',
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
