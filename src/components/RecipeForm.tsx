import React, { useState } from 'react';
import { Recipe } from '../types/Recipe';
import { ENDPOINTS } from '../config';

interface RecipeFormProps {
  onRecipeAdded: () => void; // callback pro refreš seznamu
}

const RecipeForm = ({ onRecipeAdded }: RecipeFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cookingTime, setCookingTime] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(ENDPOINTS.RECIPES, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, cookingTime }),
      });
      if (!res.ok) throw new Error("Chyba při přidávání receptu");

      setTitle("");
      setDescription("");
      setCookingTime(0);

      onRecipeAdded(); // ❗ zavoláme refreš
    } catch (err) {
      console.error(err);
    }
  };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input 
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <input 
                type="number"
                placeholder="Cooking Time"
                value={cookingTime}
                onChange={e => setCookingTime(Number(e.target.value))}
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
}

export default RecipeForm;