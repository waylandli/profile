import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class NavBar extends Component {
    render() {
        return(
            
            <div className="navbar ">
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
awesome.min.css" rel="stylesheet" integrity="sha384-
wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
crossorigin="anonymous"></link>

                <div className="navbar-end">
                    <div className="navbar-end">
                        <a className="navbar-item">
                            Home
                        </a>
                        <a className="navbar-item">
                            Resume
                        </a>
                        <a className="navbar-item">
                            Projects
                        </a>
                        <a href="https://www.linkedin.com/in/wayland-li-ucsc/" className="navbar-item">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/waylandli" className="navbar-item">
                            <i class="fa fa-github"></i>                    
                        </a>
                        
                    </div>
                </div>
            </div>
            
        )
    }
}

export default NavBar