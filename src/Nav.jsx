import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    let styles = {
        display: "flex",
        gap: "12px",
        justifyContent: "center",
        position: "absolute",
        top: "0"
    };
    return (
        <div>
            <div style={styles}>
                <Link to={'/'}>Home</Link>
                <Link to={'/header'}>Header</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/footer'}>Footer</Link>
                <Link to={'/fetch'}>Fetch</Link>
            </div>
        </div>
    )
}

export default Nav
