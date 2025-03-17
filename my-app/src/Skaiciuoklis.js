import React, { useState, useEffect } from "react";

const Skaiciuoklis = () => {
  const [skaicius, setSkaicius] = useState(0);

  useEffect(() => {
    console.log(`Skaičius pasikeitė į: ${skaicius}`);
  }, [skaicius]);

  return (
    <div>
      <h2>Skaitiklis: {skaicius}</h2>
      <button onClick={() => setSkaicius(skaicius + 1)}>Padidinti</button>
    </div>
  );
};

export default Skaiciuoklis;
