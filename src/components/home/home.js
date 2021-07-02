import React from "react";
import NavBar from "../navbar/navbar"
import Greeting from "./greeting/greeting"
import Projects from "./projectcard/projects"
import 'bulma/css/bulma.css'
import './home.css'



function Home() {
    return (
        <div className="view" >
            <NavBar/>
            <Greeting/>
            
        </div>
    )
}

export default Home