const userNameReducer = (state = {
    userName: 'BlackGOld',
    quizType: 1,
    rightAnswers: "",
    questionLength: ""
}, action) =>{
    switch (action.type) {
        case "USER_NAME_CHANGE":
            state.userName = (action ? action.userName : '');
            break;
        case "SELECTED_QUIZ_TYPE":
            state.quizType = (action ? action.quizType : 1);
            break;
        case "QUIZ_RESULT":
            state.rightAnswers = (action ? action.rightAnswers : 1);
            state.questionLength = (action ? action.questionLength : 1);
            break;
    }
    return state;
}
export default userNameReducer;