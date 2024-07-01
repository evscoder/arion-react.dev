import {FC} from 'react';
import cn from 'clsx';
import styles from '../Charts.module.scss';
import Chart from 'react-apexcharts';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';

export interface ChartPieProps {
    classNames: string
    data: {
        label: string,
        color: string,
        value: number
    }[]
}

const ChartPie: FC<ChartPieProps> = ({classNames, ...props }) => {
    const { style } = useSelector((state: RootState) => state.themeSlice);

    return (
        <Chart
            className={cn(styles.chart, classNames)}
            options={{
                labels: props.data.map(item => item.label),
                colors: props.data.map(item => item.color),
                chart: {
                    dropShadow: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                stroke: {
                    show: false
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    offsetY: 32,
                                    color: style.textColor,
                                    formatter: value => value
                                },
                                value: {
                                    fontSize: '36px',
                                    fontWeight: 700,
                                    fontFamily: style.fontFamily,
                                    color: style.textColorPrimary,
                                    offsetY: -12,
                                    formatter: value => '$' + value
                                },
                                total: {
                                    show: true,
                                    color: style.textColor,
                                    fontWeight: 400,
                                    formatter: w => {
                                        let total;

                                        w.globals.seriesTotals.reduce((a: number, b: number) => {
                                            total = a + b;

                                            return total;
                                        }, 0);

                                        return '$' + total;
                                    }
                                }
                            }
                        }
                    }
                }
            }}
            series={props.data.map(item => item.value)}
            type="donut"
        />
    );
};

export default ChartPie;
