const gql = require("graphql-tag")

const typeDefs = gql`
type Query {
  "query to get tracks array for the homepage grid"
  tracksForHome: [Track!]!
}

"A Track is a group of Modules that teaches about a specific topic"
type Track {
  "the track's id"
  id: ID!
  "the track's title"
  title: String!
  "the track's main author!"
  author: Author!
  "the track's main ilustration to display in track card or track page detail"
  thumbnail: String
  "the track's aproximate legth to complete, in minutes"
  legth: Int
  "the  number of modules this track contains"
  modulesCount: Int
}

"Author of a complete Track"
type Author {
  id: ID!
  "Author first and last name"
  name: String!
  "Author's profile picture url!"
  photo: String
}
`

module.exports = typeDefs

