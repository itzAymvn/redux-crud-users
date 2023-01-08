// React & Hooks
import React from "react";

// React Router
import { Link } from "react-router-dom";

// Render the header
const Header = () => {
    return (
        <div className="bg-purple-800 text-white">
            <nav className="flex justify-between items-center p-4">
                <div className="flex items-center">
                    <Link to="/">
                        <h1 className="text-2xl font-bold uppercase transition-transform ">
                            Home
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <Link to="/addUser">
                        <h1 className="text-xl font-bold uppercase">
                            Add User
                        </h1>
                    </Link>
                    <Link to="/listUsers">
                        <h1 className="text-xl font-bold uppercase">
                            List Users
                        </h1>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
