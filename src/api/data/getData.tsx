import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const getDataRequest = createAsyncThunk('dataSlice/getData', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/api/data');

        return data;
    } catch(error) {
        return rejectWithValue('Server Error');
    }
});

export {
    getDataRequest
};
