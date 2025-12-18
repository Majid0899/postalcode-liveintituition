
import express from 'express'
import {handleFetchPostal} from '../controller/postalController.js'
import { jwtAuthMiddleware } from '../middleware/authMiddleware.js'

const router=express.Router()

router.get("/:postalCode",jwtAuthMiddleware,handleFetchPostal)

export default router
