import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mstp = (state) => ({
    event: {
        date: '',
        description: ''
    },
    formType: 'Create Event'
});

const mdtp = (dispatch) => ({
    submitEvent: (event) => dispatch(createEvent(event))
})

export default connect(mstp, mdtp)(EventForm);