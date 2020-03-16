export interface Veiculo {
  model: string
  yearOfManufacture: number
  numberOfDoors: number
  brand: string
  details: any
}

export async function getAllVehicles(): Promise<Veiculo[]> {
  const response = await fetch(`${process.env.REACT_APP_HOST}/garage`, {
    method: 'GET'
  })

  return response.json()
}

export async function saveVehicle(
  type: string,
  model: string,
  yearOfManufacture: number,
  numberOfDoors: number,
  brand: string
) {
  await fetch(`${process.env.REACT_APP_HOST}/garage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type,
      model,
      yearOfManufacture,
      numberOfDoors,
      brand
    })
  })
}
