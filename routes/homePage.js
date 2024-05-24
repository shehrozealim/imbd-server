import express from 'express'
import axios from 'axios'
import { config } from 'dotenv'
config()

const router = express.Router()

const urlMovie = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US'
const urlTV = 'https://api.themoviedb.org/3/trending/tv/week?language=en-US'
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.AUTH
    }
  };


router.get('/homepage/top10movies', async (req, res) => {
    await axios.get(urlMovie, options).then((data) => {
        return res.json(data.data)
    })
})

router.get('/homepage/top10tv', async(req, res) => {
  await axios.get(urlTV, options).then((data) => {
    return res.json(data.data)
  })
})

export default router