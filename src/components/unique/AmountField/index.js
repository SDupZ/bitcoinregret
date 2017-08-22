import {connect} from 'react-redux'
import AmountField from './AmountField'

const mapStateToProps = (state) => ({
  amountToday: state.amountToday
})


export default connect(mapStateToProps)(AmountField)