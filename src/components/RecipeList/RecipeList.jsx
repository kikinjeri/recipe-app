import { useEffect, useState } from "react";
import { getRecipes } from "../../api/recipes";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then(setRecipes);
  }, []);

  return (
    <ul>
      {recipes.map((r) => (
        <li key={r.id}>{r.title}</li>
      ))}
    </ul>
  );
}

export default RecipeList;
