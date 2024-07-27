import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import Receipe from "../components/Receipe";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);
  console.log(recipes);
  return (
    <div className="flex flex-row justify-center">
      <div className="bg-gray-800 w-[40%] my-10 rounded-xl">
        <div className="text-4xl font-semibold text-center my-4  text-white">
          Recipe
        </div>
        <div className="text-center bg-gray-300 rounded-xl rounded-t-none">
          <ul>
            {recipes.map((recipe) => (
              <Receipe
                save={saveRecipe}
                isSaved={isRecipeSaved}
                key={recipe._id}
                id={recipe._id}
                heading={recipe.name}
                instruction={recipe.instructions}
                image={recipe.imageUrl}
                CookingTime={recipe.coolingTime}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
