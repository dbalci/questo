import { connect } from 'react-redux';
import { fetchQuestionsForEvent, deleteQuestion, createQuestion } from '../../actions/question_action';
import EventShow from './event_show';

const mstp = (state, ownProps) => {
    return {
        event: state.events[ownProps.match.params.eventId],
        questions: state.questions
    }
};

const mdtp = (dispatch) => {
    return {
        fetchQuestionsForEvent: (eventId) => dispatch(fetchQuestionsForEvent(eventId)),
        createQuestion: (question) => dispatch(createQuestion(question)),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId))
    }
};

export default connect(mstp, mdtp)(EventShow);