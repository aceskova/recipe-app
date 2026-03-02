import React, { useEffect, useState } from 'react';
import { Recipe } from '../types/Recipe';
import { ENDPOINTS } from '../config';

interface RecipeListProps {
  refreshSignal: number; // číslo, které se změní, když chceme refresh
}

const RecipeList = ({ refreshSignal }: RecipeListProps) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch(ENDPOINTS.RECIPES);
                const data = await res.json();
                setRecipes(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchRecipes();
    }, [refreshSignal]); // ❗ přidáme závislost, aby se refrešovalo po změně refreshSignal

    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <p>Cooking time: {recipe.cookingTime} min</p>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;