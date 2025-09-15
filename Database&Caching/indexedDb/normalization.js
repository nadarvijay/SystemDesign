// Problem statement 1

const state = {
    users: [
        { id: 1, name: 'Alice', posts: [{ id: 101, title: 'Post 1', comments: [{ id: 201, text: 'Comment 1' }] }] },
        { id: 2, name: 'Bob', posts: [{ id: 102, title: 'Post 2', comments: [{ id: 202, text: 'Comment 2' }] }] },
    ],
    tags: [
        { id: 301, name: 'Tech', posts: [{ id: 101 }, { id: 102 }] },
        { id: 302, name: 'Travel', posts: [{ id: 102 }] },
    ],
};


// Normalized Data

const normalizedState = {
    users: {
        byIds: {
            1: { id: 1, name: 'Alice', posts: [101] },
            2: { id: 2, name: 'Bob', posts: [102] },
        },
        allIds: [1, 2], // as objects are not stored in a particular order , hence we keep a separate array for the order
    },
    posts: {
        byIds: {
            '101': { id: 101, title: 'Post 1', comments: [] },
            '102': { id: 102, title: 'Post 2', comments: [] }
        },
        allIds: [101, 102],
    },
    comments: {
        byIds: {
            '201': { id: 201, text: 'Comment 1' },
            '202': { id: 202, text: 'Comment 2' }
        },
        allIds: [201, 202],

    },
    tags: {
        byIds: {
            '301': { id: 301, name: 'Tech', posts: [] },
            '302': { id: 302, name: 'Travel', posts: [] }
        },
        allIds: [301, 302]
    },
}