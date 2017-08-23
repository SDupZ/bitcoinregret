import React, {Component} from 'react'
import './styles.css'

class AmountField extends Component {
  render() {
    const {amountToday, percentageIncrease} = this.props    
    const percentageClass = percentageIncrease >= 0 ? "greenText":"redText"

    return (
      <div>
        <p>You would have</p><h1>${amountToday}</h1>
        <h3 className={percentageClass}>{percentageIncrease}%</h3>
      </div>
    )
  }
}

export default AmountField