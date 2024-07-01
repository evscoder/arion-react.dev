import Modal from '../../ui/modal/Modal';
import styles from './DemoPanel.module.scss';
import DemoToggle from './demo-toggle/DemoToggle';
import ThemeToggle from './theme-toggle/ThemeToggle';
import ModalDismissButton from '../../ui/modal/ModalDismissButton';
import {useState} from 'react';

const DemoPanel = () => {
    const [showModal, setModal] = useState<boolean>(false);

    const onTogglePanel = (): void => {
        setModal(true);
    };

    const onCloseModal = () => {
        setModal(false);
    };

    return (
        <>
            <DemoToggle onClick={onTogglePanel} />
            <Modal isShow={showModal} setClose={onCloseModal} classNames={styles.demoPanel} type={'panel'} side={'right'}
                content={
                    <>
                        <div className="col-12 text-center mb-3">
                            <ThemeToggle theme={'light'} pattern={'schemePattern1'} id={'scheme1'} image={'demo/scheme-light.jpg'} />
                            <h5>Theme Light</h5>
                        </div>
                        <div className="col-12 text-center mb-3">
                            <ThemeToggle theme={'dark'} pattern={'schemePattern2'} id={'scheme2'} image={'demo/scheme-dark.jpg'} />
                            <h5>Theme Dark</h5>
                        </div>
                    </>
                }
                footer={
                    <ModalDismissButton theme={'primary'} block={true} type={'button'} closeModal={onCloseModal}>
                        Close
                    </ModalDismissButton>
                }
            />
        </>
    );
};

export default DemoPanel;
