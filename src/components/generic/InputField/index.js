import {connect} from 'react-redux'
import InputField from './InputField'
import {updateAmount} from '../../../ducks/value'

const mapStateToProps = (state) => ({
  initialInvestment: state.initialInvestment
})

const mapDispatchToProps = dispatch => ({
  updateAmount: value => dispatch(updateAmount(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField)