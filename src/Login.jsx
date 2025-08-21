import React, { useState } from 'react'
import { Navigate, useNavigate,Link } from 'react-router-dom';

const Login = () => {
    const [input, setInput] = useState({
        userName: "",
        password: "",
    });
    const [error, setError] = useState([])

    const navigate = useNavigate();
    const handleUserNameChange = (e) => {
        setInput({...input, userName: e.target.value })
    }
    const handlePasswordChange = (e) => {
        setInput({...input ,password: e.target.value })
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        const allError = {}
        if(!input.userName) allError.userName = "UserName is required";
        if(!input.password) allError.password = "Password is required";

        if(Object.keys(allError).length>0){
            setError(allError)
            return
        }

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        const exist = existingUsers.find(
            (item) => item.userName === input.userName && item.password === input.password
        );

        if(!exist){
            alert("Invalid UserName or password")
            return
        }

        alert(`Login Successfully ${exist.firstName}`)
        localStorage.setItem("currentUser", JSON.stringify(exist));
    }

    let styles = {
        padding: "10px",
        marginBottom: "10px",
        width:"60vh"  
    }


    return (
        <div>
            <h2>Login Here!</h2>
            <form onSubmit={handleSumbit}>
                <input  style={styles}
                    type="text"
                    placeholder='Enter Your UserName'
                    value={input.userName}
                    onChange={handleUserNameChange}
                /> 
                {error.userName && <p style={{color:"red"}}>{error.userName}</p>}
                <br />
                <input  style={styles}
                    type="password"
                    placeholder='Enter Your Password'
                    value={input.password}
                    onChange={handlePasswordChange}
                />
                {error.password && <p style={{color:"red"}}>{error.password}</p>}
                <br />
                <button>Submit</button><span>  </span><Link to={'/signup'}>Signup</Link>
            </form>

        </div>
    )
}

export default Login
