import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '10',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    padding: '24px 32px',
    width: '400px',
    maxWidth: '90vw',
    borderRadius: '10px',
  },
};

Modal.setAppElement('#root');

export default function BaseModal({ isOpen, onClose, children }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Base Modal"
    >
      {children}
    </Modal>
  );
}
