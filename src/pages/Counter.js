import React, { useState } from 'react'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import CardContainer from '../components/Card/CardContainer'

function Counter() {
  const [counter, SetCounter] = useState(0)
  return (
    <div>
      <CardContainer title={"Click to change the state"}>
        <Button title={"+"} onClick={() => SetCounter(counter + 1)} />
        <p>Value is : {counter}</p>
        <Button title={"-"} onClick={() => SetCounter(counter - 1)} />
      </CardContainer>

      <CardContainer title={"Hover to change the state"}>
        <Button title={"+"} onMouseEnter={() => setInterval(SetCounter(counter + 1),100)}  />
        <p>Value is : {counter}</p>
        <Button title={"-"} onClick={() => SetCounter(counter - 1)} />
      </CardContainer>
    </div>
  )
}

export default Counter
