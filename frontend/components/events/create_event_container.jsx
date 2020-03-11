import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';
import { openModal } from '../../actions/modal_actions'

const mstp = (state) => ({
    event: {
        description: '',
        date: '',
    },
    formType: 'create'
});

const mdtp = (dispatch) => ({
    submitEvent: (event) => dispatch(createEvent(event)),
    
})

export default connect(mstp, mdtp)(EventForm);