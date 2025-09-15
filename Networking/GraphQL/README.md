# GraphQL Server

type Book {
    id:ID
    title:String
    publishedDate:String
    author:Author
}

type Author {
    id:ID
    name:String
    books:[Book]
}

- List of Books
- List of Authors
- List of Books with Author
- List of Authors with Books