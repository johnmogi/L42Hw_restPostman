const express = require("express");
const presentsController = require("../Business-Logic-Layer/bll");
const presents = presentsController.getAllPresents();

const router = express.Router(); // אובייקט המסוגל לתאר נתיבים של נושא מסוים אחד

router.get("/", (req, res) => {
    res.json(presents);
});

router.get("/:id", (res, req) => {
    const id = +req.params.id;
    const present = presentsController.getOnePresent(id);
    res.json(present);
});

router.post("/", (req, res) => {
    const present = req.body; //קיים אובייקט בודי רק בגלל המילוויר
    present.id = presents.length + 1; // הדמיה כאילו מסד הנתונים הוסיף לנו ID
    presents.push(present);
    res.status(201).json(present);
});


router.put("/:id", (req, res) => {

    const id = +req.params.id;
    const present = req.body;
    const presentToUpdate = presents.find(p => p.id === id);
    presentToUpdate.name = present.name;
    presentToUpdate.price = present.price;
    res.json(presentToUpdate);
});

router.patch("/:id", (req, res) => {

    const id = +req.params.id;
    const present = req.body;
    const presentToUpdate = presents.find(p => p.id === id);
    for (const prop in present) {
        if (prop in presentToUpdate) {
            // אם המאפיין הזה אכן קיים
            presentToUpdate[prop] = present[prop];
        }
    }
    res.json(presentToUpdate);
});


router.delete("/:id", (req, res) => {
    const id = +req.params.id;
    const index = presents.findIndex(p => p.id === id);

    presents.splice(index, 1);
    res.sendStatus(204); // EmptyBody
});

module.exports = router;