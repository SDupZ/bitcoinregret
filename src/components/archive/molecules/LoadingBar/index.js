import { connect } from 'react-redux'
import LoadingBar from './LoadingBar'

const mapStateToProps = (state) => ({
  isPageLoading: state.meta.loading,
})

export default connect(mapStateToProps)(LoadingBar)