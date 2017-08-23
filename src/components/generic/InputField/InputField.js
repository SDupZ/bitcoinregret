import React, {Component} from 'react'

class InputField extends Component {
  handleInputChange = (evt) => {
    const val = evt.target.value
    this.props.handleValueChange(val)
  }

  render() {
    const {value} = this.props

    return (
      <input type="text"
        onChange={this.handleInputChange}
        value={value}/>
    )
  }
}

export default InputField