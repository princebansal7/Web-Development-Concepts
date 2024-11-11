// Provides cleaner way to deal with objects

// 1. Objects and giving it types in TS

// Example-1

type UserAgeType = {
    [key: string]: number;
};

const userAge: UserAgeType = {
    Age1: 23,
    Age2: 30,
};

// Example-2

// type Users = { [key: string]: { id: number; name: string } };
// or
type User1 = { id: number; name: string };
type Users1 = { [key: string]: User1 };
const users1: Users1 = {
    user1: {
        id: 1,
        name: "prince",
    },
    user2: {
        id: 2,
        name: "bansal",
    },
};

// Above way of writing types is nasty, so we take help of 'record' & 'map'

// Record: it is provided by typescript

// Example-1 using record

type UserAgeType2 = Record<string, number>;
const users2: UserAgeType2 = {
    age1: 33,
    age2: 31,
};

// Example-2 using record

type Users3 = Record<string, { age: number; name: string }>;
const users3: Users3 = {
    "user1": {
        "age": 1,
        "name": "prince",
    },
    "user2": {
        "age": 2,
        "name": "bansal",
    },
};
