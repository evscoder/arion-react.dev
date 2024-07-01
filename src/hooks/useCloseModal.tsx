import {useDispatch} from 'react-redux';
import {useCallback} from 'react';

const useCloseModal = (start: any, complete: any) => {
    const dispatch = useDispatch();

    return useCallback(() => {
        dispatch(start({ show: true, animate: false }));

        setTimeout(() => {
            dispatch(complete({ show: false, animate: false }));
        }, 310);
    }, [dispatch, start, complete]);
};

export default useCloseModal;
