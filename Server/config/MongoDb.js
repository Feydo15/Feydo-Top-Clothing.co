const mongoose = require("mongoose")

mongoose.set('strictQuery', true);

const connectDatabase = async() => {
    try {
 const connection = mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Mongo Connected")
    } catch (error) {
       console.log(`Error: ${error.massage}`) 
       process.exit(1)
    }
};

module.exports = connectDatabase;