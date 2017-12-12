import {connect} from 'react-redux'
import AmountField from './AmountField'

const mapStateToProps = (state) => ({
  amountToday: state.value.amountToday,
  percentageIncrease: state.value.percentageDifference,
  btcAmount: ((1 / state.value.exchangeRate) * state.value.initialInvestment).toFixed(4),
  isInvalidTime: state.meta.invalidTime
})


export default connect(mapStateToProps)(AmountField)