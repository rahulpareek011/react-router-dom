import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [input, setInput] = useState({
        userName: "",
        password: "",
    });
    const [error, setError] = useState({})

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const allError = {};
        if (!input.userName) allError.userName = "UserName is required";
        if (!input.password) allError.password = "Password is required";

        if (Object.keys(allError).length > 0) {
            setError(allError);
            return;
        }

        // Get single user from localStorage
        const registeredUser = JSON.parse(localStorage.getItem("user"));

        if (!registeredUser || 
            registeredUser.userName !== input.userName || 
            registeredUser.password !== input.password) {
            alert("Invalid UserName or Password");
            return;
        }

        // Save current logged-in user (optional)
        localStorage.setItem("currentUser", JSON.stringify(registeredUser));

        alert(`Login Successfully ${registeredUser.firstName}`);
        navigate("/fetch"); // redirect to protected page
    }

    let styles = {
        padding: "10px",
        marginBottom: "10px",
        width: "60vh"
    }

    return (
        <div>
            <h2>Login Here!</h2>
            <form onSubmit={handleSubmit}>
                <input style={styles}
                    type="text"
                    name="userName"
                    placeholder="Enter Your UserName"
                    value={input.userName}
                    onChange={handleChange}
                />
                {error.userName && <p style={{ color: "red" }}>{error.userName}</p>}
                <br />

                <input style={styles}
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    value={input.password}
                    onChange={handleChange}
                />
                {error.password && <p style={{ color: "red" }}>{error.password}</p>}
                <br />

                <button type="submit">Submit</button><br />
                <span>New User? </span><Link to="/signup">Signup</Link>
            </form>
        </div>
    )
}

export default Login
