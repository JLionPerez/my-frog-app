import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                    <Link to="./pages/home">Home</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;