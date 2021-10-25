const userNameReducer = (state = {userName: 'BlackGOld', quizType: 1}, action) =>{
    switch (action.type) {
        case "USER_NAME_CHANGE":
            state.userName = (action ? action.userName : '');
            break;
        case "SELECTED_QUIZ_TYPE":
            state.quizType = (action ? action.quizType : 1);
            break;
    }
    return state;
}
export default userNameReducer;