import {connect} from 'react-redux'
import AmountField from './AmountField'

const mapStateToProps = (state) => ({
  amountToday: state.value.amountToday,
  percentageIncrease: state.value.percentageDifference
})


export default connect(mapStateToProps)(AmountField)