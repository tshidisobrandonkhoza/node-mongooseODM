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
        return Dishes.findByIdAndUpdate(results._id, {
            $set: {
                description: 'Updated This Desc',
            }
        }, { new: true }).exec();

    }).then(async results => {
        console.log(`Dishes found : ${results}`);
        results.comments.push({
            rating: 5,
            comment: 'Commented',
            author: 'User1'
        })


        return results.save();



    }).then(results => {
        console.log(`Added Comments : ${results}`);
        return Dishes.deleteMany({});

    }).then(results => {
        console.log(`Removed : ${results}`);

    }).then(() => {
        return mongoose.connection.close();
    }).catch(err => console.log(err));


}).catch(err => console.log(`Connection Error: ${err}`)); 