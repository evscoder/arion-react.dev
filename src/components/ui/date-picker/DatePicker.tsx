import Flatpickr from 'react-flatpickr';
import {FC, useState} from 'react';
import FormInput from '../form-input/FormInput';
import {InputGroupProps} from '../../../types/types';
import InputGroup from '../input-group/InputGroup';

type Props = InputGroupProps;

const DatePicker: FC<Props> = ({ classNames }) => {
    const [value, setValue ] = useState([new Date()]);

    const onChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <Flatpickr
            data-enable-time
            options={{
                mode: 'range',
                dateFormat: 'd.m.y',
                enableTime: false,
                monthSelectorType: 'static',
                nextArrow: `<svg class='icon-icon-keyboard-right'>
                                <use xlink:href='#icon-keyboard-right'></use>
                            </svg>`,
                prevArrow: `<svg class='icon-icon-keyboard-left'>
                                <use xlink:href='#icon-keyboard-left'></use>
                            </svg>`,
                locale: {
                    firstDayOfWeek: 2,
                    rangeSeparator: ' / '
                }
            }}
            value={value}
            render={({...props}: any, ref) => (
                <>
                    <InputGroup classNames={classNames} prepend={true} icon={{name: 'icon-calendar'}} arrow={true}>
                        <FormInput {...props} ref={ref} onChange={onChange} />
                    </InputGroup>
                </>
            )}
            onChange={() => {}}
        />
    );
};

export default DatePicker;
