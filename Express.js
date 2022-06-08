




// const express = require('express');
// const app = express();

// app.get('', (req, resp) => {
//     console.log("Express.js");
//     resp.send("hello world");
// });
// app.get('/about', (req, resp) => {
//     resp.send("hello world");
// });

// app.listen(5000);



// const { response } = require("express");

// let a = 0
// let b = 10


// const data = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30);
//     }, 2000);
// });

// data.then((a_data) => {
//     a = a_data;
//     console.log(a + b);
// })




// Day : 4
// const fs = require('fs');
// const path = require('path');
// const dirpath = path.join(__dirname, 'Files');
// const filepath = `${dirpath}/Nodemodule.js`;
// fs.writeFileSync(`${filepath}/Nodemodule.js`, ' < h1 > Hello world</ > ');
// fs.appendFileSync(`${filepath}/Nodemodule.js`, 'console.log("hello world");', (err) => {
//     if (!err) console.log('file is updated');
// });
// fs.rename(filepath, `${dirpath}/N`, (err) => {
//     if (!err) console.log("File name Rename Sucessfully...");
// })
// fs.unlinkSync(`${dirpath}/Name.txt`);



// Day : 3 
// const Http = require('http');
// const second = require('./second');

// Http.createServer((req, resp) => {
//     resp.writeHead(404, { 'content-Type': 'application\json' });
//     resp.write(JSON.stringify(second));
//     resp.end();
// }).listen(7000);





// Day : 2
// const chalk = require('chalk')
// console.log(chalk.blue('Hello world!'));
// console.log(100 + 200)

// console.log(chalks.blue('Hello world!'));







// Day: 1
// const test = (a) => a * 10;
// console.log(test(5));
// const text = (a) => a * 10;

// console.log(text(5));
// const Http = require('http');
// Http.createServer((req, resp) => {
//     resp.write(
//         "<h1 height='20px'>Hello World</h1>");
//     resp.end();
// }).listen(4502);
// const second = require('./second');
// console.log(second.User_name);
// var a = ['anuj', 'kapil'];
// console.log(a);
// var b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// result = b.filter((item) => {
//     return item >= 4;
// })
// console.log(result);
// const fs = require('fs');
// fs.writeFileSync('new.js', 'conosle.log("hello world")');
// console.log(__filename);