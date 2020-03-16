import React, { useState } from 'react'
import { Container } from './styles'
import {
  cashRegisterWithdraw,
  CashRegisterResult
} from '../../api/cash-register'

function CashRegister() {
  const [purchaseTotal, setPurcharseTotal] = useState<number>()
  const [customerIncome, setCustomerIncome] = useState<number>()
  const [cashRegisterResult, setCashRegisterResult] = useState<
    CashRegisterResult
  >()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (purchaseTotal !== undefined && customerIncome !== undefined) {
      setCashRegisterResult(
        await cashRegisterWithdraw(purchaseTotal, customerIncome)
      )
    }
  }

  return (
    <Container>
      <h1>Caixa Registradora</h1>
      <div>Insira o valor total da compra e o valor pago pelo cliente</div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Valor total da compra"
            required
            type="number"
            step="0.01"
            value={purchaseTotal}
            onChange={e => setPurcharseTotal(parseFloat(e.target.value))}
          />
        </label>
        <label>
          <input
            placeholder="Valor pago pelo cliente"
            required
            type="number"
            step="0.01"
            value={customerIncome}
            onChange={e => setCustomerIncome(parseFloat(e.target.value))}
          />
        </label>
        <button>Efetuar pagamento</button>
        {cashRegisterResult && (
          <ul>
            <li>Valor total da compra: {cashRegisterResult.purchaseTotal}</li>
            <li>Troco: {cashRegisterResult.change}</li>
            <li>
              Notas do troco:
              <ul>
                <li>{cashRegisterResult.moneyAmmount[1]} nota(s) de R$ 1,00</li>
                <li>
                  {cashRegisterResult.moneyAmmount[10]} nota(s) de R$ 10,00
                </li>
                <li>
                  {cashRegisterResult.moneyAmmount[100]} nota(s) de R$ 100,00
                </li>
              </ul>
            </li>
          </ul>
        )}
      </form>
    </Container>
  )
}

export default CashRegister
