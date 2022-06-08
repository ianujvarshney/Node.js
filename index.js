const { MongoClient, collection } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

async function dataget() {
    const result = client.connect();
    const db = result.db('e-Com');
    const collection = db.collection('product');
    const response = await collection.find({}).toArray();
    console.log(response);
    // }

    dataget();


























// const { MongoClient, collection } = require('mongodb');
// const client = new MongoClient('mongodb://localhost:27017');

// async function getData() {
//     const result = await client.connect();
//     const db = result.db('e-Com');
//     const collection = db.collection('product');
//     const response = await collection.find({}).toArray();
//     console.log(response);

// }

// getData();























// const { MongoClient, collection } = require('mongodb');
// const client = new MongoClient('mongodb://localhost:27017');

// async function getData() {
//     let result = await client.connect();
//     let db = result.db('e-Com');
//     let collection = db.collection('product');
//     let response = await collection.find({}).toArray()
//     console.log(response);

// }

// getData();

















// const express = require("express");
// app = express();
// app.get('', (req, resp) => {
//     console.log("hello ", req.query.name)
//     // req.send("welcome" + req.query.name);
//     // resp.send({ name: 'anuj', address: 'chhata', pincode: 281401 });
//     resp.send(`
//         <input type="text" />
//         <a href="/about">Click Me</a>
//     `);
// });
// app.get('/about', (req, res) => {
//     res.send(`
//         <input type="text"/>
//         <a href="/">Click Me</a>
//     `)
// });
// app.listen(5000);





// const express = require('express');

// const app = express();

// const path = require('path');

// const publicpath = path.join(__dirname, 'html');

// // app.set('view engine', 'ejs');

// app.get('', (_, resp) => {
//     resp.sendFile(`${publicpath}/index.html`)
// });

// app.get('/profile', (_, resp) => {

//     const user = {
//         name: 'anuj',
//         email: 'anuj@gmail.com',
//         address: 'chhata,mathura',
//         skills: ['mongoDB', 'node.js', 'react.js', 'express.js'],
//     }
//     resp.render('profile.ejs', { user });
// });


// app.get('*', (_, resp) => {
//     resp.sendFile(`${publicpath}/404.html`)
// })



// app.listen(5000);


// // const express = require('express');

// // const path = require('path');

// // const app = express();

// // const publicpath = path.join(__dirname, 'html');

// // app.use(express.static(publicpath));
// // app.get('/aboutme', (_, resp) => {
// //     resp.sendFile(`${publicpath}/index.html`)
// // })
// // app.get('*', (_, resp) => {
// //     resp.sendFile(`${publicpath}/404.html`)
// // })

// // app.listen(5000);