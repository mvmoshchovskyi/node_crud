import express from "express";
import {v4 as uuidv4} from 'uuid'
import {getUsers , getUser ,createUser, deleterUser , updateUser} from '../controllers/controllers.js'

const router = express.Router()

let users = []

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.delete('/:id',deleterUser  )
router.patch('/:id', updateUser)

export default router
