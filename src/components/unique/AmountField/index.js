import {connect} from 'react-redux'
import AmountField from './AmountField'

const mapStateToProps = (state) => ({
  amountToday: state.amountToday,
  percentageIncrease: state.percentageDifference
})


export default connect(mapStateToProps)(AmountField)