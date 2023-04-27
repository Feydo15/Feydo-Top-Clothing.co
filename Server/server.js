const express = require("express");
const cors = require("cors")
const dotenv =require("dotenv")
const connectDatabase = require("./config/MongoDb.js")
const ImportData = require("./DataImport.js")
const ProductRoute = require("./API/productRoute.js")

dotenv.config();
connectDatabase()
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// API
app.use("/api/import", ImportData);
app.use("/api/products", ProductRoute);



app.get("/", (req , res) =>{
    res.send("API is Running...")
})


const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`sever running on port ${PORT}`));