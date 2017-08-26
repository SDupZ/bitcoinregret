import {connect} from 'react-redux'
import AppLoading from './AppLoading'

const mapStateToProps = (state) => ({
  loading: state.meta.loading,
})


export default connect(mapStateToProps)(AppLoading)