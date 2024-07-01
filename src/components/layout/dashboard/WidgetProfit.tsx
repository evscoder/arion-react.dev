import {FC} from 'react';
import ChartPie, {ChartPieProps} from '../../ui/charts/chart-pie/ChartPie';
import s from './dashboard.module.scss';
import ChartLegend, {ChartLegendItemProps} from '../../ui/charts/chart-legend/ChartLegend';
import Card, {CardProps} from '../../container/card/card';

interface WidgetProfitProps {
    chart: ChartPieProps
    footer: {
        chartLegend: ChartLegendItemProps[]
    }
}

type Props = CardProps & WidgetProfitProps;

const WidgetProfit: FC<Props> = ({ ...props }) => {
    return (
        <Card
            {...props}
            chartChild={<ChartPie {...props.chart} classNames={s.chartProfit} />}
            footer={<ChartLegend items={props.footer.chartLegend} />}
        />
    );
};

export default WidgetProfit;
