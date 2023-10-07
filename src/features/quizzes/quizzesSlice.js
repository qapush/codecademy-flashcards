import { createSlice } from "@reduxjs/toolkit";

const initialState = { quizzes: {} };

const quizzesSelector = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz: (state, { payload }) => {
            state.quizzes[payload.id] = payload;
        }
    }
});

export default quizzesSelector.reducer;
export const { addQuiz } = quizzesSelector.actions;