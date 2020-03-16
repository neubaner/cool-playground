export async function generatePalindromes(minRange: number, maxRange: number) {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/palindromes?minRange=${minRange}&maxRange=${maxRange}`
  )

  return response.json()
}
