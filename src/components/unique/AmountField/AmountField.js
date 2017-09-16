import React from 'react'
import './styles.css'

function AmountField(props) {
  const {amountToday, percentageIncrease, btcAmount} = props    
  const percentageClass = 'percentageIncrease '.concat(percentageIncrease >= 0 ? "greenText":"redText")

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const formatAmountToday = (x) => {
    x = Number(Number(x).toPrecision(4)).toFixed(2);x
    return numberWithCommas(x);
  }

  const formatTwoDecimals = (x) => {
    x = Number(x).toFixed(2);
    return numberWithCommas(x);
  }

  return (
    <div className="amountFieldWrapper">
      <div>is now worth: </div>
      <div className="amountWrapper">
        <span className="btcAmount">{formatTwoDecimals(btcAmount)} BTC=</span>
        <span className="amountToday" >${formatAmountToday(amountToday)}</span>
        <span className="currency">USD</span>
      </div>
      <span className={percentageClass}>{formatTwoDecimals(percentageIncrease)}%</span>
    </div>
  )
}

export default AmountField