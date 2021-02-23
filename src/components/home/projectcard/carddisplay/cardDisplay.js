import React, { Component } from 'react';
import "./cardDisplay.css"

const CardDisplay = (props) => {
    return (
      <div class="card-container">
        <div className="title">
          {props.cardObject.name}
        </div>
        <div className="description">
          {props.cardObject.description}
        </div>
      </div>
    )
  }

export default CardDisplay;