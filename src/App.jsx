import { useState } from 'react'
import {CalendarCell} from "./CalendarCell"
import "./styles.css"

const MONTH_LENGTHS = [31,28,31,30,31,30,31,31,30,31,30,31];

function App() {
  let cellArr = Array(MONTH_LENGTHS[2]).fill(<><CalendarCell /></>);
  let counter = 0;

  return (
    <>
      <h1 className = "text-3xl font-bold underline text-center mb-5">March</h1>
      <div className ="flex w-screen justify-center items-center">
        <div className = "flex flex-wrap max-w-screen-xl justify-content align-items">
          {cellArr.map(cell => {
            counter++;
            return (
              <div className = "flex-column">
                <h5>{counter}</h5>
                {cell}
              </div>)
          })}
        </div>
      </div>
    </>
  )
}

export default App
