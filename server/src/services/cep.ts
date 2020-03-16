import axios from 'axios'

export async function searchForCeps(ceps: string[]) {
  const result = []

  for (const cep of ceps) {
    if (!/^\d{8}$/.test(cep.toString())) {
      throw new Error('Invalid cep format')
    }

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    result.push(response.data)
  }

  return result
}
