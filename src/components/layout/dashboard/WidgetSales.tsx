import {FC} from 'react';
import Card, {CardProps} from '../../container/card/card';
import Map from '../../ui/map/Map';
import CountryItems, {CountryItemProps} from '../../ui/country-items/CountryItems';

interface WidgetSalesProps {
    countries: CountryItemProps[]
}

type Props = CardProps & WidgetSalesProps;

const WidgetSales: FC<Props> = ({ ...props }) => {
    return (
        <Card {...props}>
            <Map />
            <CountryItems data={props.countries} />
        </Card>
    );
};

export default WidgetSales;
