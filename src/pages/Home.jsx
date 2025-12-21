import Layout from "../components/Layout/Layout";
import RecipeForm from "../components/RecipeForm/RecipeForm";
import FreeRecipeSearch from "../components/FreeRecipeSearch/FreeRecipeSearch";

function Home() {
  return (
    <Layout>
      <h1>My Recipes</h1>

      <RecipeForm />

      <h2>Search Free Recipes</h2>
      <FreeRecipeSearch />
    </Layout>
  );
}

export default Home;
