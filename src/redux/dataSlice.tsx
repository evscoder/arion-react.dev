import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import isError from '../helper/isError';
import {getDataRequest} from '../api/data/getData';

export interface dataStateProps {
    data: any,
    loading: boolean
    error: string
}

const initialState: dataStateProps = {
    data: null,
    loading: true,
    error: ''
};

const dataSlice = createSlice({
    name: 'dataSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(getDataRequest.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getDataRequest.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

export default dataSlice.reducer;
