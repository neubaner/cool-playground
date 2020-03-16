import { Router } from 'express'
import { getVehicles, Veiculo, saveVehicle } from '../services/garage'

const garageRouter = Router()
  .get('/', async (req, res) => {
    const result = await getVehicles()

    res.status(200).send(result)
  })
  .post('/', async (req, res) => {
    const vehicle: Veiculo = req.body

    await saveVehicle(req.body.type, vehicle)

    res.status(201).send(vehicle)
  })

export default garageRouter
