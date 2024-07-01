import {FC} from 'react';
import styles from './Widget.module.scss';
import {Link} from 'react-router-dom';
import cn from 'clsx';
import TradeIcon from '../../../ui/trade-icon/TradeIcon';
import Badge from '../../../ui/badge/Badge';
import ChartCircle from '../../../ui/charts/chart-circle/ChartCircle';
import {ChartCircleProps, ColorsProps} from '../../../../types/types';
export interface WidgetProps {
    id: string,
    title: string,
    subtitle: string,
    route: string,
    badge: number | string,
    badgeColor: ColorsProps,
    count: string,
    tradeIcon: string,
    direction: 'up' | 'down',
    chart: ChartCircleProps
}

const Widget: FC<WidgetProps> = ({ ...props }) => {
    return (
        <div className={styles.widget}>
            <div className={styles.widget__wrapper}>
                <div className={styles.widget__row}>
                    <div className={styles.widget__left}>
                        <h3 className={styles.widget__title}>{props.title}</h3>
                        <div className={cn(styles.widget__statusTitle, 'text-grey')}>{props.subtitle}</div>
                        <div className={styles.widget__spacer}></div>
                        <div className={styles.widget__trade}>
                            <span className={styles.widget__tradeCount}>{props.count}</span>
                            <TradeIcon direction={props.direction} icon={props.tradeIcon} />
                            <Badge text={props.badge} type={props.badgeColor} size={'sm'} />
                        </div>
                        <div className={styles.widget__details}>
                            <Link className={'link-under text-grey'} to={props.route}>Detail</Link>
                        </div>
                    </div>
                    <div className={styles.widget__chart}>
                        <div className={styles.widget__chartInner}>
                            <div className={styles.widget__chartPercentage}>{props.chart.value}<small>%</small>
                            </div>
                            <div className={styles.widget__chartCaption}>New Visits</div>
                        </div>
                        <ChartCircle {...props.chart} classNames={styles.widget__chartBar} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Widget;
