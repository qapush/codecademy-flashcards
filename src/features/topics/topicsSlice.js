import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {
        41: {
            id: 41,
            name: 'Olives',
            icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/calendar.svg',
            quizIds: []
        }
    }
}

const topicsSlice = createSlice({
    name: 'topics',
    initialState, 
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: []
            }
        },
        addQuizToTopic: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId)
        }
    }
})

export default topicsSlice.reducer;
export const { addTopic, addQuizToTopic } = topicsSlice.actions;
export const selectTopics = state => state.topics.topics;