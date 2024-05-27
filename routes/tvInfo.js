import express from 'express'
import axios from 'axios'
import { config } from 'dotenv'
config()

const router = express.Router()

const URL = 'https://api.themoviedb.org/3/tv/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.AUTH
  }
};

router.get('/:series_id', async(req, res) => {
    const series_id = req.params.series_id
    await axios.get(`${URL}/${series_id}`, options).then((data) => {
        return res.send(data.data)
    })
    .catch(err => console.log(err.message))
})

router.get('/:series_id/credits', async(req, res) => {
    const series_id = req.params.series_id;
    await axios.get(`${URL}/${series_id}/credits`, options).then((data) => {
        return res.json(data.data)
    })
    .catch(err => console.log(err.message))
})

router.get('/:series_id/:season_no', async(req, res) => {
  const series_id = req.params.series_id
  const season_no = req.params.season_no
  console.log(series_id, season_no)
  if(!series_id && !season_no) {
    console.log('no data')
  } else {
    await axios.get(`${URL}/${series_id}/season/${season_no}`, options).then((data) => {
      return res.json(data.data)
    })
    .catch(err => console.log(err.message))
  }
})

export default router;