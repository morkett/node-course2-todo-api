const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('59df12811ab0cb58d8d18c94').then((result) => {
  console.log(result);
});
