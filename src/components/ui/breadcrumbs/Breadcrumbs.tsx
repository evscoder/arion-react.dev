import {FC} from 'react';
import Icon from '../Icon';
import {Link} from 'react-router-dom';
import s from './Breadcrumbs.module.scss';
import cn from 'clsx';

interface Props {
    items: BreadcrumbsItemProps[]
}

export type BreadcrumbsItemProps = {
    section?: boolean,
    text: string,
    href: string
}

const Breadcrumbs: FC<Props> = ({ items }) => {
    return (
        <div className={s.breadcrumbs}>
            <div className={s.breadcrumbs__container}>
                <ol className={s.breadcrumbs__list}>
                    {items.map((item, index: number) => (
                        <li className={cn(s.breadcrumbs__item, item.section && 'disabled', items.length - 1 === index && 'active')}>
                            {items.length - 1 === index ?
                                <span className={s.breadcrumbs__link}>{item.text}</span> :
                                <Link className={s.breadcrumbs__link} to={item.href}>
                                    {item.text === 'Home' ?
                                        <Icon name={'icon-home'} classNames={s.breadcrumbs__icon} /> :
                                        <span>{item.text}</span>
                                    }
                                    <Icon name={'icon-keyboard-right'} classNames={s.breadcrumbs__arrow} />
                                </Link>
                            }
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Breadcrumbs;
