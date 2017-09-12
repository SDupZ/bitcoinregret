import React, {Component} from 'react'
import './styles.css'

class InputField extends Component {

  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      error: false,
    };
  }

  componentDidMount() {
    if (this.props.requestFocus){
      this.input.focus();
    }
  }

  handleInputChange = (evt) => {
    const val = evt.target.value;
    if (isNaN(Number(val))) {
      this.setState({...this.state, error: true });
    } else {
      this.setState({ ...this.state, error: false });
    }
    this.props.handleValueChange(val);  
  }

  render() {
    const { value, maxLength } = this.props

    const size = value.toString().length - 3 <= 0 ? 1: value.toString().length -3;
    const width = (value.toString().length * 20).toString().concat('px');
    const style = { width: width }

    return (
      <div className="inputWrapper">
        <input 
          type="text"
          onChange={this.handleInputChange}
          value={value}
          maxLength={maxLength}
          className={'inputField ' + (this.state.error ? 'error' : '')}
          size={size} 
          style={style}
          ref={(input) => { this.input = input; }}/>
        <div className={"underLine " + (this.state.error ? 'error' : '')} />
      </div>
    )
  }
}

export default InputField