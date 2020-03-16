import { isPalindrome, generatePalindromes } from './palindrome'

it('should be palindrome', () => {
  expect(isPalindrome(101)).toBe(true)
  expect(isPalindrome(200)).toBe(false)
})

it('should generate palindromes in range', () => {
  expect(generatePalindromes(100, 200)).toStrictEqual([
    101,
    111,
    121,
    131,
    141,
    151,
    161,
    171,
    181,
    191,
  ])
})
