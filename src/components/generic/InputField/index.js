import {connect} from 'react-redux'
import InputField from './InputField'

const mapStateToProps = (state, ownProps) => ({
  value: ownProps.value(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleValueChange: value => dispatch(ownProps.handleValueChange(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField)