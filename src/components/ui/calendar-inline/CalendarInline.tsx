import {FC} from 'react';
import Flatpickr from 'react-flatpickr';
import cn from 'clsx';
import s from './CalendarInline.module.scss';

interface CalendarInlineProps {
    classNames?: string
}

const CalendarInline: FC<CalendarInlineProps> = ({ classNames }) => {
    return (
        <div className={cn(s.calendarInline, classNames)}>
            <Flatpickr
                className={cn(s.calendarInline)}
                options={{
                    inline: true,
                    monthSelectorType: 'static',
                    nextArrow: `<svg class='icon-icon-keyboard-right'><use xlink:href='#icon-keyboard-right'></use></svg>`,
                    prevArrow: `<svg class='icon-icon-keyboard-left'><use xlink:href='#icon-keyboard-left'></use></svg>`
                }}
            />
            <div className={s.calendarInline__footer}>
                <div className={s.calendarInline__row}>
                    <div className={cn(s.calendarInline__item, s.calendarInline__itemLeft)}>
                        <div className={s.calendarInline__day}>
                            <span>13</span>
                            <sup className={cn(s.calendarInline__weekday, 'text-grey')}>TH</sup>
                        </div>
                        <div className={cn('text-grey')}>December</div>
                    </div>
                    <div className={s.calendarInline__item}>
                        <div className={s.calendarInline__status}><span className={cn(s.circle, 'color-green')}></span><span>Upcoming</span></div>
                        <div className={cn('text-grey')}>
                            Order Delivery 04:30 PM
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarInline;
