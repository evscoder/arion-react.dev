import {FC} from 'react';
import CardCalendar from '../../container/card/card-calendar/CardCalendar';
import CardWeek from '../../container/card/card-week/CardWeek';
import CardWidgets from '../../container/card/card-widgets/CardWidgets';
import ChartArea, {ChartAreaProps} from '../../ui/charts/chart-area/ChartArea';
import s from './dashboard.module.scss';
import Card, {CardProps} from '../../container/card/card';
import {CardWidgetProps} from '../../container/card/card-widget/CardWidget';

interface WidgetRevenueProps {
    chart: ChartAreaProps
    widgets: CardWidgetProps[]
}

type Props = CardProps & WidgetRevenueProps;

const WidgetRevenue: FC<Props> = ({ ...props }) => {
    return (
        <Card {...props} cardTools={
            <>
                <CardCalendar />
                <CardWeek items={props.tools.week} />
            </>
        } widgets={
            <CardWidgets data={props.widgets} />
        } chartChild={
            <ChartArea {...props.chart} classNames={s.chartRevenue} />
        } />
    );
};

export default WidgetRevenue;
