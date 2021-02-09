import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./greeting.css"

class Greeting extends Component {
    render() {
        return (
            <div class="cardText">
                <a>
                    Welcome to my Website
                </a>
                <div class="body">
                    Here you will learn about what kind of engineer I am and the types of project I have been involved in
                </div>
            </div>
        )
    }
}

export default Greeting;