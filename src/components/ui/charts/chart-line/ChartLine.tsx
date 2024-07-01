import {useSelector} from 'react-redux';
import {FC, useState} from 'react';
import Chart from 'react-apexcharts';
import cn from 'clsx';
import styles from '../Charts.module.scss';
import {tooltipChartArea} from '../tooltipElement';
import {RootState} from '../../../../store';

type DataProps = {
    categories: string[],
    sessions: {
        label: string
        data: number[]
    }
}

export type ChartLineProps = {
    classNames: string
    data1: DataProps
    data2: DataProps
}

const ChartLine: FC<ChartLineProps> = ({classNames, ...props }) => {
    const { style } = useSelector((state: RootState) => state.themeSlice);
    const [{categories, sessions}] = useState(props.data1);

    const fontStyles = {
        colors: style.textColor,
        fontWeight: 400,
        fontSize: '12px',
        fontFamily: style.fontFamily
    };

    return (
        <Chart
            className={cn(styles.chart, classNames)}
            options={{
                chart: {
                    zoom: {
                        enabled: false
                    },
                    height: '100%',
                    type: 'area',
                    toolbar: {
                        show: false
                    }
                },
                grid: {
                    borderColor: style.border
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    lineCap: 'round',
                    colors: ['#22CCE2'],
                    width: [4],
                    curve: 'straight'
                },
                fill: {
                    type: ['solid'],
                    colors: ['rgba(34, 204, 226, 0.15)']
                },
                legend: {
                    show: false
                },
                markers: {
                    size: 0,
                    colors: ['#22CCE2'],
                    strokeColors: '#FFFFFF',
                    strokeWidth: 5,
                    strokeOpacity: 1
                },
                xaxis: {
                    categories: categories,
                    tooltip: {
                        enabled: false
                    },
                    labels: {
                        offsetY: 5,
                        style: fontStyles
                    },
                    axisBorder: {
                        show: true,
                        color: style.border
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        show: true,
                        width: 1,
                        position: 'back',
                        opacity: 0.9,
                        stroke: {
                            color: '#B3C0CE',
                            width: 1,
                            dashArray: 4
                        }
                    }
                },
                yaxis: {
                    labels: {
                        offsetY: 50,
                        style: fontStyles
                    }
                },
                tooltip: {
                    ...tooltipChartArea()
                }
            }}
            series={[sessions]}
            type="area"
            height="100%"
        />
    );
};

export default ChartLine;
