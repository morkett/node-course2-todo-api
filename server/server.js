const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo.model');
var {User} = require('./models/user.model');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save()
    .then( (todo) => {
      res.send(todo);
    }, (err) => {
      res.status(400)
        .send(err);
    });
});

app.get('/todos', (req, res) => {
  Todo.find()
    .then((todos) => {
      res.send({todos});
    }, (err) => {
      res.status(400)
        .send(err);
    });
});

app.get('/todos/:id', (req, res) => {
  var todoId = req.params.id;

  if(!ObjectID.isValid(todoId)) {
    res.status(404);
    res.send();
  }

  Todo.findById(todoId)
    .then((todo) => {
      if(!todo) {
        return res.status(404).send('Todo not found');
      }
      res.send({todo});
    }).catch((err) => {
      res.status(400).send();
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = {app};
