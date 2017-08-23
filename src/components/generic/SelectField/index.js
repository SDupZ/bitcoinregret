import {connect} from 'react-redux'
import SelectField from './SelectField'

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.val]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleValueChange: value => dispatch(ownProps.handleValueChange(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectField)