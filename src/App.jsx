// App.jsx
import React, { useState } from "react";
import { Home, Login } from "./components";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin); 
  };

  return (
    <div className="relative min-h-screen bg-gray-100">

      <button
        onClick={toggleLogin}
        className="btn btn-success absolute top-4 right-4"
      >
        {showLogin ? "Home" : "Log in"}
      </button>


      {showLogin ? <Login /> : <Home />}
    </div>
  );
};

export default App;
