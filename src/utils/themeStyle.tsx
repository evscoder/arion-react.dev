const themeStyle = (theme: string, val1: any, val2?: any, cssVar: boolean = true) => {
    const getStyle = (color: string) => getComputedStyle(document.documentElement).getPropertyValue(color);

    if (typeof val2 !== 'undefined' && val2 !== '') {
        if (theme === 'light') {
            return cssVar ? getStyle(val1) : val1;
        }

        if (theme === 'dark') {
            return cssVar ? getStyle(val2) : val2;
        }
    }

    if ((typeof val2 === 'undefined' || val2 === '') && !cssVar) {
        return val1;
    }

    return getStyle(val1);
};

export default themeStyle;
