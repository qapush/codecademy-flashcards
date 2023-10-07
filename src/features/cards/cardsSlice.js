import { createSlice } from "@reduxjs/toolkit";

const initialState = { cards: {} };

const cardsSlice = createSlice({
    name: 'cardsSlice',
    initialState,
    reducers: {
        addCard: (state, { payload }) => {
            console.log('Payload ', payload);
            state.cards[payload.id] = payload;
        }
    }
})

export default cardsSlice.reducer;
export const { addCard } = cardsSlice.actions;