const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const urlDb = "mongodb://127.0.0.1:27017/sample_data";

//establish connection
const connect = mongoose.connect(urlDb);

connect.then(async (db) => {

    console.log(`Connected well to Server: ${db}`);

    await Dishes.create({
        name: 'Pizza',
        description: 'Super Delicious pizza'
    }).then(results => {
        console.log(`Dishes info : ${results}`);
    }).catch(err => console.log(err));


}).catch(err => console.log(`Connection Error: ${err}`)); 