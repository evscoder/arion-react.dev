import {FC} from 'react';
import ChartBar, {ChartBarProps} from '../../ui/charts/chart-bar/ChartBar';
import s from './dashboard.module.scss';
import Card, {CardProps} from '../../container/card/card';

interface WidgetStatisticProps {
    chart: ChartBarProps
}

type Props = CardProps & WidgetStatisticProps;

const WidgetStatistic: FC<Props> = ({ ...props }) => {
    const formatter = (value: number) => {
        if (value === 0) {
            return value;
        }

        if (value > 1000) {
            return value / 1000 + 'K';
        }

        return value;
    };

    return (
        <Card {...props} chartChild={
            <ChartBar {...props.chart} formatter={formatter} classNames={s.chartStatistics} />
        } />
    );
};

export default WidgetStatistic;
