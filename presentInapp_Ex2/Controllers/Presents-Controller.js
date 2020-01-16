const express = require("express");
const presentsController = require("../Business-Logic-Layer/bll");

const router = express.Router(); // אובייקט המסוגל לתאר נתיבים של נושא מסוים אחד

router.get("/", (req, res) => {
    const presents = presentsController.getAllPresents();
    res.json(presents);
});

router.get("/:id", (res, req) => {
    const id = +req.params.id;
    const present = presentsController.getOnePresent(id);
    res.json(present);
});

router.post("/", (req, res) => {
    const presents = presentsController.getAllPresents();
    const present = req.body; //קיים אובייקט בודי רק בגלל המילוויר
    present.id = presents.length + 1; // הדמיה כאילו מסד הנתונים הוסיף לנו ID
    presents.push(present);
    res.status(201).json(present);
});

module.exports = router;