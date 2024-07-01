import {FC} from 'react';
import {IconProps} from '../../types/types';
import cn from 'clsx';
const Icon: FC<IconProps> = (icon) => {
    return (
        <svg className={cn(`icon-${icon.name}`, icon.classNames)} width={icon.width} height={icon.height ? icon.height : icon.width}>
            <use xlinkHref={`#${icon.name}`}></use>
        </svg>
    );
};

export default Icon;
