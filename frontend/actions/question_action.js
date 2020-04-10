import * as QuestionAPIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

const receiveQuestions = (questions, eventId) => {
    return {
        type: RECEIVE_QUESTIONS,
        eventId,
        questions
    }
};

const receiveQuestion = (question) => {
    return {
        type: RECEIVE_QUESTION,
        question
    }
};

const removeQuestion = (questionId) => {
    return {
        type: REMOVE_QUESTION,
        questionId
    }
};

export const fetchQuestionsForEvent = (eventId) => dispatch => {
    return QuestionAPIUtil.fetchQuestionsForEvent(eventId)
        .then(questions => dispatch(receiveQuestions(questions, eventId)))
}

export const fetchQuestion = (questionId) => dispatch => {
    return QuestionAPIUtil.fetchQuestion(questionId)
        .then(question => dispatch(receiveQuestion(question)))
}
export const createQuestion = (question) => dispatch => {
    return QuestionAPIUtil.createQuestion(question)
        .then(question => dispatch(receiveQuestion(question)))
}
export const updateQuestion = (question) => dispatch => {
    return QuestionAPIUtil.updateQuestion(question)
        .then(question => dispatch(receiveQuestion(question)))
}

export const deleteQuestion = (questionId) => dispatch => {
    return QuestionAPIUtil.deleteQuestion(questionId)
        .then(() => dispatch(removeQuestion(questionId)))
}
