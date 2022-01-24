import React from "react";
import {Link} from "react-router-dom";


function NavBar() {
    return (
        <div className="NavBar">
            <ul className="NavBarUL">
                <Link to= "/" className="navBarLink">Home</Link>
            </ul>
        </div>
    )
}

export default NavBar;