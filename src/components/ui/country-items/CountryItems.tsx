import {FC} from 'react';
import imagePath from '../../../helper/imagePath';
import s from './CountryItems.module.scss';
import Quotation from '../quotation/Quotation';

export interface CountryItemProps {
    id: string,
    flag: string,
    name: string,
    cost: string,
    direction: 'up' | 'down'
    percentage: string
}

interface countryItemsProps {
    data: CountryItemProps[]
}

const CountryItems: FC<countryItemsProps> = ({ data }) => {
    return (
        <div className={s.countryItems}>
            {data.map(item => (
                <div className={s.countryItem} key={item.id}>
                    <div className={s.countryItem__col}>
                        <img className={s.countryItem__flag} src={imagePath(`flags/${item.flag}.svg`)} alt={item.name} />
                        <span className={s.countryItem__name}>{item.name}</span>
                    </div>
                    <div className={s.countryItem__col}>
                        Sales: <b className={s.countryItem__cost}>{item.cost}</b> <Quotation direction={item.direction} />
                    </div>
                    <div className={s.countryItem__col}>
                        <span className={'text-grey'}>{item.percentage}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CountryItems;
