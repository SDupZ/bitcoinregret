import { connect } from 'react-redux';
import SelectField from './SelectField';

const mapStateToProps = (state, ownProps) => ({
  value: ownProps.value(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleValueChange: value => dispatch(ownProps.handleValueChange(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectField);
