export default `

    type Game {
        _id: String!
        title: String!
        description: String!
        rating: Float!
    }

    input GameInput {
        _id: String!
        title: String!
        description: String!
        rating: Float!
    }

    input CreateGameInput {
        title: String!
        description: String!
        rating: Float!
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