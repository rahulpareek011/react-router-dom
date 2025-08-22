import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const allError = {};
    if (!input.firstName) allError.firstName = "First Name is required";
    if (!input.lastName) allError.lastName = "Last Name is required";
    if (!input.userName) allError.userName = "User Name is required";
    if (!input.email) allError.email = "Email is required";
    if (!input.password) allError.password = "Password is required";

    if (Object.keys(allError).length > 0) {
      setError(allError);
      return;
    }

    // ✅ overwrite single user
    localStorage.setItem("user", JSON.stringify(input));

    alert("Registered successfully");
    navigate('/login');
  };

  let styles = {
    padding: "10px",
    marginBottom: "10px",
    width: "60vh"
  };

  return (
    <div>
      <h2>Register here!</h2>
      <form onSubmit={handleSubmit}>
        <input style={styles}
          type="text"
          placeholder='First Name'
          value={input.firstName}
          onChange={(e) => setInput({ ...input, firstName: e.target.value })}
        />
        {error.firstName && <p style={{ color: "red" }}>{error.firstName}</p>}
        <br />

        <input style={styles}
          type="text"
          placeholder='Last Name'
          value={input.lastName}
          onChange={(e) => setInput({ ...input, lastName: e.target.value })}
        />
        {error.lastName && <p style={{ color: "red" }}>{error.lastName}</p>}
        <br />

        <input style={styles}
          type="text"
          placeholder='Enter Your User Name'
          value={input.userName}
          onChange={(e) => setInput({ ...input, userName: e.target.value })}
        />
        {error.userName && <p style={{ color: "red" }}>{error.userName}</p>}
        <br />

        <input style={styles}
          type="email"
          placeholder='Enter your email'
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        <br />

        <input style={styles}
          type="password"
          placeholder='Enter Your Password'
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        <br /><br />

        <button>Submit</button>
        <span>  Already user? </span><Link to={'/login'}>login</Link>
      </form>
    </div>
  )
}

export default Signup;
