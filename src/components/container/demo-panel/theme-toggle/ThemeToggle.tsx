import {FC, useRef} from 'react';
import styles from './ThemeToggle.module.scss';
import {ThemeColorsProps} from '../../../../types/types';
import {useDispatch} from 'react-redux';
import {toggleTheme} from '../../../../redux/themeSlice';
import imagePath from '../../../../helper/imagePath';

interface ThemeToggleProps {
    theme: ThemeColorsProps,
    image: string,
    pattern: string,
    id: string
}

const ThemeToggle: FC<ThemeToggleProps> = ({ theme, pattern, id, image }) => {
    const useElem = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();

    const onToggleTheme = () => {
        const color = useElem.current?.dataset.theme as ThemeColorsProps;

        dispatch(toggleTheme(color));
    };

    return (
        <div ref={useElem} data-theme={theme} className={styles.themeToggle} onClick={onToggleTheme}>
            <svg viewBox="0 0 252 272" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter-theme0_dd)">
                    <path d="M55 199H197V221C197 221 153.752 224 126 224C98.248 224 55 221 55 221V199Z"
                          fill="white"></path>
                </g>
                <g filter="url(#filter-theme1_dd)">
                    <path
                        d="M18.235 43.2287C19.2494 23.1848 35.1848 7.24941 55.2287 6.23501C76.8855 5.13899 104.551 4 126 4C147.449 4 175.114 5.13898 196.771 6.23501C216.815 7.24941 232.751 23.1848 233.765 43.2287C234.861 64.8855 236 92.5512 236 114C236 135.449 234.861 163.114 233.765 184.771C232.751 204.815 216.815 220.751 196.771 221.765C175.114 222.861 147.449 224 126 224C104.551 224 76.8855 222.861 55.2287 221.765C35.1848 220.751 19.2494 204.815 18.235 184.771C17.139 163.114 16 135.449 16 114C16 92.5512 17.139 64.8855 18.235 43.2287Z"
                        fill={`url(#${pattern})`}></path>
                </g>
                <defs>
                    <filter id="filter-theme0_dd" x="23" y="183" width="206" height="89" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="8"/>
                        <feGaussianBlur stdDeviation="8"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="16"/>
                        <feGaussianBlur stdDeviation="16"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter-theme1_dd" x="0" y="0" width="252" height="252" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="12"/>
                        <feGaussianBlur stdDeviation="8"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
                    </filter>
                    <pattern id={pattern} patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref={`#${id}`} transform="scale(0.00142857)"></use>
                    </pattern>
                    <image id={id} width="700" height="700" xlinkHref={imagePath(image)}></image>
                </defs>
            </svg>
        </div>
    );
};

export default ThemeToggle;
