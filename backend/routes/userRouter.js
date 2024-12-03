import express from 'express'
import { loginController, registerController } from '../controllers/userController.js'
import {  singleUpload} from '../middlewares/multer.js'

const router=express.Router()

router.post('/register',singleUpload, registerController)

router.post('/login', loginController)

export default router