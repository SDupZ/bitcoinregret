import React, {Component} from 'react'

class AmountField extends Component {
  render() {
    const {amountToday} = this.props
    return (
      <div>
        <p>You would have</p><h1>${amountToday}</h1>
      </div>
    )
  }
}

export default AmountField