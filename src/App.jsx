
import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Login from "./login";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  function handleLogin(userRole) {
    setRole(userRole);
    setLoggedIn(true);
  }

  function handleLogout() {
    setLoggedIn(false);
    setRole("");
    setShowLogin(false);
  }

  if (loggedIn) {
    return role === "User" ? (
      <UserDashboard onLogout={handleLogout} />
    ) : (
      <AdminDashboard onLogout={handleLogout} />
    );
  }

  if (showLogin) {
    return <Login onLogin={handleLogin} />;
  }

  return <Home onLoginClick={() => setShowLogin(true)} />;
}

export default App;
