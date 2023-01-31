const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://faizkhan:faizkhan12345@inoteboook.kxns8wo.mongodb.net/?retryWrites=true&w=majority';

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('Connected to Mongo Successfully')
    })
}

module.exports = connectToMongo;