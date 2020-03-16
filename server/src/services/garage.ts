import fs from 'fs'
import { promisify } from 'util'

const readFile = promisify(fs.readFile)
const fileExists = promisify(fs.exists)
const writeFile = promisify(fs.writeFile)

export interface Veiculo {
  model: string
  yearOfManufacture: number
  numberOfDoors: number
  brand: string
  details: any
}

export class Passeio implements Veiculo {
  numberOfDoors = 4

  constructor(
    public model: string,
    public yearOfManufacture: number,
    public brand: string,
    public details: any,
  ) {}
}

export class Moto implements Veiculo {
  constructor(
    public model: string,
    public yearOfManufacture: number,
    public numberOfDoors: number,
    public brand: string,
    public details: any,
  ) {
    this.details = {
      ...details,
      wheels: 2,
      passengers: [1, 2],
    }
  }
}

enum VehicleType {
  moto = 'moto',
  passeio = 'passeio',
}

const vehiclesPath = './vehicles.json'

export async function saveVehicle(type: VehicleType, vehicle: Veiculo) {
  let existingVehicles: Veiculo[] = []

  if (await fileExists(vehiclesPath)) {
    existingVehicles = await getVehicles()
  }

  let newVehicle: Veiculo
  switch (type) {
    case VehicleType.moto:
      newVehicle = new Moto(
        vehicle.model,
        vehicle.yearOfManufacture,
        vehicle.numberOfDoors,
        vehicle.brand,
        {},
      )
    case VehicleType.passeio:
      newVehicle = new Passeio(
        vehicle.model,
        vehicle.yearOfManufacture,
        vehicle.brand,
        {},
      )
  }

  existingVehicles.push(newVehicle)

  await writeFile(vehiclesPath, JSON.stringify(existingVehicles))

  return existingVehicles
}

export async function getVehicles(): Promise<Veiculo[]> {
  return JSON.parse(await readFile(vehiclesPath, { encoding: 'utf8' }))
}
