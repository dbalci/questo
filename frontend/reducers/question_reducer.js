import {
    RECEIVE_QUESTIONS,
    RECEIVE_QUESTION,
    REMOVE_QUESTION
} from '../actions/question_action'

const QuestionReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_QUESTIONS:
            newState.questions = action.questions.questions;
            return newState

        case RECEIVE_QUESTION:
            newState[action.events.eventId.question.question.id] = action.question.question
            return newState

        case REMOVE_QUESTION:
            delete newState[action.questionId]
            return newState;

        default:
            return oldState;
    }
}

export default QuestionReducer;