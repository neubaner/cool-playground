import { searchForCeps } from './cep'

it('should return info abouts ceps', async () => {
  const result = await searchForCeps(['01001000', '30190922', '31250010'])

  expect(result).toStrictEqual([
    {
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      complemento: 'lado ímpar',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
      unidade: '',
      ibge: '3550308',
      gia: '1004',
    },
    {
      cep: '30190-922',
      logradouro: 'Avenida Augusto de Lima 744',
      complemento: '',
      bairro: 'Centro',
      localidade: 'Belo Horizonte',
      uf: 'MG',
      unidade: '',
      ibge: '3106200',
      gia: '',
    },
    {
      cep: '31250-010',
      logradouro: 'Avenida Presidente Carlos Luz',
      complemento: 'de 1601 a 3001 - lado ímpar',
      bairro: 'Caiçaras',
      localidade: 'Belo Horizonte',
      uf: 'MG',
      unidade: '',
      ibge: '3106200',
      gia: '',
    },
  ])
})
