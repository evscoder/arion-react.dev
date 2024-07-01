import {FC} from 'react';
import CalendarInline from '../../ui/calendar-inline/CalendarInline';
import s from './dashboard.module.scss';
import Card, {CardProps} from '../../container/card/card';

type Props = CardProps;

const WidgetCalendar: FC<Props> = ({ ...props }) => {
    return (
        <Card {...props}>
            <div className={s.calendar}>
                <CalendarInline />
            </div>
        </Card>
    );
};

export default WidgetCalendar;
