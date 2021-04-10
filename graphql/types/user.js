export default `

    input UserInput {
        email: String!
        password: String!
    }

    type User {
        _id: String!
        email: String!
        password: String!
    }

    type Query {
        user(_id: String!): User
        users: [User]
    }

    type Mutation {
        createUser(data: UserInput!): User
        editUser(_id: String!, data: UserInput!): User
        deleteUser(_id: String!): User
    }

`