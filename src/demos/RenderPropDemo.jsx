import React from 'react'
import Clock from '../components/Clock'

export default function RenderPropDemo() {
  return (
    <div>
      RenderPropDemo
      <Clock render={
        (time) => (
          <h4>{time}</h4>
        )
      } />
    </div>
  )
}
