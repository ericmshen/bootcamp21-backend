const merge = require('lodash.merge')
const Auth = require('./Auth')
const Artist = require('./Artist')
const Song = require('./Song')
const User = require('./User')

const resolvers = [Auth, Artist, Song, User]

module.exports = merge(...resolvers)
