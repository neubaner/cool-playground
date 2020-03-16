export function isPalindrome(number: number) {
  let reversed = 0
  let originalNumber = number

  while (originalNumber !== 0) {
    reversed = reversed * 10 + (originalNumber % 10)
    originalNumber = Math.floor(originalNumber / 10)
  }

  return number === reversed
}

export function generatePalindromes(
  minRange: number,
  maxRange: number,
): number[] {
  const result: number[] = []

  for (let number = minRange; number <= maxRange; number++) {
    if (isPalindrome(number)) {
      result.push(number)
    }
  }

  return result
}
