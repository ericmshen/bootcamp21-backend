const { ManyToManyRelation, BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')
const User = require('./User')

class Usersong extends BaseModel {
  static get tableName() {
    return 'usersongs'
  }

  static get relationMappings() {
    return {
      // usersLiked: {
      //   relation: ManyToManyRelation,
      //   modelClass: User,
      //   join: {
      //     from: 'songs.id',
      //     through: {
      //       from: 'usersongs.songId',
      //       to: 'usersongs.userId',
      //     },
      //     to: 'users.id',
      //   },
      // },
      // artistOwner: {
      //   relation: BelongsToOneRelation,
      //   modelClass: Artist,
      //   join: {
      //     from: 'songs.artistId',
      //     to: 'artists.id',
      //   },
    }
  }
}

module.exports = Usersong
