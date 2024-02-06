import express from 'express'
import ViteExpress from 'vite-express'
import { Species, Category, sequelize } from './db/model.js'

const app = express()

app.use(express.json())

app.get('/api/cards', async (req, res) => {
    let allSpecies = await Species.findAll({
        include: Category
    
    });
    console.log(allSpecies)
    res.status(200).send(allSpecies)
}) 


ViteExpress.listen(app, 3032, () => {console.log('Server cruising on port 3032!')})