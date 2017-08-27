import React, {Component} from 'react'
import './styles.css'

class InputField extends Component {

  handleInputChange = (evt) => {
    const val = evt.target.value
    this.props.handleValueChange(val)
  }

  render() {
    const {value} = this.props

    const size = value.toString().length - 3 <= 0 ? 1: value.toString().length -3;
    const width = (value.toString().length * 20).toString().concat('px');
    const style = {
      width: width
    }
    return (
      <div className="inputWrapper">
        <input 
          type="text"
          onChange={this.handleInputChange}
          value={value}
          className='inputField'
          size={size} 
          style={style}/>
        <div className="underLine" />
      </div>
    )
  }
}

export default InputField