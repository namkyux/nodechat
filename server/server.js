require('./config/config');

const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
var app = express();

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
// 	res.render('index.html');
// });



//
//
//
// var publicPath = path.join(__dirname, '../public');
//
// console.log(__dirname + '/../public');
//
// console.log(publicPath);


app.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});

module.exports = {app};
