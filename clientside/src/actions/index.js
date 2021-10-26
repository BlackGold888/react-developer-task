export const setUserName = (name) => {
    return {
        type: "USER_NAME_CHANGE",
        userName: name
    }
}

export const setQuizType = (quizType) => {
    return {
        type: "SELECTED_QUIZ_TYPE",
        quizType: quizType
    }
}

export const setQuizResult = (data) =>{
    return{
        type: "QUIZ_RESULT",
        rightAnswers: data.rightAnswers,
        questionLength: data.questionLength
    }
}