import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <div className="wrapper">
                <ul>
                    <li>
                        <Link to="/main">Sign Into Your Account</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;