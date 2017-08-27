import {connect} from 'react-redux';
import DateField from './DateField';
import moment from 'moment';

const mapStateToProps = (state) => ({
    day: moment().add(-state.value.timeValue, state.value.timeUnit).date(),
    month: moment().add(-state.value.timeValue, state.value.timeUnit).format('MMMM'),
    year: moment().add(-state.value.timeValue, state.value.timeUnit).format('YYYY')
})


export default connect(mapStateToProps)(DateField)