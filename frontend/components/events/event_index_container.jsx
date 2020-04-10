import { connect } from 'react-redux';
import { fetchUserEvents, deleteEvent, createEvent } from '../../actions/event_actions';
import { logout } from '../../actions/session_actions'
import EventIndex from './event_index';
import { openModal } from '../../actions/modal_actions'

const mstp = (state) => { 
    return {
        events: Object.values(state.events),
        user: state.session
    }
};

const mdtp = (dispatch) => ({
    fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    createEvent: (event) => dispatch(createEvent(event)),
    logout: (user) => dispatch(logout(user)),
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(mstp, mdtp)(EventIndex);