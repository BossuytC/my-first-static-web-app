import React, { useState } from 'react';
import { Recipe, Ingredient } from '../types';
import { useNavigate } from 'react-router-dom';
import '../styles/AddRecipe.scss'; // Correct path to your SCSS file

interface AddRecipeProps {
  addRecipe: (recipe: Recipe) => void;
}

const AddRecipe: React.FC<AddRecipeProps> = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description && instructions && ingredients.length > 0) {
      const newRecipe: Recipe = {
        id: Date.now(),
        name,
        description,
        instructions,
        ingredients,
      };
      addRecipe(newRecipe);
      navigate('/');
    } else {
      alert("Please fill in all fields and add at least one ingredient.");
    }
  };

  const addIngredient = () => {
    setIngredients((prev) => [...prev, { name: '', amount: '' }]);
  };

  const handleIngredientChange = (index: number, field: 'name' | 'amount', value: string) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      />
      <h4>Ingredients</h4>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Ingredient Name"
            value={ingredient.name}
            onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Amount"
            value={ingredient.amount}
            onChange={(e) => handleIngredientChange(index, 'amount', e.target.value)}
            required
          />
        </div>
      ))}
      <button type="button" className="add-ingredient" onClick={addIngredient}>Add Ingredient</button>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;
