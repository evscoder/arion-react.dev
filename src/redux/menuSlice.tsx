import { createSlice } from '@reduxjs/toolkit';

type MenuStateProps = {
    isShowMenu: boolean
    isShowMobileMenu?: boolean
}

const menuSlice = createSlice({
    name: 'menuSlice',
    initialState: {
        isShowMenu: false,
        isShowMobileMenu: false
    } as MenuStateProps,
    reducers: {
        toggle: (state) => {
            state.isShowMenu = !state.isShowMenu;
            state.isShowMobileMenu = true;

            const bodyElement = document.body;

            bodyElement.classList.toggle('sidebar-show');
            bodyElement.classList.toggle('sidebar-collapse');

            if (bodyElement.classList.contains('sidebar-active')) {
                setTimeout(() => {
                    bodyElement.classList.remove('sidebar-active');
                }, 300);
            } else {
                bodyElement.classList.add('sidebar-active');
            }
        },
        closeMenu: (state, action) => {
            state.isShowMenu = false;
            state.isShowMobileMenu = action.payload;

            const bodyElement = document.body;

            bodyElement.classList.remove('sidebar-show');
            bodyElement.classList.remove('sidebar-collapse');

            setTimeout(() => {
                bodyElement.classList.remove('sidebar-active');
            }, 300);
        },
        closeMobileMenu: (state) => {
            state.isShowMobileMenu = false;
        }
    }
});

export const { toggle, closeMenu, closeMobileMenu } = menuSlice.actions;

export default menuSlice.reducer;
