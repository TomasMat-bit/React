import React, { createContext, useState } from "react";

// Sukuriame AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Funkcija, kuri keičia prisijungimo būseną
  const toggleAuth = () => setIsLoggedIn((prev) => !prev);

  // Jei prisijungta, grąžiname vartotojo informaciją, priešingu atveju null
  const user = isLoggedIn ? { name: "Jonas" } : null;

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleAuth, user }}>
      {children}{" "}
      {/* Suteikiame visus vaikus, kad galėtų naudotis šiuo kontekstu */}
    </AuthContext.Provider>
  );
};
