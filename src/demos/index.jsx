import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Demos() {
    return (
        <div>
            <h3>Demos</h3>
            <hr />
            <Outlet />
        </div>
    )
}
