const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017"

//Harrys version
// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully");
//     })
// }


//Chatgpt version
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Error connecting to Mongo:", error);
    }
};

module.exports = connectToMongo;