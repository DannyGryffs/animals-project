import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card.jsx'
import axios from 'axios'


function App() {

  const [cardData, setcardData] = useState([])
   console.log(cardData)

  useEffect(() => {
    axios.get('/api/cards')
    .then((response) => {
        setcardData(response.data)
    })
}, [])

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
        { cardData.map((species) => {
          return (
            <Card 
              key={species.id}
              species={species}
            />
          )
        })}
      </section>
    </div>
  )
}

export default App
