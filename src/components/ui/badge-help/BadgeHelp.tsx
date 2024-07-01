import {FC} from 'react';
import Icon from '../Icon';
import {BadgeHelpProps} from '../../../types/types';
import styles from './BadgeHelp.module.scss';

const BadgeHelp: FC<BadgeHelpProps> = () => {
    return (
        <span className={styles.badgeHelp} data-tippy-content="CVV Code" data-tippy-placement="top">
            <Icon name={'icon-help'} />
        </span>
    );
};

export default BadgeHelp;
