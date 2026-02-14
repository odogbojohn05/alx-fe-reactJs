import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients.split(",").map((i) => i.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please include at least two ingredients.";
      }
    }
    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions: steps.split("\n").map((s) => s.trim()),
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe submitted successfully!");

    
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full md:max-w-xl"
      >
        <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Add New Recipe
        </h1>

      
        <label className="block mb-2 font-semibold">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="text-red-500 mb-4">{errors.title}</p>}

        
        <label className="block mb-2 font-semibold">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 md:h-24"
          placeholder="Enter ingredients separated by commas"
          rows="3"
        />
        {errors.ingredients && (
          <p className="text-red-500 mb-4">{errors.ingredients}</p>
        )}

        
        <label className="block mb-2 font-semibold">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 md:h-32"
          placeholder="Enter each step on a new line"
          rows="4"
        />
        {errors.steps && <p className="text-red-500 mb-4">{errors.steps}</p>}

        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition md:py-3"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
