import React from "react";
import View from "./view.js"
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={View} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;