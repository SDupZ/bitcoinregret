import {connect} from 'react-redux';
import DateField from './DateField';
import moment from 'moment';

import { datetimeUpdated } from '../../../ducks/value';

const mapStateToProps = (state) => ({
    day: state.value.pastDateInvested.date(),
    month: state.value.pastDateInvested.format('MMMM'),
    year: state.value.pastDateInvested.format('YYYY')
});

const mapDispatchToProps = (dispatch) => ({
    handleValueChange: value => dispatch(datetimeUpdated(value))
});


export default connect(mapStateToProps, mapDispatchToProps)(DateField)