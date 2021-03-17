const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/foodio-db', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

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

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));