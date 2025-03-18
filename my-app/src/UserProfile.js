import { useParams } from "react-router-dom";
import "./App.css";

function UserProfile() {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Vartotojo profilis</h1>
      <p>
        Vartotojo ID: <strong>{id}</strong>
      </p>
    </div>
  );
}

export default UserProfile;
