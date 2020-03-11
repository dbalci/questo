import { connect } from 'react-redux';
import { fetchEvents, deleteEvent, createEvent } from '../../actions/event_actions';
import { logout } from '../../actions/session_actions'
import EventIndex from './event_index';
import { openModal } from '../../actions/modal_actions'

const mstp = (state) => ({ 
    events: Object.values(state.events) 
});

const mdtp = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents()),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    createEvent: (event) => dispatch(createEvent(event)),
    logout: (user) => dispatch(logout(user)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mstp, mdtp)(EventIndex);