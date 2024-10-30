const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Conectando ao MongoDB (ajuste para sua URI MongoDB)
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/api/products', productRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
