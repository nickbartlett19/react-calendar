import { useState } from 'react'
import {CalendarCell} from "./CalendarCell"
import "./styles.css"

const MONTH_LENGTHS = [31,28,31,30,31,30,31,31,30,31,30,31];

function App() {

  return (
    <>
    <h1 className = "title text-3xl font-bold underline text-center">March</h1>
    <div class ="flex h-screen w-screen justify-center items-center">
        <div className = "flex flex-wrap max-w-screen-xl justify-content align-items">
          {Array(MONTH_LENGTHS[2]).fill(<><CalendarCell /></>)}
        </div>
        {/* <h1> test centering</h1> */}
    </div>
    </>
  )
}

export default App
