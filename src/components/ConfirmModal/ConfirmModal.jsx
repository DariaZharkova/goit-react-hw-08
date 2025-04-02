import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import {
  selectIsModalOpen,
  selectModalData,
  selectModalType,
} from '../../redux/modal/selectors';
import { deleteContact } from '../../redux/contacts/operations';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function ConfirmModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const modalType = useSelector(selectModalType);
  const modalData = useSelector(selectModalData);

  const handleConfirm = () => {
    if (modalType === 'confirmDelete') {
      dispatch(deleteContact(modalData.contactId));
    }

    if (modalType === 'confirmLogout') {
      dispatch(logout());
    }

    dispatch(closeModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Confirm Modal"
    >
      {modalType === 'confirmDelete' && (
        <p>Are you sure you want to delete this contact?</p>
      )}
      {modalType === 'confirmLogout' && (
        <p>Are you sure you want to log out?</p>
      )}
      <button type="button" onClick={handleConfirm}>
        Confirm
      </button>
      <button type="button" onClick={handleClose}>
        Cancel
      </button>
    </Modal>
  );
}
