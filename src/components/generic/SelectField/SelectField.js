import React, {Component} from 'react'

class SelectField extends Component {
  handleSelected = (evt) => {
    const val = evt.target.value
    this.props.handleValueChange(val)
  }

  render() {
    const {value} = this.props
    return (
        <select value={value} onChange={this.handleSelected}>
          <option value="day">Days</option>
          <option value="month">Months</option>
          <option value="year">Years</option>
        </select>
    )
  }
}

export default SelectField