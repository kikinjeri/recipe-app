import Layout from "../components/Layout/Layout";
import FreeRecipeSearch from "../components/FreeRecipeSearch/FreeRecipeSearch";
import { Box, Typography } from "@mui/material";

function SearchRecipes() {
  return (
    <Layout>
      <Box sx={{ mt: 2 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 3, textAlign: "center" }}
        >
          Search Recipes
        </Typography>
        <FreeRecipeSearch />
      </Box>
    </Layout>
  );
}

export default SearchRecipes;
