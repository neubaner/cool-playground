import { Router } from 'express'
import { searchForCeps } from '../services/cep'

const cepRouter = Router().get('/', async (req, res) => {
  const { ceps } = req.query

  const result = await searchForCeps((ceps as string).split(','))

  res.status(200).send(result)
})

export default cepRouter
