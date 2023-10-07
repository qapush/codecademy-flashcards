import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topics from '../features/topics/topicsSlice';
import quizzes from '../features/quizzes/quizzesSlice';
import cards from '../features/cards/cardsSlice';

export default configureStore({
  reducer: {
    topics,
    quizzes,
    cards
  },
});
