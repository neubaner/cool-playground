import { cashRegisterWithdraw } from './cash-register'

it('should return the correct ammount of banknotes to the user', () => {
  const result = cashRegisterWithdraw(200, 553)

  expect(result.moneyAmmount[100]).toBe(3)
  expect(result.moneyAmmount[10]).toBe(5)
  expect(result.moneyAmmount[1]).toBe(3)

  expect(result.purchaseTotal).toBe(200)
  expect(result.change).toBe(353)
})
