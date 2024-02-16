import React, { useState } from 'react';
import Login from './Components/Login';
import VendorManagement from './Components/VendorManagement';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <VendorManagement onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
