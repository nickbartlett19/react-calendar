import { useState } from 'react'
import {CalendarCell} from "./CalendarCell"
import "./styles.css"

const MONTH_LENGTHS = [31,28,31,30,31,30,31,31,30,31,30,31];

function App() {

  return (
    <>
      <h1 className = "title text-3xl font-bold underline text-center">March</h1>
        <div className = "flex flex-wrap max-w-screen-lg">
          {Array(MONTH_LENGTHS[2]).fill(<><CalendarCell /></>)}
        </div>
    </>
  )
}

export default App
