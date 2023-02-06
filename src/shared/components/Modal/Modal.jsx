import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';

import { IoCloseCircleOutline } from "react-icons/io5";

import styles from './modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({onClose, children}) => {
    // eslint-disable-next-line
    const closeModal = ({target, currentTarget, code}) => {
        if(target === currentTarget || code === "Escape") {   
            onClose();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", closeModal);
        return () => document.removeEventListener("keydown", closeModal);
    }, [closeModal]);

    return (
        createPortal(
            <div onClick={closeModal} className={styles.overlay}>
                <div className={styles.modal}>
                    <IoCloseCircleOutline className={styles.close} onClick={onClose} />
                    {children}
                </div>
            </div>,
            modalRoot
        )
    )
}

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}


// class Modal extends Component {
//     componentDidMount() {
//         document.addEventListener("keydown", this.closeModal);
//     }
//     componentWillUnmount() {
//         document.removeEventListener("keydown", this.closeModal);
//     }
//     closeModal = ({target, currentTarget, code}) => {
//         if(target === currentTarget || code === "Escape") {   
//             this.props.onClose();
//         }
//     }
//     render() {
//         const {children, onClose} = this.props;
//         const {closeModal} = this;
//         return (
//             createPortal(
//                 <div onClick={closeModal} className={styles.overlay}>
//                     <div className={styles.modal}>
//                         <IoCloseCircleOutline className={styles.close} onClick={onClose} />
//                         {children}
//                     </div>
//                 </div>,
//                 modalRoot
//             )
//         )
//     }
// }