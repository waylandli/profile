import React from "react";
import NavBar from "../navbar/navbar"
import Greeting from "./greeting/greeting"
import "./home.css"


function Home() {
    return (
        <div class="view">
            <NavBar/>
            <Greeting/>
        </div>
    )
}

export default Home