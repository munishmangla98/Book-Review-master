/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Book_review');

// Insert a few documents into the sales collection.
db.getCollection('User').insertMany([
  {"username": "string", "email": "string@gmail.com", "password": 123, "role": "user,admin" },
  {"username": "string_1", "email": "string_1@gmail.com", "password": 1234, "role": "user_1,admin"},
  {"username": "string_2", "email": "string_2@gmail.com", "password": 1235, "role": "user_2,admin"},
  {"username": "string_3", "email": "string_3@gmail.com", "password": 1236, "role": "user_3,admin"},
  {"username": "string_4", "email": "string_4@gmail.com", "password": 1237, "role": "user_4,admin"},
  {"username": "string_5", "email": "string_5@gmail.com", "password": 1238, "role": "user_5,admin"},
  {"username": "string_6", "email": "string_6@gmail.com", "password": 1239, "role": "user_6,admin"},
  {"username": "string_7", "email": "string_7@gmail.com", "password": 1231, "role": "user_7,admin"},
  {"username": "string_8", "email": "string_8@gmail.com", "password": 12312, "role": "user_8,admin"},
  {"username": "string_9", "email": "string_9@gmail.com", "password": 12313, "role": "user_9,admin"},
]);

// Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// Print a message to the output window.
console.log(`done`);

// // Here we run an aggregation and open a cursor to the results.
// // Use '.toArray()' to exhaust the cursor to return the whole result set.
// // You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//   // Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   // Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: ['$price', '$quantity'] } } } }
// ]);
