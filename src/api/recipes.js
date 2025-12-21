const API_URL = "http://localhost:5000/api/recipes";

export const getRecipes = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const getRecipe = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export const createRecipe = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateRecipe = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteRecipe = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
