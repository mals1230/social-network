const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const userCount = async () =>
  User.aggregate()
    .count('userCount')
    .then((numberOfUsers) => numberOfUsers);