import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './components/Modal';

function App() {
    const [showModal, setShowModal] = useState(false);
    const close = () => setShowModal(false);
    const open = () => setShowModal(true);

    return (
        <div>
            <motion.button
                className="save-button"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => (showModal ? close() : open())}>
                Launch modal
            </motion.button>

            <AnimatePresence initial={false} exitBeforeEnter={true}>
                {showModal && <Modal modalOpen={showModal} handleClose={close} />}
            </AnimatePresence>
        </div>
    );
}

export default App;
