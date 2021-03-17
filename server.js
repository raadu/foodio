// Title: Server
// Details: server.js file contains codes for NodeJS server.
// Author: raadu
// Date: 17 March 2021, 11L26PM

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

// app scaffolding
const app = express();

// Middlewares
app.use(bodyParser.json());

// Connect to mongoDB local DB
mongoose.connect('mongodb://localhost/foodio-db', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// DB Schema
const Product = mongoose.model("products", new mongoose.Schema({
    _id: {type: String, default: shortid.generate},
    title: String,
    description: String,
    image: String,
    price: Number,
    cuisines: [String],
}));

// Get all products
app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

// Add new product
app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
  });

// Delete product
app.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

// Port
const port = process.env.PORT || 5000;

// Listen to server
app.listen(port, () => console.log("serve at http://localhost:5000"));