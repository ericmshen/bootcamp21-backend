const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const User = require('./User')
const Song = require('./Song')
const Artist = require('./Artist')

const resolvers = [Welcome, User, Song, Artist]

module.exports = merge(...resolvers)
