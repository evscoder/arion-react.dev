import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './redux/menuSlice';
import dropdownItemsSlice from './redux/dropdownItemsSlice';
import themeSlice from './redux/themeSlice';
import dashboardSlice from './redux/dashboardSlice';
import itemsMoreSlice from './redux/itemsMoreSlice';
import dataSlice from './redux/dataSlice';

const store = configureStore({
    reducer: {
        menuSlice,
        dashboardSlice,
        dataSlice,
        dropdownItemsSlice,
        themeSlice,
        itemsMoreSlice
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;



