const express = require("express");
const server = express();

// use is a middleware function - פונקציה שמופעלת אוטומטית באמצע
// Response-ובין ה Request-בין ה
// ומבצעת פעולה כלשהי

// express.json()
// Request-בתוך ה body יוצרת אובייקט בשם
// body-שמכיל את המידע שנשלח ב
server.use(express.json());

const products = [
    { id: 1, name: "Apple", price: 3.5 },
    { id: 2, name: "Banana", price: 5.7 },
    { id: 3, name: "Peach", price: 6.2 },
];

server.get("/api/products", (request, response) => {
    response.json(products);
});

server.get("/api/products/:id", (request, response) => {
    const id = +request.params.id;
    const oneProduct = products.find(p => p.id === id);
    response.json(oneProduct);
});

server.post("/api/products", (request, response) => {
    const product = request.body; // הנ"ל middleware-רק בגלל ה body קיים אובייקט בשם
    product.id = products.length + 1; // id הדמייה כאילו מסד הנתונים הוסיף לנו
    products.push(product);
    response.status(201).json(product);
});

server.put("/api/products/:id", (request, response) => {
    const id = +request.params.id;
    const product = request.body;
    const productToUpdate = products.find(p => p.id === id);
    productToUpdate.name = product.name;
    productToUpdate.price = product.price;
    response.json(productToUpdate);
});

server.patch("/api/products/:id", (request, response) => {
    const id = +request.params.id;
    const product = request.body;
    const productToUpdate = products.find(p => p.id === id);
    for (const prop in product) {
        if (prop in productToUpdate) { // אם המאפיין הזה אכן קיים במוצר לעדכון
            productToUpdate[prop] = product[prop];
        }
    }
    response.json(productToUpdate);
});

server.delete("/api/products/:id", (request, response) => {
    const id = +request.params.id;
    const index = products.findIndex(p => p.id === id);
    products.splice(index, 1);
    response.sendStatus(204); // Empty body
});

server.listen(3000, () => console.log("Listening on http://localhost:3000"));
