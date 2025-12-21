import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { createRecipe } from "../../api/recipes";

function RecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createRecipe({
      title,
      ingredients: ingredients.split(","),
      steps: steps.split("."),
    });

    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Ingredients (comma separated)"
        fullWidth
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Steps (separate with periods)"
        fullWidth
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <Button variant="contained" type="submit">
        Add Recipe
      </Button>
    </form>
  );
}

export default RecipeForm;
