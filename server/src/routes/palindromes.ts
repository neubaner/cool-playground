import { Router } from 'express'
import { generatePalindromes } from '../services/palindrome'

const palindromesRouter = Router().get('/', (req, res) => {
  const { minRange, maxRange } = req.query

  const palindromes = generatePalindromes(
    parseInt(minRange),
    parseInt(maxRange),
  )

  res.status(200).send(palindromes)
})

export default palindromesRouter
