const mongoose = require("mongoose");
dbConnect()

async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://elioxiaolan:Lx456790.@cluster0.q1amv.mongodb.net/alan-turing-celebration', {useNewUrlParser : true});
        console.log('Mongo DB Connection Succeeds')
    } catch (error) {
        console.log('Mongo DB Connection Failed')
    }
}

module.exports = mongoose;