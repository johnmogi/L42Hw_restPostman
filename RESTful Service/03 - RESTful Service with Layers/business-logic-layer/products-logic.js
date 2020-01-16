const dal = require("../data-access-layer/db");

function getAllProducts() {
    return dal.products;
}

function getOneProduct(id) {
    const product = dal.products.find(p => p.id === id);
    return product;
}

// ......

module.exports = {
    getAllProducts,
    getOneProduct
};