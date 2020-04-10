export const fetchQuestionsForEvent = (eventId) => {
    return $.ajax({
        url: `/api/events/${eventId}/questions`,
        method: 'GET'
    });
};

export const fetchQuestion = (questionId) => {
    return $.ajax({
        url: `/api/questions/${questionId}`,
        method: 'GET'
    });
};

export const createQuestion = (question) => {
    return $.ajax({
        url: `/api/questions`,
        method: 'POST',
        data: { question }
    });
};

export const updateQuestion = (question) => {
    return $.ajax({
        url: `/api/questions/${question.id}`,
        method: 'PATCH',
        data: { question }
    });
};

export const deleteQuestion = (questionId) => {
    return $.ajax({
        url: `/api/questions/${questionId}`,
        method: 'DELETE'
    });
};

