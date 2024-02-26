import { useState } from 'react'
import {CalendarCell} from "./CalendarCell"
import "./styles.css"

function App() {

  return (
    <>
      <h1 className = "title">March</h1>
      <div className = "grid">
        <div className = "column">
          <div className = "calendar-cell">
            <h1 className = "card-header">1</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">9</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">17</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">25</h1>
            <CalendarCell />
          </div>
        </div>
        <div className = "column">
          <div className = "calendar-cell">
            <h1 className = "card-header">2</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">10</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">18</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">26</h1>
            <CalendarCell />
          </div>
        </div>
        <div className = "column">
          <div className = "calendar-cell">
            <h1 className = "card-header">3</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">11</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">19</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">27</h1>
            <CalendarCell />
          </div>
        </div>
        <div className = "column">
          <div className = "calendar-cell">
            <h1 className = "card-header">4</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">12</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">20</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">28</h1>
            <CalendarCell />
          </div>
        </div>
        <div className = "column">
          <div className = "calendar-cell">
            <h1 className = "card-header">5</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">13</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">21</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">29</h1>
            <CalendarCell />
          </div>
        </div>
        <div className = "column">
          <div className = "calendar-cell">
            <h1 className = "card-header">6</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">14</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">22</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">30</h1>
            <CalendarCell />
          </div>
        </div>
        <div className = "column">
          <div className = "calendar-cell">
            <h1 className = "card-header">7</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">15</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">23</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">31</h1>
            <CalendarCell />
          </div>
        </div>
        <div className = "column">
          <div className = "calendar-cell">
            <h1 className = "card-header">8</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">16</h1>
            <CalendarCell />
          </div>
          <div className = "calendar-cell">
            <h1 className = "card-header">24</h1>
            <CalendarCell />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
