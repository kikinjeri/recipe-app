import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Grid } from "@mui/material";

function RecipeList({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return <Typography>No saved recipes yet.</Typography>;
  }

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none" }}>
            <Card
              sx={{
                height: "200px",
                borderRadius: 2,
                padding: 2,
                cursor: "pointer",
                transition: "0.2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    marginBottom: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {recipe.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {recipe.ingredients.length} ingredients
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {recipe.steps.length} steps
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default RecipeList;
