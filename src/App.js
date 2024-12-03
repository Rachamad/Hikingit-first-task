import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard 
          onLogout={() => {
            setIsLoggedIn(false);
            setCurrentUser(null);
          }}
          currentUser={currentUser}
        />
      ) : (
        <>
          <RegistrationForm />
          <Login 
            onLogin={(user) => {
              setIsLoggedIn(true);
              setCurrentUser(user);
            }}
          />
        </>
      )}
    </div>
  );
};

export default App;
