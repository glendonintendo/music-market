const { User } = require('../models');

const userData = [
    {
        email: 'test1@emailtest.com',
        password: 'password1',
        validated: true
    },
    {
        email: 'test2@emailtest.com',
        password: 'password2',
        validated: true
    },
    {
        email: 'test3@emailtest.com',
        password: 'password3',
        validated: true
    },
    {
        email: 'test4@emailtest.com',
        password: 'password4',
        validated: false
    },
    {
        email: 'test5@emailtest.com',
        password: 'password5',
        validated: false
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;