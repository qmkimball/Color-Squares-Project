import React from "react";

import SingleSquare from './singleSquare'

export default function manySquares(props) {
    const makeOneHundredSquares = () => {
        const squaresArray = []
        for (let i =0; i<100; i++) {
            squaresArray.push(<SingleSquare />)
        }
        return squaresArray;
    }
    return <div className='squares-container'>{makeOneHundredSquares()}</div>;

}