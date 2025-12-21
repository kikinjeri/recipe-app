import express from "express";
const router = express.Router();

let recipes = [
 {
  id: 1,
  title: "Spaghetti Bolognese",
  ingredients: [
    "spaghetti",
    "ground beef",
    "tomato sauce"
  ],
  steps: [
    "Boil pasta",
    "Cook beef",
    "Mix sauce"
  ],
  image: null
}


];

// --- FREE RECIPE SEARCH (must be BEFORE /:id) ---
import fetch from "node-fetch"; // remove if using Node 18+

router.get("/search/free", async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.json({ meals: [] });
  }

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch free recipes" });
  }
});

// GET all
router.get("/", (req, res) => {
  res.json(recipes);
});

// GET one
router.get("/:id", (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  res.json(recipe);
});

// CREATE
router.post("/", (req, res) => {
  const newRecipe = {
    id: Date.now(),
    ...req.body
  };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

// UPDATE
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  recipes = recipes.map(r => (r.id === id ? { ...r, ...req.body } : r));
  res.json({ message: "Recipe updated" });
});

// DELETE
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  recipes = recipes.filter(r => r.id !== id);
  res.json({ message: "Recipe deleted" });
});

export default router;
