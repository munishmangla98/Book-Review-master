// import mongoose from "mongoose";

// async function connectToMongoDB() {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/Book_review");
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//   }
// }

// connectToMongoDB();


var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Book_review");

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {

  // we're connected!

  console.log("We are connected")
});




var kittySchema = new mongoose.Schema({name: String
});
kittySchema.methods.speak = function () {
  var greeting = "My name is "+this.name
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);
var harryKitty= new Kitten({ name: 'harryKitty' });
var harrykitty2= new Kitten({ name: 'harryKitty2' });

// console.log(harryKitty.name); // 'Silence'
// harryKitty.speak();

// not working due to (function (err, harrykitty)
// harryKitty.save(function (err, harrykitty) {
//   if (err) return console.error(err);
//   harrykitty.speak();
// });


harryKitty.save().then((harrykitty2) => {
    harrykitty2.speak();
  })
  .catch((err) => {
    console.error(err);
  });

  harrykitty2.save().then((harrykitty2) => {
    harrykitty2.speak();
  })
  .catch((err) => {
    console.error(err);
  });



