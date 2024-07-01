import {FC} from 'react';
import s from './CountryLegend.module.scss';
import Quotation from '../quotation/Quotation';

export interface CountryLegendItemProps {
    title: string,
    direction: 'up' | 'down'
    value: string
}

interface Props {
    items: CountryLegendItemProps[]
}

const CountryLegend: FC<Props> = ({ items }) => {
    return (
        <div className={s.countryLegend}>
            <div className={s.countryLegend__row}>
                {items.map((item, index) => (
                    <div className={s.countryLegend__item} key={`country-legend-${index}`}>
                        <div className={s.countryLegend__left}>
                            <span className={s.countryLegend__marker}></span>
                            <span className={s.countryLegend__name}>{item.title}</span>
                        </div>
                        <div className={s.countryLegend__trade}>
                            <Quotation direction={item.direction} classNames={s.countryLegend__quot} />
                            <span className={s.countryLegend__percentage}>{item.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountryLegend;
