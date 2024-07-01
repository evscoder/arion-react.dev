import {FC} from 'react';
import Tippy from '@tippyjs/react';
import {TooltipProps} from '../../../types/types';

const Tooltip: FC<TooltipProps> = ({ children, content, placement }) => {
    return (
        <Tippy content={content} allowHTML={true} animation={'fade'} placement={placement}>
            {children}
        </Tippy>
    );
};

export default Tooltip;
