import express from 'express'
import axios from 'axios'

const router = express.Router()

router.get('/:query', async (req, res) => {
    const query = req.params.query
    const URL = 'https://api.themoviedb.org/3/search/multi?'
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.AUTH
        }
    }
    if(query.length === 1) return
    await axios.get(`${URL}query=${query}`, options).then((data) => {
        return res.json(data.data)
    })
    .catch((err) => res.json(err.message))
})

export default router