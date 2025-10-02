require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productsRoute = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/uwearit", { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/products', productsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
