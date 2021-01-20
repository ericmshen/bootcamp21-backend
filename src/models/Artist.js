const { HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')
const Song = require('./Song')

class Artist extends BaseModel {
  static get tableName() {
    return 'artists'
  }

  static get relationMappings() {
    return {
      songs: {
        relation: HasManyRelation,
        modelClass: Song,
        join: {
          from: 'artists.id',
          to: 'songs.artistId',
        },
      },
    }
  }
}

module.exports = Artist
