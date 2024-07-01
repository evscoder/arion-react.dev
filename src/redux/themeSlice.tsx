import { createSlice } from '@reduxjs/toolkit';
import themeStyle from '../utils/themeStyle';

type themeStateProps = {
    theme: 'dark' | 'light',
    style: any
}

const initialState: themeStateProps = {
    theme: 'light',
    style: {}
};

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        initTheme: (state) => {
            const HTMLElement = document.documentElement as HTMLElement;

            HTMLElement.dataset.theme = state.theme;

            state.style.border = themeStyle(state.theme,'--border-grey-color');
            state.style.textColor = themeStyle(state.theme,'--text-secondary-color');
            state.style.textColorPrimary = themeStyle(state.theme,'--text-primary-color');
            state.style.fontFamily = themeStyle(state.theme,'--font-family-default');
            state.style.colorsStroke = themeStyle(state.theme,'--grey-color-4', '--grey-color-4');
            state.style.fillPrimary = themeStyle(state.theme,'--grey-color-4', '--black-color-3');
            state.style.fillSecondary = themeStyle(state.theme,'rgba(255, 138, 72, 0.5)', 'rgba(255, 138, 72, 0.3)', false);
            state.style.fillThird = themeStyle(state.theme,'#EFF4F8', '#2D3743', false);
            state.style.gradientPrimary = themeStyle(state.theme,'--grey-color-4', '--black-color-3');
            state.style.gradientSecondary = themeStyle(state.theme,'rgba(255, 61, 87, 0.5)', 'rgba(255, 61, 87, 0.3)', false);
            state.style.gradientOpacityPrimary = themeStyle(state.theme,0.15, 0.15, false);
            state.style.gradientOpacitySecondary = themeStyle(state.theme,0.15, 0.15, false);
            state.style.markerColors = themeStyle(state.theme,'--grey-color-3', '--grey-color-4');
        },
        toggleTheme: (state, { payload }) => {
            state.theme = payload;
        }
    }
});

export const { initTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
