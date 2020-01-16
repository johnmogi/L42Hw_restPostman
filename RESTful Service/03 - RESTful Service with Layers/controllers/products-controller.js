const express = require("express");
const productsLogic = require("../business-logic-layer/products-logic");

const router = express.Router(); // אובייקט המסוגל לתאר נתיבים של נושא מסוים אחד

router.get("/", (request, response) => {
    const products = productsLogic.getAllProducts();
    response.json(products);
});

router.get("/:id", (request, response) => {
    const id = +request.params.id;
    const product = productsLogic.getOneProduct(id);
    response.json(product);
});

module.exports = router;