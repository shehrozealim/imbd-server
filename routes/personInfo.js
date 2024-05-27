import expres from 'express'
import axios from 'axios'

const router = expres.Router()

const URL = 'https://api.themoviedb.org/3/person'
const options = {
    method: 'GET',
    headers : {
        accept: 'application/json',
        Authorization: process.env.AUTH
    }
}

router.get('/:person_id', async (req, res) => {
    const person_id = req.params.person_id
    await axios.get(`${URL}/${person_id}`, options).then((data) => {
        return res.json(data.data)
    })
})

router.get('/:person_id/filmography', async(req, res) => {
    const person_id = req.params.person_id;
    await axios.get(`${URL}/${person_id}/combined_credits`, options).then((data) => {
        return res.json(data.data)
    })
})

export default router