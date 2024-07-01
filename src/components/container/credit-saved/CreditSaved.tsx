import {FC} from 'react';
import s from './CreditSaved.module.scss';
import SimpleBar from 'simplebar-react';
import CreditCard from '../../ui/credit-card/CreditCard';
import Card, {CardProps} from '../card/card';
import Button from '../../ui/button/Button';
import {CreditCardProps} from '../../../types/types';
import cn from 'clsx';

interface CreditSavedProps {
    items: CreditCardProps[]
}

type Props = CardProps & CreditSavedProps;

const CreditSaved: FC<Props> = ({ ...props }) => {
    return (
        <Card {...props} footer={
            <Button
                classNames={s.creditSaved__submit}
                type={'button'}
                theme={'primary'}
                icon={{prepend: true, name: 'icon-plus'}}
            >
                Add New Card
            </Button>
        }>
            <div className={s.creditSaved}>
                <SimpleBar className={s.creditSaved__scroll}>
                    <div className={cn(s.creditSaved__items)}>
                        {props.items.map(item => (
                            <div className={cn(s.creditSaved__item)} key={item.number}>
                                <CreditCard {...item} />
                            </div>
                        ))}
                    </div>
                </SimpleBar>
            </div>
        </Card>
    );
};

export default CreditSaved;
