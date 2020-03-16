import React, { useState } from 'react'
import { Container } from './styles'
import { InputContainer } from '../../components/InputContainer'
import { Cep, searchCeps } from '../../api/cep'

function Ceps() {
  const [ceps, setCeps] = useState<string[]>(['', '', '', '', '', ''])
  const [result, setResult] = useState<Cep[]>()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setResult(await searchCeps(ceps))
  }

  return (
    <Container>
      <h1>Ceps</h1>
      Digite os ceps para fazer uma busca (Digite somente os oito digitos):
      <form onSubmit={handleSubmit}>
        {ceps.map((cep, index) => (
          <InputContainer key={index}>
            <input
              type="number"
              value={cep}
              onChange={e => {
                const newCeps = [...ceps]
                newCeps[index] = e.target.value

                setCeps(newCeps)
              }}
            ></input>
          </InputContainer>
        ))}
        <InputContainer>
          <button type="submit">Pesquisar Ceps</button>
        </InputContainer>
      </form>
      {result && (
        <table>
          <thead>
            <tr>
              <th>Cep</th>
              <th>Logradouro</th>
              <th>Complemento</th>
              <th>Bairro</th>
              <th>Localidade</th>
              <th>UF</th>
              <th>Unidade</th>
              <th>Ibge</th>
              <th>GIA</th>
            </tr>
          </thead>
          <tbody>
            {result.map(cepResult => (
              <tr>
                <td>{cepResult.cep}</td>
                <td>{cepResult.logradouro}</td>
                <td>{cepResult.complemento}</td>
                <td>{cepResult.bairro}</td>
                <td>{cepResult.localidade}</td>
                <td>{cepResult.uf}</td>
                <td>{cepResult.unidade}</td>
                <td>{cepResult.ibge}</td>
                <td>{cepResult.gia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  )
}

export default Ceps
