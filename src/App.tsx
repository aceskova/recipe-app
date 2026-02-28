import React, { useState } from 'react';
import './App.css';
// import { Recipe } from './types/Recipe';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';

function App() {
  const [refreshSignal, setRefreshSignal] = useState(0);

  const handleRecipeAdded = () => {
    setRefreshSignal((prev) => prev + 1); // změna čísla spustí refreš RecipeList
  };

  return (
    <div className="App">
      <h1>Recipes</h1>
      <RecipeForm onRecipeAdded={handleRecipeAdded} />
      <RecipeList refreshSignal={refreshSignal} />
    </div>
  );
}

export default App;