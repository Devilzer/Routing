import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav">
            <h2>home</h2>
            <Link to="/first">
              <h2>first</h2>
            </Link>
            <Link to="/second">
              <h2>second</h2>
            </Link>
        </div>
    )
}

export default Nav;
