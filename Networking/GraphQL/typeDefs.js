export const typeDefs = `#graphql

type Book {
    id:ID!
    title:String!
    publishedDate:String
    author:Author
}

type Author {
    id:ID!
    name:String!
    books:[Book]
}

type Query {
    books : [Book]
    authors : [Author]
}

type Mutation {
    addBook(title:String!,publishedDate:String,authorId:ID!) : Book
}

`