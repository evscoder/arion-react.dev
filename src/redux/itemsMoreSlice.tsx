import { createSlice } from '@reduxjs/toolkit';

type ItemsMoreStateProps = {
    showMore: boolean
}

const initialState: ItemsMoreStateProps = {
    showMore: false
};

const itemsMoreSlice = createSlice({
    name: 'itemsMoreSlice',
    initialState,
    reducers: {
        itemsMoreToggle: (state, { payload }) => {
            state.showMore = payload;
        }
    }
});

export const { itemsMoreToggle } = itemsMoreSlice.actions;

export default itemsMoreSlice.reducer;
