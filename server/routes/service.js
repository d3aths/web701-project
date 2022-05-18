import express from 'express'
const router = express.Router()
import {
  getServices,
  getServiceById,
  deleteService,
  createService,
  updateService,
} from '../controllers/services.js'
import { protect, admin, provider } from '../authentication.js'

router.route('/').get(getServices).post(protect, admin, provider, createService)
router
  .route('/:id')
  .get(getServiceById)
  .delete(protect, admin, deleteService)
  .put(protect, admin, provider, updateService)

export default router