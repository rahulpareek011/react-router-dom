import React from 'react'
import { Link } from 'react-router-dom';


const Contact = () => {
  let styles = {
        display: "flex",
        gap: "12px",
        justifyContent: "center",
    };
    
  return (
    <>
            <h1>This is Contact Page</h1>
            <div style={styles}>
                <Link to={'/'}>Home</Link>
                <Link to={'/header'}>Header</Link>
                <Link to={'/footer'}>Footer</Link>
            </div>
        </>
  )
}

export default Contact
