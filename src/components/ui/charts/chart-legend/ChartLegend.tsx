import {FC} from 'react';
import SignalBullet from '../../signal-bullet/SignalBullet';
import styles from './ChartLegend.module.scss';
import Quotation from '../../quotation/Quotation';


export interface ChartLegendItemProps {
    color: string
    title: string,
    cost: string,
    direction: 'up' | 'down',
    progress: string,
}

interface Props {
    items: ChartLegendItemProps[]
}

const ChartLegend: FC<Props> = ({ items }) => {
    return (
        <div className={styles.chartLegend}>
            {items.map(({color, title, cost, direction, progress}, index) => (
                <div className={styles.chartLegend__item} key={title + index}>
                    <div className={styles.chartLegend__itemRow}>
                        <SignalBullet color={color} classNames={styles.chartLegend__bullet} />
                        <span>{title}</span>
                    </div>
                    <div className={styles.chartLegend__itemRow}>
                        <span>{cost}</span>
                        <Quotation direction={direction} />
                    </div>
                    <div className={styles.chartLegend__itemRow}>
                        <span className="text-grey">{progress}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChartLegend;
