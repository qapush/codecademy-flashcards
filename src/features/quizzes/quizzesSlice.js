import { createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/topicsSlice";

const initialState = {
    quizzes: {}
}

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
})

export const addQuizConnectTopic = (payload) => (dispatch) => {
    const { name, topicId, cardIds, id } = payload;
    dispatch(addQuiz({ id, topicId, name, cardIds }))
    dispatch(addQuizToTopic({
        topicId,
        quizId: id
    }))
}

export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = state => state.quizzes.quizzes;