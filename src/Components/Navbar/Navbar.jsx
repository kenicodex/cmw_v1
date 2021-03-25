import React from 'react';
import './style.css'
function Navbar(props) {
    return (
        <nav  className={props.color}> 
            <div className="brand">CMW</div>
            <div className="link"></div>
            <div className="right"></div>
        </nav>
    );
}

export default Navbar;