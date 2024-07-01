import {FC, useState} from 'react';
import ReactECharts from 'echarts-for-react';
import {useSelector} from 'react-redux';
import {tooltipChart} from '../tooltipElement';
import cn from 'clsx';
import styles from '../Charts.module.scss';
import {RootState} from '../../../../store';

export interface ChartBarProps {
    classNames?: string
    xAxisData: string[]
    data: {
        name: string,
        color: string,
        data: number[]
    }[],
    formatter?: any;
}

const ChartBar: FC<ChartBarProps> = ({classNames, ...props }) => {
    const { style } = useSelector((state: RootState) => state.themeSlice);
    const [data] = useState<{name: string, color: string, data: number[]}[]>(props.data);
    const [xAxisData] = useState<string[]>(props.xAxisData);

    return (
        <ReactECharts
            className={cn(styles.chart, classNames)}
            option={{
                grid: {
                    show: true,
                    left: '30',
                    right: '0',
                    top: '50',
                    bottom: '45',
                    borderColor: 'transparent'
                },
                tooltip: tooltipChart(props.formatter && (({ value }: {value: string}) => props.formatter(value))),
                barGap: '30%',
                legend: {
                    data: [...data.map(item => item.name)],
                    left: 'right',
                    itemGap: 50,
                    itemWidth: 8,
                    icon: 'circle',
                    textStyle: {
                        fontSize: 15,
                        fontFamily: style.fontFamily,
                        color: style.textColorPrimary
                    }
                },
                color: [...data.map(item => item.color)],
                toolbox: {
                    show: false
                },
                xAxis: [
                    {
                        type: 'category',
                        offset: 19,
                        axisTick: {
                            show: false
                        },
                        data: xAxisData,
                        axisLabel: {
                            fontSize: 12,
                            fontFamily: style.fontFamily,
                            color: style.textColor
                        },
                        axisLine: {
                            lineStyle: {
                                color: style.border
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        offset: -5,
                        axisLabel: {
                            fontSize: 12,
                            fontFamily: style.fontFamily,
                            color: style.textColor,
                            formatter: props.formatter && props.formatter
                        },
                        splitLine: {
                            lineStyle: {
                                color: style.border
                            }
                        }
                    }
                ],
                series: [...data.map(item => ({
                    name: item.name,
                    type: 'bar',
                    data: [...item.data],
                    itemStyle: {
                        borderRadius: [8, 8, 0, 0]
                    }
                }))]
            }}
        />
    );
};

export default ChartBar;
