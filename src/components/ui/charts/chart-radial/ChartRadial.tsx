import {FC, useState} from 'react';
import cn from 'clsx';
import styles from '../Charts.module.scss';
import Chart from 'react-apexcharts';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store';

type Data = {
    label: string,
    color: string,
    data: number
}[];

export interface ChartRadialProps {
    classNames: string
    data: Data
}

const ChartRadial: FC<ChartRadialProps> = ({classNames, ...props }) => {
    const { style } = useSelector((state: RootState) => state.themeSlice);
    const [ data ] = useState<Data>(props.data);

    return (
        <Chart
            className={cn(styles.chart, classNames)}
            options={{
                chart: {
                    toolbar: {
                        show: false
                    }
                },
                colors: data.map(item => item.color),
                stroke: {
                    lineCap: 'round'
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: '30%',
                            position: 'front'
                        },
                        track: {
                            background: style.fillThird,
                            strokeWidth: '57%',
                            margin: 20,
                            dropShadow: {
                                enabled: false
                            }
                        },

                        dataLabels: {
                            show: true,
                            name: {
                                show: true,
                                offsetY: 26,
                                color: style.textColor
                            },
                            value: {
                                fontSize: '28px',
                                fontWeight: 700,
                                fontFamily: style.fontFamily,
                                color: style.textColorPrimary,
                                offsetY: -14
                            },
                            total: {
                                show: true,
                                label: 'Tasks',
                                color: style.textColor,
                                fontWeight: 400,
                                fontSize: '15px',
                                formatter: (w: any): any => {
                                    let total;

                                    w.globals.seriesTotals.reduce(<T extends number>(a: T, b: T) => {
                                        total = a + b;

                                        return total;
                                    }, 0);

                                    return total;
                                }
                            }
                        }
                    }
                },
                labels: data.map(item => item.label)
            }}
            series={data.map(item => item.data)}
            type="radialBar"
        />
    );
};

export default ChartRadial;
