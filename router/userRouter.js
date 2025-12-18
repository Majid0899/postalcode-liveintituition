import express from 'express'
import { handleRegisterUser,hanldeLoginUser } from '../controller/userController.js';

const router=express.Router()


router.post("/",handleRegisterUser)
router.post("/login",hanldeLoginUser)


export default router;