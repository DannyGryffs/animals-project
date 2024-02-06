import express from 'express'
import ViteExpress from 'vite-express'

const app = express()

app.get('/api/cards') 


ViteExpress.listen(app, 3032, () => {console.log('Server cruising on port 3032!')})