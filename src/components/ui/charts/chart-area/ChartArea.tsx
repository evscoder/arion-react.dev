import {useSelector} from 'react-redux';
import {FC, useState} from 'react';
import Chart from 'react-apexcharts';
import cn from 'clsx';
import styles from '../Charts.module.scss';
import {tooltipChartArea} from '../tooltipElement';
import {RootState} from '../../../../store';

export type ChartAreaProps = {
    classNames: string
    data: number[][]
}

const ChartArea: FC<ChartAreaProps> = ({classNames, ...props }) => {
    const { style } = useSelector((state: RootState) => state.themeSlice);
    const [[session, views]] = useState(props.data);

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
                    colors: [style.colorsStroke, '#FF8A48'],
                    width: [4, 4],
                    curve: 'smooth',
                    dashArray: [8, 0]
                },
                fill: {
                    type: ['gradient', 'gradient'],
                    colors: [style.fillPrimary, style.fillSecondary],
                    gradient: {
                        type: 'horizontal',
                        gradientToColors: [style.gradientPrimary, style.gradientSecondary],
                        opacityFrom: [style.gradientOpacityPrimary, 1],
                        opacityTo: [style.gradientOpacitySecondary, 1],
                        stops: [0, 88]
                    }
                },
                markers: {
                    size: 0,
                    colors: [style.markerColors, '#FF8A48'],
                    strokeColors: '#FFFFFF',
                    strokeWidth: 5,
                    strokeOpacity: 1
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan'],
                    tooltip: {
                        enabled: false
                    },
                    labels: {
                        offsetY: 5,
                        style: {
                            ...fontStyles
                        }
                    },
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: true,
                        color: style.border
                    },
                    crosshairs: {
                        show: true,
                        width: 1,
                        position: 'back',
                        opacity: 0.9,
                        stroke: {
                            color: style.border,
                            width: 1,
                            dashArray: 4
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            ...fontStyles
                        }
                    }
                },
                tooltip: {
                    ...tooltipChartArea()
                }
            }}
            series={[{
                name: 'Session Duration',
                data: session
            }, {
                name: 'Page Views',
                data: views
            }]}
            type="area"
            height="100%"
        />
    );
};

export default ChartArea;
