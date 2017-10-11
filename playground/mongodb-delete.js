// const MongoClient = require('mongodb').MongoClient;
//same as below
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // delete many
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // delete one
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  //find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // db.collection('Users').deleteMany({name: 'David'})
  //   .then((result) => {
  //     console.log(result);
  //   });


  db.collection('Users').findOneAndDelete({_id: new ObjectID('59dcd37f041716494aabd68b')})
    .then((result) => {
      console.log(result);
    });
  // db.close();
});
