import {FC} from 'react';
import cn from 'clsx';
import styles from './CardCalendar.module.scss';
import DatePicker from '../../../ui/date-picker/DatePicker';

interface Props {
    classNames?: string
}

const CardCalendar: FC<Props> = ({classNames}) => {
    return (
        <div className={cn(styles.cardCalendar, classNames)}>
            <DatePicker classNames={styles.cardCalendar__inputGroup}/>
        </div>
    );
};

export default CardCalendar;
