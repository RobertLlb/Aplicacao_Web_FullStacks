import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.message}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
