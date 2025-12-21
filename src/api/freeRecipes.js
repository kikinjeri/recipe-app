export const searchFreeRecipes = async (query) => {
  const res = await fetch(
    `http://localhost:5000/api/recipes/search/free?q=${query}`
  );
  return res.json();
};
