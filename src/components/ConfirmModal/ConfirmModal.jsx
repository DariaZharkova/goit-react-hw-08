import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { closeModal } from '../../redux/modal/slice';
import {
  selectIsModalOpen,
  selectModalData,
  selectModalType,
} from '../../redux/modal/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { logOut } from '../../redux/auth/operations';
import css from './ConfirmModal.module.css';

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
    width: '320px',
    borderRadius: '10px',
  },
};

Modal.setAppElement('#root');

export default function ConfirmModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const modalType = useSelector(selectModalType);
  const modalData = useSelector(selectModalData);

  const handleConfirm = async () => {
    try {
      if (modalType === 'confirmDelete') {
        await dispatch(deleteContact(modalData.contactId)).unwrap();
        toast.success('Contact deleted successfully!');
      }

      if (modalType === 'confirmLogout') {
        await dispatch(logOut()).unwrap();
      }
    } catch (error) {
    } finally {
      dispatch(closeModal());
    }
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
        <p className={css.text}>
          Are you sure you want to delete this contact?
        </p>
      )}
      {modalType === 'confirmLogout' && (
        <p className={css.text}>Are you sure you want to log out?</p>
      )}
      <div className={css.buttons}>
        <button
          className={`${css.btn} ${css.confirm}`}
          type="button"
          onClick={handleConfirm}
        >
          Confirm
        </button>
        <button
          className={`${css.btn} ${css.cancel}`}
          type="button"
          onClick={handleClose}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}
