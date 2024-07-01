import {useEffect, useRef, useState} from 'react';
import {usePopper} from 'react-popper';
import {useDispatch, useSelector} from 'react-redux';
import {itemsMoreToggle} from '../redux/itemsMoreSlice';
import {RootState} from '../store';

const useCustomPopper = () => {
    const [index, setIndex] = useState<number>(0);
    const refs = useRef<HTMLButtonElement[]>([]);
    const [referenceElement, setReferenceElement] = useState<any>(null);
    const [popperElement, setPopperElement] = useState<any>(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement);
    const {showMore} = useSelector((state: RootState) => state.itemsMoreSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setReferenceElement(() => refs.current[index]);
        }, 100);
    }, [index, refs]);

    useEffect(() => {
        const handleClickOutside = (event: any): void => {
            if (popperElement && !popperElement.contains(event.target)) {
                dispatch(itemsMoreToggle(false));
            }
        };

        const handleKeydown = (event: any): void => {
            if (event.key === 'Escape') {
                dispatch(itemsMoreToggle(false));
            }
        };

        if (showMore) {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('keydown', handleKeydown);

            return () => {
                document.removeEventListener('click', handleClickOutside);
                document.removeEventListener('keydown', handleKeydown);
            };
        }
    }, [dispatch, popperElement, showMore]);

    const onToggleMore = (event: any): void => {
        setIndex([...refs.current].indexOf(event.currentTarget));
        setTimeout(() => {
            dispatch(itemsMoreToggle(true));
        }, 100);
    };

    return { setPopperElement, styles, attributes, onToggleMore, refs};
};

export default useCustomPopper;
