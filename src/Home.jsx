import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    let styles = {
        display: "flex",
        gap: "12px",
        justifyContent: "center",
    };

    return (
        <>
            <h1>This is Home Page</h1>
            <div style={styles}>
                <Link to={'/'}></Link>
                <Link to={'/header'}>Header</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/footer'}>Footer</Link>
            </div>
        </>
    )
}

export default Home
