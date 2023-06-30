import React, { useState,useRef } from 'react'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import CardContainer from '../components/Card/CardContainer'

function Counter() {
  const [counter, SetCounter] = useState(0)
  const repeater = useRef(null)
  function onMouseOver(){
    repeater.current=setInterval(incrementCount(), 100)
  }
  function incrementCount(){
    SetCounter(counter + 1)
  }
  function decementCount(){
    SetCounter(counter + 1)
  }

  function onMouseOut(){
    clearInterval(repeater.current);
  }
  return (
    <div>
      <CardContainer title={"Click to change the state"}>
        <Button title={"+"} onClick={() => SetCounter(counter + 1)} />
        <p>Value is : {counter}</p>
        <Button title={"-"} onClick={() => SetCounter(counter - 1)} />
      </CardContainer>

      <CardContainer title={"Hover to change the state"}>
      
        <Button title={"+"} onMouseEnter={onMouseOver}  onMouseOut={onMouseOut}/>
        <p>Value is : {counter}</p>
        <Button title={"-"} onClick={() => SetCounter(counter - 1)} />
      </CardContainer>
    </div>
  )
}

export default Counter
