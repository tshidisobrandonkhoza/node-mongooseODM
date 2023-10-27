const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const urlDb = "mongodb://127.0.0.1:27017/sample_data";

//establish connection
const connect = mongoose.connect(urlDb);

connect.then(async (db) => {

    console.log(`Connected well to Server: ${db}`);
    let newDish = await Dishes.create({
        name: 'Pizza',
        description: 'Super Delicious pizza'
    })

    newDish.then()

     console.log(`Dishes info : ${newDish}`);


}).catch(err => console.log(`Connection Error: ${err}`)); 