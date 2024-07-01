import {FC} from 'react';
import cn from 'clsx';
import styles from './ToggleSearch.module.scss';
import Icon from '../Icon';
import {ToggleSearchProps} from '../../../types/types';

const ToggleSearch: FC<ToggleSearchProps> = ({ module, classNames, onToggle, isActive }) => {
    return (
        <button className={cn(styles.toggleSearch, module && styles[`toggle-search--module`], isActive && styles.active, classNames)} type={'button'} onClick={onToggle}>
            <Icon name={'icon-search'} />
        </button>
    );
};

export default ToggleSearch;
