import { connect } from 'react-redux';
import { fetchQuestionsForEvent, deleteQuestion, createQuestion } from '../../actions/question_action';
import { fetchUserEvents } from '../../actions/event_actions';
import EventShow from './event_show';
import { logout } from '../../actions/session_actions';

const mstp = (state, ownProps) => {
    let props = {};

    // return {
    //     event: state.events[ownProps.match.params.eventId],
    //     questions: state.questions,
    //     user: state.session
    // }

    console.log('state.events', state.events)
    if(state.events) {
        props['event'] = state.events[ownProps.match.params.eventId];
    }

    if(state.questions){
        props['questions'] = state.questions;
    }

    if(state.session){
        props['user'] = state.session;
    }

    props.event_id = ownProps.match.params.eventId;

    return props
};

const mdtp = (dispatch) => {
    return {
        fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId)),
        fetchQuestionsForEvent: (eventId) => dispatch(fetchQuestionsForEvent(eventId)),
        createQuestion: (question) => dispatch(createQuestion(question)),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    }
};

export default connect(mstp, mdtp)(EventShow);