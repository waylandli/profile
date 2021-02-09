import React from "react";
import NavBar from "./components/navbar/navbar"
import Greeting from "./components/greeting/greeting"
import "./view.css"


function View() {
    return (
        <div class="view">
            <NavBar/>
            <Greeting/>
        </div>
    )
}

export default View