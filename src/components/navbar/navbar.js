import React, { Component } from 'react';
import "./navbar.css"
import {Link } from "react-router-dom";


class NavBar extends Component {
    render() {
        return(
            <div>
                <ul className="nav">
                    <li>
                        <Link to="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar