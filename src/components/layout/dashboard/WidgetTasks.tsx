import {FC} from 'react';
import ChartRadial, {ChartRadialProps} from '../../ui/charts/chart-radial/ChartRadial';
import s from './dashboard.module.scss';
import CardProgress from '../../container/card/card-progressbars/CardProgress';
import Card, {CardProps} from '../../container/card/card';
import {ProgressBarProps} from '../../../types/types';

interface WidgetTasksProps {
    chart: ChartRadialProps
    progressBars: ProgressBarProps[]
}

type Props = CardProps & WidgetTasksProps;

const WidgetTasks: FC<Props> = ({ ...props }) => {
    return (
        <Card {...props}
              chartChild={<ChartRadial {...props.chart} classNames={s.chartTask} />}
        >
            <CardProgress progressBars={props.progressBars} />
        </Card>
    );
};

export default WidgetTasks;
