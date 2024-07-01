import React, {FC} from 'react';
import FormInput from '../../ui/form-input/FormInput';
import DropdownMenu from '../../ui/dropdown-menu/DropdownMenu';
import ButtonAdd from '../../ui/button-add/ButtonAdd';
import InputGroup from '../../ui/input-group/InputGroup';
import cn from 'clsx';
import s from './Toolbox.module.scss';

interface Props {
    children: React.ReactElement,
    statusItems?: any,
    search?: boolean,
    add?: boolean
}

const Toolbox: FC<Props> = ({children, statusItems, search, add}) => {
    return (
        <div className={cn(s.toolbox)}>
            <div className={cn(s.toolbox__row, 'row gutter-bottom-xs')}>
                <div className={cn(s.toolbox__left, 'col-12 col-lg')}>
                    <div className={cn(s.toolbox__leftRow, 'row row--xs gutter-bottom-xs')}>
                        {children}
                        {statusItems &&
                            <div className="form-group form-group--inline col-12 col-sm-auto d-none d-sm-block">
                                <InputGroup classNames={s.toolbox__status}>
                                    <FormInput select={true} />
                                    <DropdownMenu items={statusItems} />
                                </InputGroup>
                            </div>
                        }
                    </div>
                </div>
                <div className="toolbox__right col-12 col-lg-auto">
                    <div className="toolbox__right-row row row--xs flex-nowrap">
                        {search &&
                            <div className="col col-lg-auto">
                                <form className="toolbox__search" method="GET">
                                    <InputGroup icon={{ name: 'icon-search' }} prepend={true} input={
                                        { type: 'text', placeholder: 'Search product'}
                                    } />
                                </form>
                            </div>
                        }
                        {add &&
                            <div className="col-auto">
                                <ButtonAdd color={'blue'} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toolbox;
