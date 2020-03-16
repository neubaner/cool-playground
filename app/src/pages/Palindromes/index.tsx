import React, { useState } from 'react'
import { Container } from './styles'
import { generatePalindromes } from '../../api/palindromes'

function Palindromes() {
  const [palindromes, setPalindromes] = useState<number[]>()
  const [minRange, setMinRange] = useState<number>()
  const [maxRange, setMaxRange] = useState<number>()

  async function getPalindromes(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (minRange !== undefined && maxRange !== undefined) {
      setPalindromes(await generatePalindromes(minRange, maxRange))
    }
  }

  return (
    <Container>
      <h1>Palíndromos</h1>
      <div>Insira um intervalo de números:</div>
      <form onSubmit={getPalindromes}>
        <label>
          <input
            required
            type="number"
            value={minRange?.toString()}
            placeholder="Mínimo"
            onChange={e => setMinRange(parseInt(e.target.value))}
          />
        </label>
        <label>
          <input
            required
            type="number"
            value={maxRange?.toString()}
            placeholder="Máximo"
            onChange={e => setMaxRange(parseInt(e.target.value))}
          />
        </label>
        <button type="submit">Gerar palíndromos</button>
      </form>
      {palindromes !== undefined && <h2>Palíndromos no intervalo:</h2>}
      <ul>
        {palindromes?.map(palindrome => (
          <li key={palindrome}>{palindrome}</li>
        ))}
      </ul>
    </Container>
  )
}

export default Palindromes
