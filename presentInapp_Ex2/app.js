const express = require("express");
const presentsController = require("./Controllers/Presents-Controller.js");
const app = express();

app.use(express.json());

// /api/products-ניתוב כל בקשה שמתחילה ב
// שבנינו products-controller.js-ל
app.use("/api/presents", presentsController);

app.listen(3300, () => console.log("Listening on http://localhost:3300"));