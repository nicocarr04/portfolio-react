//Porte du serveur 
const PORT = 5500

import express from 'express'
import { temoigneurList, addTemoigneur } from './controllers/temoignages.js'

import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Bienvenu(e) cher témoigneur');
})

app.listen(PORT, () => console.log(`Serveur running on port ${PORT}`))

app.get('/temoigneurs', temoigneurList)
app.post('/temoigneurs', addTemoigneur)
