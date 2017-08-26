import React, {Component} from 'react'
import './styles.css'

class InputField extends Component {

  handleInputChange = (evt) => {
    const val = parseInt(evt.target.innerText, 10)
    this.props.handleValueChange(val)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    const {value} = this.props

    return (
      <span
        contentEditable={true}
        onInput={this.handleInputChange}
        onBlur={this.handleInputChange}
        value={value}
        className='inputField'>
        
        {value}
        </span>
    )
  }
}

export default InputField