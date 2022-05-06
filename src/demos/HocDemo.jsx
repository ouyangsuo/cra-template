import React from 'react'
import WithClock from '../components/WithClock'

function HocDemo({ time }) {
    return (
        <div>HocDemo {time} </div>
    )
}

export default WithClock(HocDemo)


