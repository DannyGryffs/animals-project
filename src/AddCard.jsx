    import { useState } from 'react'
    import axios from 'axios'

    function AddCard() {

    const [newCard, setNewCard] = useState(false)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [length, setLength] = useState('')
    const [color, setColor] = useState('')

    function addClickHandler() {
        setNewCard(true)
    }


    const handleSubmit = () => {
        let body = {
            name: name,
            category: category,
            length: length,
            color: color,
        }
        axios.post('/api/card', body)  
        .then((response) => {
            console.log(response.data)
        })  
        
        console.log(response.data)
    }

  return (
    <section className='input-card-container'>
        {   newCard 
            ?   <div className='input-card'>
                <h3>Add a new Animal</h3>
                <label for='nameInput'>Name:</label>
                <input id='nameInput' onChange={(e) => setName(e.target.value)}></input>
                <label for='categoryInput'>Species:</label>
                <input id='categoryInput' onChange={(e) => setCategory(e.target.value)}></input>
                <label for='lengthInput'>length in inches:</label>
                <input id='lengthInput' onChange={(e) => setLength(e.target.value)}></input>
                <label for='colorInput'>Color:</label>
                <input id='colorInput' onChange={(e) => setColor(e.target.value)}></input>
                <button className='submit-btn' onClick={handleSubmit} >Submit</button>
            </div>
            : null
        }
    </section>
  )
}
