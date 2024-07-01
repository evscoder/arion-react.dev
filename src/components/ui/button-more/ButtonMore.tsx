import Icon from '../Icon';
import {forwardRef} from 'react';
import styles from './ButtonMore.module.scss';

interface Props {
    onToggle: (event: any) => void;
}

const ButtonMore = forwardRef<HTMLButtonElement, Props>(({ onToggle }, ref) => {
    return (
        <button ref={ref} className={styles.buttonMore} onClick={onToggle}>
            <Icon name={'icon-more'} />
        </button>
    );
});

export default ButtonMore;
