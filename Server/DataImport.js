const express = require("express");
const User = require("./Models/UserModel");
const Users = require("./data/users");
const Product = require("./Models/ProductModel.js");
const products = require("./data/Products.js");

const ImportData = express.Router()


ImportData.post("/user",  async (req,res)=>{
    await User.remove({})
    const importUser = await User.insertMany(Users)
    res.send({importUser})
})


ImportData.post("/products",  async (req,res)=>{
    await Product.remove({})
    const importProducts = await Product.insertMany(products)
    res.send({importProducts})
})

module.exports = ImportData;