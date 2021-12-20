import React, { Component } from 'react';

export default class SingleSquare extends Component {
    render() {
        return(
            <div className="square-container" 
            style= {{
                backgroundColor: "blue", 
                height: "200px", 
                width: "200px", 
                border: "1px solid black",
            }}
            >
            Hello
            </div>
        );
    }
}

