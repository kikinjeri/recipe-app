import Layout from "../components/Layout/Layout";
import { Typography, Box, CircularProgress } from "@mui/material";
import RecipeList from "../components/RecipeList/RecipeList";
import { useEffect, useState } from "react";
import { getRecipes } from "../api/recipes";

function SavedRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        setRecipes(data);
      } catch (error) {
        console.error("Failed to load saved recipes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <Layout>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress size={48} />
        </Box>
      ) : (
        <Box sx={{ mt: 2 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 3, textAlign: "center" }}
          >
            Your Saved Recipes
          </Typography>
          <RecipeList recipes={recipes} />
        </Box>
      )}
    </Layout>
  );
}

export default SavedRecipes;
