export interface Cep {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  unidade: string
  ibge: string
  gia: string
}

export async function searchCeps(ceps: string[]): Promise<Cep[]> {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/ceps?ceps=${ceps.join(',')}`
  )

  return response.json()
}
