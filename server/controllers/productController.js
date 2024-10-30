const getAllProducts = (req, res) => {
    res.json({ message: 'Retorna todos os produtos' });
};

module.exports = { getAllProducts };
