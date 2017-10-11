// const MongoClient = require('mongodb').MongoClient;
//same as below
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59ddd837c51d99ee0c1bd2ae')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },
  // {
  //   returnOriginal: false
  // }
  // )
  //   .then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').findOneAndUpdate({
    _id: 123
  }, {
    $set: {
      name: 'Boris'
    },
    $inc: {
      age: 10
    }
  }, {
    returnOriginal: false
  })
    .then((result) => {
      console.log(result);
    });

  // db.close();
});
