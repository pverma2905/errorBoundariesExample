import React, { useState } from 'react'
import Counter1 from './Counter1'


export default function Counter() {
    const [counter1, setCounter1] = useState(0)
    const increaseCounter1 = () => {
        setCounter1(counter1 + 1)
    }
    return (
        <div>
            <Counter1 value={counter1} onClick={increaseCounter1} />

        </div>
    )
}
