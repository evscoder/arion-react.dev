import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const getDashboardRequest = createAsyncThunk('dashboardSlice/getDashboard', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/api/dashboard');

        return data;
    } catch(error) {
        return rejectWithValue('Server Error');
    }
});

export {
    getDashboardRequest
};
