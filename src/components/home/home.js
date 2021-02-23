import React from "react";
import NavBar from "../navbar/navbar"
import Greeting from "./greeting/greeting"
import Projects from "./projectcard/projects"
import "./home.css"

function Home() {
    return (
        <div className="view">
            <NavBar/>
            <Greeting/>
            <Projects/>
        </div>
    )
}

export default Home