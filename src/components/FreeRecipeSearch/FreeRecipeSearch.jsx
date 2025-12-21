import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Collapse,
  Pagination,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FreeRecipeSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  const RECIPES_PER_PAGE = 6;

  const fetchRecipes = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a search term.");
      setRecipes([]);
      return;
    }

    try {
      setError("");

      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );

      const data = await res.json();

      if (!data.meals) {
        setRecipes([]);
        setError("No recipes found.");
        return;
      }

      setRecipes(data.meals);
      setPage(1); // reset to first page
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError("Failed to fetch recipes.");
    }
  };

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const paginatedRecipes = recipes.slice(
    (page - 1) * RECIPES_PER_PAGE,
    page * RECIPES_PER_PAGE
  );

  return (
    <Box sx={{ marginTop: 3 }}>
      {/* Search Input */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
        <TextField
          label="Search Free Recipes"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Button variant="contained" onClick={fetchRecipes}>
          Search
        </Button>
      </Box>

      {/* Error Message */}
      {error && (
        <Typography color="error" sx={{ marginBottom: 2 }}>
          {error}
        </Typography>
      )}

      {/* Recipe Results */}
      <Grid container spacing={3}>
        {paginatedRecipes.map((meal) => {
          // Extract ingredients + measures
          const ingredients = [];
          for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim()) {
              ingredients.push(`${ingredient} — ${measure}`);
            }
          }

          return (
            <Grid item xs={12} sm={6} md={4} key={meal.idMeal}>
              <Card
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={meal.strMealThumb}
                  alt={meal.strMeal}
                  sx={{ objectFit: "cover" }}
                />

                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      minHeight: "48px", // consistent title height
                    }}
                  >
                    {meal.strMeal}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {meal.strArea} • {meal.strCategory}
                  </Typography>

                  <IconButton
                    onClick={() => toggleExpand(meal.idMeal)}
                    sx={{
                      transform: expanded[meal.idMeal]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "0.3s",
                      marginTop: 1,
                    }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardContent>

                {/* Expandable Section */}
                <Collapse
                  in={expanded[meal.idMeal]}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Ingredients
                    </Typography>
                    {ingredients.map((item, idx) => (
                      <Typography key={idx} variant="body2">
                        • {item}
                      </Typography>
                    ))}

                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, marginTop: 2 }}
                    >
                      Instructions
                    </Typography>
                    <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                      {meal.strInstructions}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Pagination */}
      {recipes.length > RECIPES_PER_PAGE && (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
          <Pagination
            count={Math.ceil(recipes.length / RECIPES_PER_PAGE)}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
}

export default FreeRecipeSearch;
