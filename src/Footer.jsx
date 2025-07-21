import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
    let styles = {
        display: "flex",
        gap: "12px",
        justifyContent: "center",
    };
  return (
    <>
            <h1>This is Footer Page</h1>
            <div style={styles}>
                <Link to={'/'}>Home</Link>
                <Link to={'/header'}>Header</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
        </>
  )
}

export default Footer
