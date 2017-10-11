const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo.model');
var {User} = require('./models/user.model');

var app = express();
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

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});

module.exports = {app};
