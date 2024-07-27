import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  const handleHomeClick = () => {
    navigate("/");
  }

  const handleCreateClick = () => {
    navigate("/create-recipe");
  }

  const handleSavedClick = () => {
    navigate("/saved-recipes");
  }

  const handleLoginRegister = () => {
    navigate("/auth");
  }

  return (
    <div className="bg-gray-900 text-white p-4 text-2xl flex flex-row justify-between">
      <div className="text-3xl hover:cursor-pointer" onClick={handleHomeClick}>Receipe App</div>
      <div className="flex flex-row">
        <div className="mx-4 hover:cursor-pointer" onClick={handleHomeClick}>
          Home
        </div>
        <div className="mx-4 hover:cursor-pointer" onClick={handleCreateClick}> Create Recipe </div>
        <div className="mx-4 hover:cursor-pointer" onClick={handleSavedClick}> Saved Recipes </div>
        <div className="mx-4">
          {!cookies.access_token ? (
            <button onClick={handleLoginRegister}>Login/Register</button>
          ) : (
            <button onClick={logout}> Logout </button>
          )}
        </div>
      </div>
    </div>
  );
};
