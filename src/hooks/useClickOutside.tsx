import {useEffect} from 'react';

const useClickOutside = (ref: any, ref2: any, onClickOutside: any, isShow: boolean) => {
    useEffect(() => {
        const target = ref.current;
        const toggle = ref2.current;

        const handleClickOutside = (event: any): void => {
            if (target && !target.contains(event.target) && !toggle.contains(event.target)) {
                onClickOutside();
            }
        };

        if (isShow) {
            document.addEventListener('click', handleClickOutside);

            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
        }
    }, [ref, ref2, onClickOutside, isShow]);
};

export default useClickOutside;
