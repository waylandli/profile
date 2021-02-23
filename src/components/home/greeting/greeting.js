import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./greeting.css"

class Greeting extends Component {
    render() {
        return (
            <div className="cardText">
                <div className="hey">
                    Hey it's
                </div>
                <a>
                    Wayland Li
                </a>
                <div className="body">
                    I'm a software engineer from San Francisco looking to build websites, and expand my programming abilities
                </div>
            </div>
        )
    }
}

export default Greeting;