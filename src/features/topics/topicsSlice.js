import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from '../quizzes/quizzesSlice';

const initialState = {
    topics: {}
}

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic: (state, {payload}) => {
            const { id } = payload;
            const newTopic = {...payload, quizIds: []}
            state.topics[id] = newTopic;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(addQuiz, (state, {payload}) => {
                state.topics[payload.topicId].quizIds.push(payload.id);
            })
    }
})

export default topicsSlice.reducer;
export const { addTopic, addQuizToTopic } = topicsSlice.actions;
