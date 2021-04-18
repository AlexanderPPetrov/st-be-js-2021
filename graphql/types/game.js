export default `

    type Game {
        _id: String!
        title: String!
        description: String!
        rating: Float!
        image: String!
    }

    input CreateGameInput {
        title: String!
        description: String!
        rating: Float!
        image: String!
    }

    type Query {
        game(_id: String!): Game
        games: [Game]
    }

    type Mutation {
        createGame(data: CreateGameInput!): Game
        editGame(_id: String!, data: CreateGameInput!): Game
        deleteGame(_id: String!): Game
    }

`