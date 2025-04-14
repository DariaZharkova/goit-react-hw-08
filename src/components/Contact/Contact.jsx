import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import { deleteContact } from '../../redux/contacts/operations';
import BaseModal from '../BaseModal/BaseModal';
import ConfirmModalContent from '../ConfirmModalContent/ConfirmModalContent';
import css from './Contact.module.css';
import { selectIsLoading } from '../../redux/contacts/selectors';

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(item.id)).unwrap();
      toast.success('Contact deleted successfully!');
    } catch (error) {
    } finally {
      closeModal();
    }
  };

  return (
    <>
      <div>
        <p className={css.text}>
          <FaUser className={css.icon} />
          {item.name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} /> {item.number}
        </p>
      </div>
      <button className={css.btn} onClick={openModal}>
        Delete
      </button>

      <BaseModal isOpen={modalIsOpen} onClose={closeModal}>
        <ConfirmModalContent
          text={'Are you sure you want to delete this contact?'}
          handleConfirm={handleDelete}
          handleCancel={closeModal}
          isLoading={isLoading}
        />
      </BaseModal>
    </>
  );
}
{
  /* <p className={css.text}>
          Are you sure you want to delete this contact?
        </p>
        <div className={css.buttons}>
          <button
            className={`${css.btn} ${css.confirm}`}
            type="button"
            onClick={handleDelete}
          >
            Confirm
          </button>
          <button
            className={`${css.btn} ${css.cancel}`}
            type="button"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div> */
}
