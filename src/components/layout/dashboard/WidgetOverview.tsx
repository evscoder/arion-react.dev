import {FC} from 'react';
import SwitcherButton from '../../ui/switcher-button/SwitcherButton';
import CardWidgets from '../../container/card/card-widgets/CardWidgets';
import ChartLine, {ChartLineProps} from '../../ui/charts/chart-line/ChartLine';
import s from './dashboard.module.scss';
import Card, {CardProps} from '../../container/card/card';
import {CardWidgetProps} from '../../container/card/card-widget/CardWidget';

interface WidgetOverviewProps {
    chart: ChartLineProps
    widgetItems: CardWidgetProps[]
}

type Props = CardProps & WidgetOverviewProps;

const WidgetOverview: FC<Props> = ({ ...props }) => {
    return (
        <Card {...props} switchers={
            <SwitcherButton items={props.tools.switchers} />
        } widgets={
            <CardWidgets data={props.widgetItems} />
        } chartChild={
            <ChartLine {...props.chart} classNames={s.chartOverview} />
        } />
    );
};

export default WidgetOverview;
