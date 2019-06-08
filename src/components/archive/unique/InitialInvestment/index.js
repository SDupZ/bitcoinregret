import {connect} from 'react-redux'
import InitialInvestment from './InitialInvestment'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleValueChange: action => dispatch(action)
})

export default connect(mapStateToProps, mapDispatchToProps)(InitialInvestment)