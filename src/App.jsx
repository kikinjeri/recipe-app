import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SavedRecipes from "./pages/SavedRecipes";
import RecipeDetails from "./pages/RecipeDetails";
import EditRecipe from "./pages/EditRecipe";
import FreeRecipeSearch from "./components/FreeRecipeSearch/FreeRecipeSearch";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<FreeRecipeSearch />} />
        <Route path="/saved" element={<SavedRecipes />} />

        {/* Recipe pages */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/recipe/:id/edit" element={<EditRecipe />} />
      </Routes>
    </>
  );
}

export default App;
