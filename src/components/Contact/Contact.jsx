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
import EditModalContent from '../EditModalContent/EditModalContent';

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(item.id)).unwrap();
      toast.success('Contact deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete contact');
    } finally {
      closeDeleteModal();
    }
  };

  return (
    <>
      <div className={css.info}>
        <p className={css.text}>
          <FaUser className={css.icon} />
          {item.name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} /> {item.number}
        </p>
      </div>
      <div className={css.actions}>
        <button className={css.btn} onClick={() => setEditModalIsOpen(true)}>
          ✏️ Edit
        </button>
        <button className={css.btn} onClick={() => setDeleteModalIsOpen(true)}>
          🗑️ Delete
        </button>
      </div>

      <BaseModal isOpen={deleteModalIsOpen} onClose={closeDeleteModal}>
        <ConfirmModalContent
          text={'Are you sure you want to delete this contact?'}
          handleConfirm={handleDelete}
          handleCancel={closeDeleteModal}
          isLoading={isLoading}
        />
      </BaseModal>

      <BaseModal isOpen={editModalIsOpen} onClose={closeEditModal}>
        <EditModalContent item={item} closeModal={closeEditModal} />
      </BaseModal>
    </>
  );
}
