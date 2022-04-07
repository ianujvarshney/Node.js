const express = require('express');

const app = express();

const path = require('path');

const publicpath = path.join(__dirname, 'html');

// app.set('view engine', 'ejs');

app.get('', (_, resp) => {
    resp.sendFile(`${publicpath}/index.html`)
});

app.get('/profile', (_, resp) => {

    const user = {
        name: 'anuj',
        email: 'anuj@gmail.com',
        address: 'chhata,mathura',
        skills: ['mongoDB', 'node.js', 'react.js', 'express.js'],
    }
    resp.render('profile.ejs', { user });
});


app.get('*', (_, resp) => {
    resp.sendFile(`${publicpath}/404.html`)
})



app.listen(5000);












// const express = require('express');

// const path = require('path');

// const app = express();

// const publicpath = path.join(__dirname, 'html');

// app.use(express.static(publicpath));
// app.get('/aboutme', (_, resp) => {
//     resp.sendFile(`${publicpath}/index.html`)
// })
// app.get('*', (_, resp) => {
//     resp.sendFile(`${publicpath}/404.html`)
// })

// app.listen(5000);