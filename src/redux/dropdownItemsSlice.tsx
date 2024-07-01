import { createSlice } from '@reduxjs/toolkit';

type DropdownItemsStateProps = {
    isShow: boolean
}

const dropdownItemsSlice = createSlice({
    name: 'dropdownItemsSlice',
    initialState: {
        isShow: false
    } as DropdownItemsStateProps,
    reducers: {
        closeDropdownItems: (state) => {
            state.isShow = false;
        }
    }
});

export const { closeDropdownItems } = dropdownItemsSlice.actions;

export default dropdownItemsSlice.reducer;
