import React from "react";
import Home from "./components/home/home"
import About from "./components/about/about"
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;