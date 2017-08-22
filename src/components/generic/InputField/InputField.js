import React, {Component} from 'react'

class InputField extends Component {
  handleInputChange = (evt) => {
    const val = evt.target.value
    this.props.updateAmount(val)
  }

  render() {
    const {initialInvestment} = this.props
    return (
      <form>
        <input type="text"
          onChange={this.handleInputChange}
          value={initialInvestment}/>
      </form>
    )
  }
}

export default InputField