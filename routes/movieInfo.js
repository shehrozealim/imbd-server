import express from 'express'
import axios from 'axios'
import { config } from 'dotenv'
config()

const router = express.Router()

const URL = 'https://api.themoviedb.org/3/movie'
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.AUTH
    }
  };

router.get('/:movie_id/', async (req, res) => {  
    const movie_id = req.params.movie_id
    await axios.get(`${URL}/${movie_id}`, options).then((data) => {
        return res.json(data.data)
    })
})

router.get('/:movie_id/credits', async (req, res) => {  
  const movie_id = req.params.movie_id
  await axios.get(`${URL}/${movie_id}/credits`, options).then((data) => {
      return res.json(data.data)
  })
})

export default router