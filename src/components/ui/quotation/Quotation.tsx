import Icon from '../Icon';
import cn from 'clsx';
import styles from './Quotation.module.scss';
import {FC} from 'react';
import {QuotationProps} from '../../../types/types';

const Quotation: FC<QuotationProps> = ({direction, classNames}) => {
    return (
        <span className={cn(styles.quotation, styles[`quotation--${direction}`], classNames)}>
            <Icon name={'icon-arrow-down'} />
        </span>
    );
};

export default Quotation;
