import {FC, useState} from 'react';
import s from './CreditAdd.module.scss';
import Card, {CardProps} from '../card/card';
import FormGroup from '../../ui/form-group/FormGroup';
import InputGroup from '../../ui/input-group/InputGroup';
import Button from '../../ui/button/Button';
import cn from 'clsx';
import FormInputCleave from '../../ui/form-input/FormInputCleave';
import imagePath from '../../../helper/imagePath';

type Props = CardProps;

const CreditAdd: FC<Props> = ({...props}) => {
    const [year] = useState(new Date().getFullYear().toString());
    const [month] = useState(new Date().getMonth().toString());

    const onSubmit = (event: any): void => {
        event.preventDefault();
    };

    return (
        <Card {...props}>
            <form className={s.creditAdd} method={'POST'} onSubmit={onSubmit}>
                <FormGroup title={'Name on Card'} classNames={s.formGroup}>
                    <InputGroup input={{
                        placeholder: 'Mark Anderson',
                        required: true
                    }}>
                    </InputGroup>
                </FormGroup>
                <FormGroup title={'Card Number'} classNames={s.formGroup}>
                    <InputGroup append={<img src={imagePath('visa-logo.png')} alt="#"/>}>
                        <FormInputCleave placeholder={'****   ****   ****   1234'} options={{creditCard: true}} />
                    </InputGroup>
                </FormGroup>
                <div className={'row row--sm'}>
                    <FormGroup title={'Expire Date'} classNames={cn(s.formGroup, 'col')}>
                        <InputGroup>
                            <FormInputCleave placeholder={'12/2020'} options={{
                                date: true,
                                dateMin: `${year}-${month}`,
                                datePattern: ['m', 'Y']
                            }} />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup title={'CVV Code'} classNames={cn(s.formGroup, 'col')}>
                        <InputGroup>
                            <FormInputCleave placeholder={'***'} options={{
                                blocks: [3]
                            }} />
                        </InputGroup>
                    </FormGroup>
                </div>
                <div className={s.creditAdd__submit}>
                    <Button type={'submit'} theme={'primary'} block={true} icon={{prepend: true, name: 'icon-plus'}}>
                        Add Card
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default CreditAdd;
