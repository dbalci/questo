import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';
import { closeModal } from '../../actions/modal_actions'

const mstp = (state) => {
    return {
        userId: state.session.id || 46,
        formType: 'create'
    }
};

const mdtp = (dispatch) => ({
    submitEvent: (event) => dispatch(createEvent(event)),
    closeModal: () => dispatch(closeModal())
    
})

export default connect(mstp, mdtp)(EventForm);