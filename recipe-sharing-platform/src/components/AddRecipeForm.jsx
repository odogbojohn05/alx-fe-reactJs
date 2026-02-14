import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { title, ingredients, steps });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Add New Recipe
        </h1>

        
        <label className="block mb-2 font-semibold">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          placeholder="Enter recipe title"
        />

        
        <label className="block mb-2 font-semibold">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          placeholder="Enter ingredients separated by commas"
          rows="3"
        />

        
        <label className="block mb-2 font-semibold">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          placeholder="Enter each step on a new line"
          rows="4"
        />

        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
