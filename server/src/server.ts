import express from 'express'
import cors from 'cors'
import bodyparser from 'body-parser'

import palindromesRouter from './routes/palindromes'
import cashRegisterRouter from './routes/cash-register'
import garageRouter from './routes/garage'
import cepRouter from './routes/cep'

const app = express()
  .use(cors())
  .use(bodyparser.json())
  .use('/palindromes', palindromesRouter)
  .use('/cash-register', cashRegisterRouter)
  .use('/garage', garageRouter)
  .use('/ceps', cepRouter)

export default app
