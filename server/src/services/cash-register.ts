export interface CashRegisterResult {
  purchaseTotal: number
  change: number
  moneyAmmount: {
    1: number
    10: number
    100: number
  }
}

export function cashRegisterWithdraw(
  purchaseTotal: number,
  customerIncome: number,
): CashRegisterResult {
  let moneyAmmount = {
    1: 0,
    10: 0,
    100: 0,
  }
  const values = [100, 10, 1] as const
  let change = customerIncome - purchaseTotal

  values.forEach(value => {
    while (change >= value) {
      moneyAmmount[value] += 1
      change -= value
    }
  })

  return {
    purchaseTotal,
    change: customerIncome - purchaseTotal,
    moneyAmmount,
  }
}
