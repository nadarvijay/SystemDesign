const data = {
    books: [
        {
            id: 1,
            title: "Book1",
            publishedDate: "4-3-2025",
            authorId: 1
        },
        {
            id: 2,
            title: "Book2",
            publishedDate: "8-3-2025",
            authorId: 1
        },
        {
            id: 3,
            title: "Book3",
            publishedDate: "10-3-2025",
            authorId: 2
        }
    ],
    authors: [
        {
            id: 1,
            name: "Vijay",
            books: [1, 2]
        },
        {
            id: 2,
            name: "Amlan",
            books: [3]
        }
    ]
}

export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            return data.authors.find((author) => author.id == parent.authorId);
        }
    },
    Author: {
        books: (parent, args, context, info) => {
            return data.books.filter((book) => parent.books.includes(book.id));
        }
    },
    Query: {
        books: () => {
            return data.books;
        },
        authors: () => {
            return data.authors;
        }
    },
    Mutation: {
        addBook: (parent, args, context, info) => {
            console.log(args);
            const newBook = { ...args, id: data.books.length + 1 }
            data.books.push(newBook);
            return newBook;
        }
    }
}