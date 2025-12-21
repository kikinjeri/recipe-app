import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(`http://localhost:5000/recipes/${id}`);
      const data = await res.json();

      setTitle(data.title || "");
      setIngredients(data.ingredients || [""]);
      setSteps(data.steps || [""]);
      setImage(data.image || "");
    };

    fetchRecipe();
  }, [id]);

  const updateIngredient = (index, value) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const updateStep = (index, value) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };

  const addIngredient = () => setIngredients([...ingredients, ""]);
  const addStep = () => setSteps([...steps, ""]);

  const removeIngredient = (index) => {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(updated);
  };

  const removeStep = (index) => {
    const updated = steps.filter((_, i) => i !== index);
    setSteps(updated);
  };

  const handleSave = async () => {
    const updatedRecipe = {
      title,
      ingredients,
      steps,
      image,
    };

    await fetch(`http://localhost:5000/recipes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedRecipe),
    });

    navigate(`/recipe/${id}`);
  };

  return (
    <Box sx={{ maxWidth: 700, margin: "0 auto", marginTop: 4 }}>
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" sx={{ marginBottom: 3 }}>
            Edit Recipe
          </Typography>

          {/* Title */}
          <TextField
            label="Recipe Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ marginBottom: 3 }}
          />

          {/* Image URL */}
          <TextField
            label="Image URL"
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
            sx={{ marginBottom: 3 }}
          />

          {/* Ingredients */}
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            Ingredients
          </Typography>

          {ingredients.map((ing, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <TextField
                fullWidth
                value={ing}
                onChange={(e) => updateIngredient(index, e.target.value)}
              />
              <IconButton onClick={() => removeIngredient(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}

          <Button onClick={addIngredient} sx={{ marginBottom: 3 }}>
            + Add Ingredient
          </Button>

          {/* Steps */}
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            Steps
          </Typography>

          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}
            >
              <TextField
                fullWidth
                value={step}
                onChange={(e) => updateStep(index, e.target.value)}
              />
              <IconButton onClick={() => removeStep(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}

          <Button onClick={addStep} sx={{ marginBottom: 3 }}>
            + Add Step
          </Button>

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2, marginTop: 3 }}>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>

            <Button variant="outlined" onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default EditRecipe;
