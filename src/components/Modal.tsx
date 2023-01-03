import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: '100vh'
    }
};

const Modal = ({ handleClose, text }: any) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                drag
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="modal orange-gradient"
                onClick={(e) => e.stopPropagation()}>
                <p> {text}</p>
                <button onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>
    );
};

export default Modal;
