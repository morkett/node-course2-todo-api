const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo.model.js');
const {User} = require('./../server/models/user.model.js')

var id = '59de2014cc8f9b9a59783965';
var userId = '59ddf7f6f0430d2d538e9583';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then((todo) => {
//     if(!todo) {
//       return console.log('ID not found');
//     }
//     console.log('Todo by Id', todo);
//   }).catch((err) => {
//     console.log(err);
//   });

User.findById(userId)
  .then((user) => {
    if(!user) {
      return console.log('User not found');
    }
    console.log('User by Id', user);
  }).catch((err) => {
    console.log(err);
  });
