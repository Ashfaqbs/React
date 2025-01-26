import React from 'react'
import { useParams } from 'react-router-dom'

function Number() {

    const { idx } = useParams()
    console.log(idx)
    return (
        <div>Number {idx}</div  >
    )
}

export default Number
