import React from 'react'

export default function Counter1(props) {
    if (props.value > 3) {
        throw new Error('too many counts....')
    }

    return (
        <div>
            <h2>{props.value}</h2>
            <button onClick={props.onClick}>Add</button>
        </div>

    )
}
