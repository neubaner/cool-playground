export interface CashRegisterResult {
  purchaseTotal: number
  change: number
  moneyAmmount: {
    1: number
    10: number
    100: number
  }
}

export async function cashRegisterWithdraw(
  purchaseTotal: number,
  customerIncome: number
): Promise<CashRegisterResult> {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/cash-register?purchaseTotal=${purchaseTotal}&customerIncome=${customerIncome}`
  )

  return response.json()
}
