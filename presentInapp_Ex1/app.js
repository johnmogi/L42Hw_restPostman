const express = require("express");
const app = express();
app.use;
app.use(express.json());

const presents = [
  {
    id: 1,
    code: "sdf55",
    Company: "Lego",
    description: "Paw Patrol",
    price: 45
  },
  {
    id: 2,
    code: "sdf345",
    Company: "Playmobile",
    description: "Wizards Attack",
    price: 5000
  },
  {
    id: 3,
    code: "gjk657",
    Company: "L.O.L",
    description: "Beauty queen pregnant",
    price: 110000
  }
];

app.get("/api/presents", (req, res) => {
  res.json(presents);
});
app.get("/api/presents/:id", (req, res) => {
  const id = +req.params.id;
  const onePresent = presents.find(p => p.id === id);
  res.json(onePresent);
});

app.post("/api/presents/", (req, res) => {
  const present = req.body; //קיים אובייקט בודי רק בגלל המילוויר
  present.id = presents.length + 1; // הדמיה כאילו מסד הנתונים הוסיף לנו ID
  presents.push(present);
  res.status(201).json(present);
});

app.put("/api/presents/:id", (req, res) => {
  const id = +req.params.id;
  const present = req.body;
  const presentToUpdate = presents.find(p => p.id === id);
  presentToUpdate.name = present.name;
  presentToUpdate.price = present.price;
  res.json(presentToUpdate);
});

app.patch("/api/presents/:id", (req, res) => {
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

app.delete("/api/presents/:id", (req, res) => {
  const id = +req.params.id;
  const index = presents.findIndex(p => p.id === id);

  presents.splice(index, 1);
  res.sendStatus(204); // EmptyBody
});

app.listen(3100, () => console.log("Listening on http://localhost:3100"));
