// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);
// const cors = require('cors');

// app.use(cors({
//   origin: "http://localhost:4200"
// }));

// app.listen(9992, function check(err) {
//     if (err)
//         console.log("error")
//     else
//         console.log("started");
// });

// mongoose.connect("mongodb://localhost:27017/Book_review", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("Successfully Connected to DB");
//     })
//     .catch((error) => {
//         console.log("Error Connecting to DB:", error);
//     });

// app.use(express.json());


var express = require('express');
var server = express();
var mongoose = require('mongoose');
const cors = require('cors');

// Your MongoDB connection URL
const dbURL = 'mongodb://127.0.0.1:27017/Book_review';

// Connect to MongoDB
mongoose.connect(dbURL);

// Handle connection events
const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('DB Connected!!!!!!!!!');
  // Your code that relies on the MongoDB connection should go here
});

server.use(cors());
server.use(express.json());

server.listen(8000, function check(error) {
    if (error) {
        console.log("Error starting server:", error);
    } else {
        console.log("Server started on port 8000");
    }
});



// var express = require('express');
// var server = express();
// // var routes = require('./routes/routes');
// var mongoose = require('mongoose');
// const cors = require('cors');

// const db = mongoose.connection;
// mongoose.connect("mongodb://localhost:27017/Book_review")
// db.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// db.once('open', () => {
//   console.log('DB Connected!!!!!!!!!');
//   // Your code that relies on the MongoDB connection should go here
// });
// // error in below
// // mongoose.connect("mongodb://localhost:27017/est",function checkDB(error)
// // {
// //     if(error)
// //     {
// //         console.log("errorr")
// //     }
// //     else
// //     {
// //         console.log("DB Connectedddd!!!!!!!!!!!")
// //     }
// // });

// // Handle connection events
// mongoose.connection;

// server.use(cors());
// server.use(express.json());
// // server.use(routes);

// server.listen(8000,function check(error)
// {
//     if(error)
//     {
//         console.log("errorr")
//     }
//     else
//     {
//         console.log("startedddddd")
//     }
// });



// var express = require('express');
// var server = express();
// var mongoose = require('mongoose');
// const cors = require('cors');

// // Your MongoDB connection URL
// const dbURL = 'mongodb://localhost:27017/Book_review';

// // Connect to MongoDB
// mongoose.connect(dbURL);

// // Handle connection events
// const db = mongoose.connection;

// db.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// db.once('open', () => {
//   console.log('DB Connected!!!!!!!!!');
//   // Your code that relies on the MongoDB connection should go here
// });

// // Uncomment the following block if you want to check for connection errors explicitly
// // mongoose.connect("mongodb://localhost:27017/est", function checkDB(error) {
// //     if (error) {
// //         console.log("errorr")
// //     } else {
// //         console.log("DB Connectedddd!!!!!!!!!!!")
// //     }
// // });

// server.use(cors());
// server.use(express.json());
// // server.use(routes);

// server.listen(8000, function check(error) {
//   if (error) {
//     console.log("Error starting server:", error);
//   } else {
//     console.log("Server started on port 8000");
//   }
// });
