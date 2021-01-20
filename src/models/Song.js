const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')
const Artist = require('./Artist')

class Song extends BaseModel {
  static get tableName() {
    return 'songs'
  }

  static get relationMappings() {
    return {
      artistOwner: {
        relation: BelongsToOneRelation,
        modelClass: Artist,
        join: {
          from: 'songs.artistId',
          to: 'artists.id',
        },
      },
    }
  }
}

module.exports = Song
