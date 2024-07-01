import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import isError from '../helper/isError';
import {getDashboardRequest} from '../api/dashboard/getDashboard';

export interface dashboardStateProps {
    data: any,
    loading: boolean
    error: string
}

const initialState: dashboardStateProps = {
    data: null,
    loading: true,
    error: ''
};

const dashboardSlice = createSlice({
    name: 'dashboardSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(getDashboardRequest.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getDashboardRequest.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload;
                state.loading = false;
            });
    }
});

export default dashboardSlice.reducer;
