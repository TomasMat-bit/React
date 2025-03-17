import React, { useEffect } from "react";

const Zinute = () => {
  useEffect(() => {
    console.log("Komponentas užsikrovė!");
  }, []);

  return (
    <div>
      <h2>Tai yra pranešimas iš useEffect</h2>
    </div>
  );
};

export default Zinute;
