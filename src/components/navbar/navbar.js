import React, { Component } from 'react';
import "./navbar.css"

class NavBar extends Component {
    render() {
        return(
            <div>
                <ul className="nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar