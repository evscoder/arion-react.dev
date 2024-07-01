import {FC, useEffect, useRef, useState} from 'react';
import s from './CreditCard.module.scss';
import cn from 'clsx';
import {CreditCardProps} from '../../../types/types';
import imagePath from '../../../helper/imagePath';

interface Props extends CreditCardProps {
    classNames?: string
}

const CreditCard: FC<Props> = ({ image, number, name, date, classNames, type }) => {
    const [numbers, setNumbers] = useState<any>([]);
    const refCredit = useRef<HTMLDivElement>(null);

    const fontSizeNumbers = () => {
        const elem = refCredit.current as HTMLDivElement;

        return elem.style.fontSize = `${elem.offsetWidth}px`;
    };

    useEffect(() => {
       fontSizeNumbers();
       setNumbers(() => number.match(/.{1,4}/g));

       window.addEventListener('resize', fontSizeNumbers);

       return () => {
           window.removeEventListener('resize', fontSizeNumbers);
       };
    }, [number]);

    return (
        <div ref={refCredit} className={cn(s.creditCard, type && s[`credit-card--${type}`], classNames)}><img className={s.creditCard__image} src={imagePath(image)} alt="#"/>
            <div className={s.creditCard__numberWrapper}>
                <input className={s.creditCard__numberInput} type="text" value={number} readOnly={true}/>
                <div className={s.creditCard__number}>
                    {numbers.map((item: string, i: number) => (
                        <div className={s.creditCard__numberItem} key={i}>{item}</div>
                    ))}
                </div>
            </div>
            <div className={s.creditCard__name}>
                <div className={s.creditCard__caption}>Card Holder</div>
                {name}
            </div>
            <div className={s.creditCard__date}>
                <div className={s.creditCard__caption}>Expire</div>
                <span>{date}</span>
            </div>
        </div>
    );
};

export default CreditCard;
