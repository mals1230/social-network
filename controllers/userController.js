const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

const userCount = async () =>
  User.aggregate()
    .count('userCount')
    .then((numberOfUsers) => numberOfUsers);

module.exports = {
// Get all Users
getUsers(req, res) {
  User.find()
    .then(async (users) => {
      const userObj = {
        users,
        headCount: await headCount(),
      };
      return res.json(userObj);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
},
// Get a single user
getSingleUser(req, res) {
  User.findOne({ _id: req.params.userId })
    .select('-__v')
    .then(async (user) =>
      !user
        ? res.status(404).json({ message: 'No user found with that ID' })
        : res.json({
            user,
          })
    )
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
},

// create a new user
createUser(req, res) {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
},

updateUser(req, res) {
  User.findOneAndUpdate({ _id: req.params.userId })
    .then((user) =>
      !user
        ? res.status(404).json({message: 'No user found'})
},

// Delete a user and remove them
deleteUser(req, res) {
  User.findOneAndRemove({ _id: req.params.userId })
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user found' })
        : Thought.findOneAndUpdate(
            { users: req.params.userId },
            { $pull: { users: req.params.thoughtId } },
            { new: true }
          )
    )
    .then((thought) =>
      !thought
        ? res.status(404).json({
            message: 'User deleted and no thoughts found',
          })
        : res.json({ message: 'User successfully deleted' })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},

// Add a friend
addFriend(req, res) {
  console.log('You have a new friend!');
  console.log(req.body);
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { friends: req.body } },
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res
            .status(404)
            .json({ message: 'No user found with that ID :(' })
        : res.json(student)
    )
    .catch((err) => res.status(500).json(err));
},
// Remove a friend
removeFriend(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $pull: { friend: { friendId: req.params.friendId } } },
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res
            .status(404)
            .json({ message: 'No user found with that ID :(' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},
};
