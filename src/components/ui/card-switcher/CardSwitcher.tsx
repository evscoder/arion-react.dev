import React, {FC} from 'react';
import cn from 'clsx';
import styles from './CardTools.module.scss';

interface Props {
    classNames: string,
    children: React.ReactElement
}

const CardSwitcher: FC<Props> = ({classNames, children}) => {
    return (
        <div className={cn(styles.cardSwitcher, classNames)}>
            {children}
        </div>
    );
};

export default CardSwitcher;
