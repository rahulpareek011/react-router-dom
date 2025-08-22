import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("currentUser");

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login", { replace: true });
  };

  let styles = {
    display: "flex",
    gap: "25px",
    fontSize: "1.4rem",
    justifyContent: "center",
    position: "absolute",
    top: "20px",
    right: "20px",
  };

  return (
    <div>
      <div style={styles}>
        <Link to="/">Home</Link>
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {!isLoggedIn && <Link to="/signup">Signup</Link>}
        {isLoggedIn && <Link to="/fetch">Fetch</Link>}
        {isLoggedIn && <Link to="/counter">Counter</Link>}
        {isLoggedIn && <a onClick={handleLogout}>Logout</a>}
      </div>
    </div>
  );
};

export default Nav;
