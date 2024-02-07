import { useState, useEffect } from 'react'
import './App.css'
import Card from './Card.jsx'
import axios from 'axios'


function App() {

  const [cardData, setcardData] = useState([])
  //  console.log(cardData)

  useEffect(() => {
    axios.get('/api/cards')
    .then((response) => {
        setcardData(response.data)
    })
}, [])

  return (
    <div>
      <section className='input-card-container'>
        <div className='input-card'>
          <h3>Add a new Animal</h3>
          <label for='nameInput'>Name:</label>
          <input id='nameInput'></input>
          <label for='categoryInput'>Species:</label>
          <input id='categoryInput'></input>
          <label for='lengthInput'>length in inches:</label>
          <input id='lengthInput'></input>
          <label for='colorInput'>Color:</label>
          <input id='colorInput'></input>
          <button className='submit-btn' onClick={()=>{}} >Submit</button>
        </div>
      </section>
      <section className='card-container'>
        { cardData.map((species) => {
          console.log(species)
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
