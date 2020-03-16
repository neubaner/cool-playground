import { Router } from 'express'
import { cashRegisterWithdraw } from '../services/cash-register'

const cashRegisterRouter = Router().get('/', (req, res) => {
  const { purchaseTotal, customerIncome } = req.query

  const result = cashRegisterWithdraw(
    parseInt(purchaseTotal),
    parseInt(customerIncome),
  )

  res.status(200).send(result)
})

export default cashRegisterRouter
