// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBook: [Book]
}
type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: bookInput): User
    removeBook(bookId: String!): User
    }
    input bookInput {
        title: String
        description: String
        image: String
        link: String
        authors: [String]
        bookId: String
    }

type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

`;

// export the typeDefs
module.exports = typeDefs;