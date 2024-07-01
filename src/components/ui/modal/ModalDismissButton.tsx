import {FC} from 'react';
import Button from '../button/Button';
import {ButtonProps} from '../../../types/types';

type Props = ButtonProps & {
    closeModal: () => void;
}

const ModalDismissButton: FC<Props> = ({ children, closeModal, ...props }) => {
    return (
        <Button {...props} onClick={closeModal}>
            {children}
        </Button>
    );
};

export default ModalDismissButton;
