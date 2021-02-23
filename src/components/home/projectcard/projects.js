import React, { Component } from 'react';
import data from './projects.json'
import CardDisplay from './carddisplay/cardDisplay'

class Projects extends Component {
    render() {

        // Display contains a collection of all the JSON objects
        const display = data.projects.map(projectObject => 
            // Key required for no error in mapping
            <div key={projectObject.name}>
                <CardDisplay cardObject={projectObject}/>
            </div>
        )

        return(
            <div>
                {display}
            </div>
        )

    }
}

export default Projects;