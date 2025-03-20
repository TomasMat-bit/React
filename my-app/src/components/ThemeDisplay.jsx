import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeDisplay = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Naudojame ThemeContext, kad gautume ir keistume temą

  return (
    <div>
      <p>Esama tema: {theme}</p>
      <button onClick={toggleTheme}>Keisti tema</button>
    </div>
  );
};

export default ThemeDisplay;
