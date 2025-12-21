import { useEffect, useState } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";
import RecipeList from "../components/RecipeList/RecipeList";

function SavedRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch saved recipes from backend
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("http://localhost:5000/recipes");
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        console.error("Failed to load saved recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 900, margin: "0 auto", marginTop: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 3 }}>
        Your Saved Recipes
      </Typography>

      <RecipeList recipes={recipes} />
    </Box>
  );
}

export default SavedRecipes;
