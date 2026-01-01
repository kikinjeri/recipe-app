import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import Layout from "../components/Layout/Layout";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/recipes/${id}`);
        const data = await res.json();
        setRecipe(data);
      } catch (err) {
        console.error("Failed to load recipe:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress size={48} />
        </Box>
      </Layout>
    );
  }

  if (!recipe) {
    return (
      <Layout>
        <Typography variant="h5" sx={{ mt: 4, textAlign: "center" }}>
          Recipe not found
        </Typography>
      </Layout>
    );
  }

  return (
    <Layout>
      <Card
        sx={{ p: 3, borderRadius: 3, boxShadow: "0 3px 10px rgba(0,0,0,0.08)" }}
      >
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            {recipe.title}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>
            Ingredients
          </Typography>
          {recipe.ingredients.map((ing, i) => (
            <Typography key={i} sx={{ ml: 1 }}>
              • {ing}
            </Typography>
          ))}

          <Typography variant="h6" sx={{ fontWeight: 600, mt: 3 }}>
            Instructions
          </Typography>
          {recipe.steps.map((step, i) => (
            <Typography key={i} sx={{ ml: 1, mb: 1 }}>
              {i + 1}. {step}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Layout>
  );
}

export default RecipeDetails;
