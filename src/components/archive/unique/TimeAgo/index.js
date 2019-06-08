import {connect} from 'react-redux'
import TimeAgo from './TimeAgo'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleValueChange: action => dispatch(action)
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeAgo)