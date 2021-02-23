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
                            <div>Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <div>About</div>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar