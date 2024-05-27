import express from 'express'
import bodyParser from 'body-parser'
import { config } from 'dotenv';
config()
import cors from 'cors'
const app = express()

import homeRoute from './routes/homePage.js'
import movieInfoRoute from './routes/movieInfo.js'
import tvInfoRoute from './routes/tvInfo.js'
import searchRoute from './routes/search.js'
import searchPersonRoute from './routes/personInfo.js'

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', homeRoute)
app.use('/movie', movieInfoRoute)
app.use('/series', tvInfoRoute)
app.use('/search', searchRoute)
app.use('/person', searchPersonRoute)


app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
})