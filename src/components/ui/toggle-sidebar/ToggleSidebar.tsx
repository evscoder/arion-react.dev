import {FC} from 'react';
import Icon from '../Icon';
import cn from 'clsx';
import styles from './ToggleSidebar.module.scss';
import {ToggleSidebarProps} from '../../../types/types';

interface Props {
    onToggle: () => void;
}

const ToggleSidebar: FC<ToggleSidebarProps & Props> = ({ theme, classNames, onToggle }) => {
    return (
        <button className={cn(styles.toggleSidebar, styles[`toggle-sidebar--${theme}`], classNames)} type={'button'} onClick={onToggle}>
            <Icon name={'icon-menu'} />
        </button>
    );
};

export default ToggleSidebar;
