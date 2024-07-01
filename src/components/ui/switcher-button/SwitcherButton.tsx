import {FC, useLayoutEffect, useRef} from 'react';
import {SwitcherButtonItemsProps} from '../../../types/types';
import styles from './SwitcherButton.module.scss';
import cn from 'clsx';

type Props = {
    items: SwitcherButtonItemsProps[]
}

const SwitcherButton: FC<Props> = ({items}) => {
    const refButton = useRef<HTMLDivElement>(null);
    const refFlotElement = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        onWidthResize();

        window.addEventListener('resize', onWidthResize);

        return () => {
            window.removeEventListener('resize', onWidthResize);
        };
    }, []);

    const onWidthResize = () => {
        const root = refButton.current as HTMLDivElement;
        const floatElement = refFlotElement.current as HTMLDivElement;
        const activeButton = root.querySelector(`.${styles.active}`) as HTMLDivElement;

        setTimeout(() => {
            floatElement.style.width = `${activeButton?.offsetWidth}px`;
            floatElement.style.transform = `translateX(${activeButton.offsetLeft}px)`;
        });
    };

    const onToggle = (event: any) => {
        const element = event.target;

        if (element.tagName === 'BUTTON') {
            const root = refButton.current as HTMLDivElement;
            const floatElement = refFlotElement.current as HTMLDivElement;

            root.querySelector(`.${styles.active}`)?.classList.remove(styles.active);
            element.parentNode.classList.add(styles.active);
            floatElement.style.width = `${element.offsetWidth}px`;
            floatElement.style.transform = `translateX(${element.parentNode.offsetLeft}px)`;
        }
    };

    return (
        <div ref={refButton} className={styles.switcherButton} onClick={onToggle}>
            <div className={styles.switcherButton__items}>
                <div ref={refFlotElement} className={styles.switcherButton__float}></div>
                {items.map((item, index) => (
                    <div className={cn(styles.switcherButton__item, item.active && styles.active)} key={item.value + index}>
                        <button className={styles.switcherButton__btn}>{item.value}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SwitcherButton;
