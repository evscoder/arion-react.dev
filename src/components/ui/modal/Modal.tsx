import React, {FC, useEffect, useState} from 'react';
import styles from './Modal.module.scss';
import cn from 'clsx';
import SimpleBar from 'simplebar-react';
import {createPortal} from 'react-dom';

export type ModalActionProps = {
    show: boolean,
    animate: boolean
}

interface Props {
    isShow: boolean,
    type?: 'panel',
    side?: 'right',
    content: React.ReactElement,
    footer: React.ReactElement,
    classNames?: string,
    setClose: () => void
}

const Modal: FC<Props> = ({ isShow, type, side, content, footer, classNames, setClose }) => {
    const [active, setActive] = useState<boolean>(false);
    const [animate, setAnimate] = useState<boolean>(false);

    useEffect(() => {
        if (isShow) {
            setActive(true);
            setAnimate(true);
        } else {
            setAnimate(false);
            setTimeout(() => {
                setActive(false);
            }, 310);
        }
    }, [isShow]);

    return (
        createPortal(
            <div className={cn(styles.modal, active && styles[`is-active`], animate && styles[`is-animate`], styles[`modal--${type}`], styles[`modal--${side}`], classNames)}>
                <div className={styles.modal__overlay} data-dismiss="modal" onClick={setClose}></div>
                <div className={styles.modal__wrap}>
                    <SimpleBar className={cn(styles.modal__window, 'scrollbar-thin')} data-modal={'modal-window'}>
                        <div className={styles.modal__content}>
                            <div className={styles.modal__body} data-modal={'modal-body'}>
                                <div className={styles.modal__container}>
                                    { content }
                                </div>
                            </div>
                            {footer &&
                                <div className={styles.modal__footer} data-modal={'modal-footer'}>
                                    <div className={styles.modal__container}>
                                        { footer }
                                    </div>
                                </div>
                            }
                        </div>
                    </SimpleBar>
                </div>
            </div>,
            document.getElementById('root') as HTMLDivElement
        )
    );
};

export default Modal;
