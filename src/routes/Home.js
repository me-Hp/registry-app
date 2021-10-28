import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>HOME</h1>
            <Link to="/registry">click here to go to Home</Link>
        </div>
    );
}

export default Home;