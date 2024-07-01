import {FC} from 'react';
import Card, {CardProps} from '../card/card';
import CreditCard from '../../ui/credit-card/CreditCard';
import CardList, {CardListProps} from '../card/card-list/CardList';
import s from './CreditWidget.module.scss';
import {CreditCardProps} from '../../../types/types';


interface CreditWidgetProps {
    credit: CreditCardProps;
    cards: CardListProps[]
}

type Props = CardProps & CreditWidgetProps

const CreditWidget: FC<Props> = ({ ...props }) => {
    return (
        <Card {...props} footer={<CardList items={props.cards} />}>
            <CreditCard {...props.credit} classNames={s.creditCard} />
        </Card>
    );
};

export default CreditWidget;
