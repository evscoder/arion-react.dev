import {FC} from 'react';
import Breadcrumbs, {BreadcrumbsItemProps} from '../../ui/breadcrumbs/Breadcrumbs';
import ButtonIcon from '../../ui/button-icon/ButtonIcon';
import s from './PageTools.module.scss';

interface Props {
    items: BreadcrumbsItemProps[]
}

const PageTools: FC<Props> = ({items}) => {
    return (
        <div className={s.pageTools}>
            <div className={s.pageTools__breadcrumbs}>
                <Breadcrumbs items={items} />
            </div>
            <div className={s.pageTools__right}>
                <div className={s.pageTools__rightRow}>
                    <div className={s.pageTools__rightItem}>
                        <ButtonIcon icon={'icon-print'} />
                    </div>
                    <div className={s.pageTools__rightItem}>
                        <ButtonIcon icon={'icon-import'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTools;
