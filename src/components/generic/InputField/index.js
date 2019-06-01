import { connect } from 'react-redux';
import InputField from './InputField';

const mapStateToProps = (state, ownProps) => ({
  value: ownProps.value(state)
});

export default connect(mapStateToProps)(InputField);
