import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Box,
} from "@mui/material";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch recipe by ID
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`http://localhost:5000/recipes/${id}`);
        const data = await res.json();
        setRecipe(data);
      } catch (error) {
        console.error("Failed to load recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  // Delete recipe
  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:5000/recipes/${id}`, {
        method: "DELETE",
      });

      navigate("/saved"); // redirect after delete
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!recipe) {
    return <Typography>Recipe not found.</Typography>;
  }

  const imageSrc =
    recipe.image || "https://via.placeholder.com/500x350?text=No+Image";

  return (
    <Box sx={{ maxWidth: 700, margin: "0 auto", marginTop: 4 }}>
      <Card sx={{ borderRadius: 2 }}>
        {/* Image */}
        <img
          src={imageSrc}
          alt={recipe.title}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />

        <CardContent>
          {/* Title */}
          <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 2 }}>
            {recipe.title}
          </Typography>

          {/* Ingredients */}
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Ingredients
          </Typography>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>
                <Typography>{ing}</Typography>
              </li>
            ))}
          </ul>

          {/* Steps */}
          <Typography variant="h6" sx={{ marginTop: 3 }}>
            Steps
          </Typography>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>
                <Typography>{step}</Typography>
              </li>
            ))}
          </ol>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              marginTop: 4,
            }}
          >
            <Button
              variant="contained"
              component={Link}
              to={`/recipe/${id}/edit`}
            >
              Edit
            </Button>

            <Button variant="outlined" color="error" onClick={handleDelete}>
              Delete
            </Button>

            <Button variant="text" onClick={() => navigate(-1)}>
              Back
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default RecipeDetails;
