import React, {Component} from 'react'

class AmountField extends Component {
  render() {
    const {amountToday} = this.props
    return (
      <p>You would have <h1>${amountToday}</h1></p>
    )
  }
}

export default AmountField