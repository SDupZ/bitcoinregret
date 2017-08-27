import React from 'react'
import './styles.css'

function AmountField(props) {
  const {amountToday, percentageIncrease, btcAmount} = props    
  const percentageClass = 'percentageIncrease '.concat(percentageIncrease >= 0 ? "greenText":"redText")

  return (
    <div className="amountWrapper">
      <div>is now worth: </div>
      <span className="btcAmount">{btcAmount} BTC=</span>
      <span className="amountToday">${amountToday}</span>
      <span className="currency">USD</span>
      <span className={percentageClass}>{percentageIncrease}%</span>
    </div>
  )
}

export default AmountField