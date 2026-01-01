import Layout from "../components/Layout/Layout";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import FreeRecipeSearch from "../components/FreeRecipeSearch/FreeRecipeSearch";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Layout>
      {/* Section 1 */}
      <Box
        sx={{
          minHeight: "100vh",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 3, textAlign: "center" }}
        >
          My Recipes
        </Typography>

        <RecipeForm />
      </Box>

      {/* Section 2 */}
      <Box
        sx={{
          minHeight: "100vh",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 3, textAlign: "center" }}
        >
          Search Free Recipes
        </Typography>

        <FreeRecipeSearch />
      </Box>
    </Layout>
  );
}

export default Home;
