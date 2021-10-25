const userNameReducer = (state = {name: 'BlackGOld', quizType: 'Gold'}, action) =>{
    switch (action.type) {
        case "USER_NAME_CHANGE":
            state = (action ? action.userName : '');
            break;
        case "SELECTED_QUIZ_TYPE":
            state = (action ? action.quizType : '');
            break;
    }
    return state;
}
export default userNameReducer;