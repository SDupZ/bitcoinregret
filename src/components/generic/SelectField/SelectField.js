import React, {Component} from 'react'
import './styles.css'

class SelectField extends Component {
  handleSelected = (evt) => {
    const val = evt.target.value
    this.props.handleValueChange(val)
  }

  render() {
    const {value} = this.props
    return (
        <select value={value} onChange={this.handleSelected} className='selectTimeUnitWrapper'>
          <option value="day">days</option>
          <option value="month">months</option>
          <option value="year">years</option>
        </select>
    )
  }
}

export default SelectField