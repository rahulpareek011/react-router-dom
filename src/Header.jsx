import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    let styles = {
        display: "flex",
        gap: "12px",
        justifyContent: "center",
    };
  return (
    <>
            <h1>This is Header Page</h1>
            <div style={styles}>
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/footer'}>Footer</Link>
            </div>
        </>
  )
}

export default Header
