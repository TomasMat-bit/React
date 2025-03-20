import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext); // Naudojame UserContext, kad gautume vartotojo informaciją

  return (
    <p>
      {user
        ? `Prisijungęs vartotojas ${user.name}`
        : "Vartotojas neprisijungęs"}
    </p>
  );
};

export default UserProfile;
