import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import { saveVehicle, getAllVehicles, Veiculo } from '../../api/garage'
import { InputContainer } from '../../components/InputContainer'

function Garage() {
  const [type, setType] = useState<string>('passeio')
  const [model, setModel] = useState<string>('')
  const [yearOfManufacture, setYearOfManufacture] = useState<number>(2000)
  const [numberOfDoors, setNumberOfDoors] = useState<number>(4)
  const [brand, setBrand] = useState<string>('')
  const [vehicles, setVehicles] = useState<Veiculo[]>()

  async function fetchVehicles() {
    setVehicles(await getAllVehicles())
  }

  useEffect(() => {
    fetchVehicles()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await saveVehicle(type, model, yearOfManufacture, numberOfDoors, brand)
    await fetchVehicles()
  }

  return (
    <Container>
      <h1>Garagem</h1>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <div>Tipo</div>
          <label>
            <select
              required
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option value="passeio">Passeio</option>
              <option value="moto">Moto</option>
            </select>
          </label>
        </InputContainer>
        <InputContainer>
          <div>Modelo</div>
          <label>
            <input
              required
              placeholder="Modelo"
              value={model}
              onChange={e => setModel(e.target.value)}
            />
          </label>
        </InputContainer>
        <InputContainer>
          <div>Ano de fabricação</div>
          <label>
            <input
              required
              placeholder="Ano de fabricação"
              type="number"
              min="1950"
              max="2020"
              value={yearOfManufacture}
              onChange={e => setYearOfManufacture(parseInt(e.target.value))}
            />
          </label>
        </InputContainer>
        <InputContainer>
          <div>Número de portas</div>
          <input
            required
            placeholder="Número de portas"
            type="number"
            value={numberOfDoors}
            onChange={e => setNumberOfDoors(parseInt(e.target.value))}
          />
        </InputContainer>
        <InputContainer>
          <div>Marca</div>
          <input
            required
            placeholder="Marca"
            value={brand}
            onChange={e => setBrand(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <button type="submit">Salvar veículo</button>
        </InputContainer>
      </form>
      {vehicles && (
        <table>
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Ano de fabricação</th>
              <th>Número de portas</th>
              <th>Marca</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map(vehicle => (
              <tr>
                <td>{vehicle.model}</td>
                <td>{vehicle.yearOfManufacture}</td>
                <td>{vehicle.numberOfDoors}</td>
                <td>{vehicle.brand}</td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      )}
    </Container>
  )
}

export default Garage
