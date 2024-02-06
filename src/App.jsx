import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'

function App() {
  return (
    <div>
      <section>
        <label for='nameInput'>Name:</label>
        <input id='nameInput'></input>
        <label for='categoryInput'>Category:</label>
        <input id='categoryInput'></input>
        <label for='lengthInput'>length in inches:</label>
        <input id='lengthInput'></input>
        <label for='colorInput'>Color:</label>
        <input id='colorInput'></input>
        <button onClick={()=>{}} >Submit</button>
      </section>
      <section>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </div>
  )
}

export default App
