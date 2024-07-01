import {FC} from 'react';
import CardCalendar from '../../container/card/card-calendar/CardCalendar';
import CardWeek from '../../container/card/card-week/CardWeek';
import ChartBar, {ChartBarProps} from '../../ui/charts/chart-bar/ChartBar';
import Card, {CardProps} from '../../container/card/card';
import s from './dashboard.module.scss';

interface WidgetActivityProps {
    chart: ChartBarProps
}

type Props = CardProps & WidgetActivityProps;

const WidgetActivity: FC<Props> = ({ ...props }) => {
    return (
        <Card {...props} cardTools={
            <>
                <CardCalendar />
                <CardWeek items={props.tools.week} />
            </>
        } chartChild={
            <ChartBar {...props.chart} classNames={s.chartActivity} />
        } />
    );
};

export default WidgetActivity;
