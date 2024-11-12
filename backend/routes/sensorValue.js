import express from 'express'
const router = express.Router()
import {
  getMaxSuhu,
  getMinSuhu,
  getAvgSuhu,
  getAllValue,
} from '../controllers/sensorValueContoller.js'

//* GET maximum temperature value
router.get('/suhu/max', getMaxSuhu)

//* GET minimum temperature value
router.get('/suhu/min', getMinSuhu)

//* GET average temperature value
router.get('/suhu/avg', getAvgSuhu)

//* GET all sensor value
router.get('/sensors', getAllValue)

export default router
