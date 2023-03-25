import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {}
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action) => {
            const { id } = action.payload;
            state.cards[id] = action.payload;
        }
    }
})

export default cardsSlice.reducer;
export const { addCard } = cardsSlice.actions;
export const selectCards = state => state.cards.cards;