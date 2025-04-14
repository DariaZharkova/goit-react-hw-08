import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSyncAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { selectIsLoading, selectUser } from '../../redux/auth/selectors';
import { changeTheme } from '../../redux/theme/slice';
import { logOut } from '../../redux/auth/operations';
import BaseModal from '../BaseModal/BaseModal';
import ConfirmModalContent from '../ConfirmModalContent/ConfirmModalContent';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleThemeChange = () => {
    dispatch(changeTheme());
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap();
    } catch (error) {
      toast.error('Failed to logout');
    } finally {
      closeModal();
    }
  };

  return (
    <>
      <div className={css.wrap}>
        <p>Welcome, {user.name}</p>
        <button type="button" onClick={openModal}>
          Logout
        </button>
        <button onClick={handleThemeChange}>
          <FaSyncAlt className={css.icon} /> Theme
        </button>
      </div>

      <BaseModal isOpen={modalIsOpen} onClose={closeModal}>
        <ConfirmModalContent
          text={'Are you sure you want to log out?'}
          handleConfirm={handleLogout}
          handleCancel={closeModal}
          isLoading={isLoading}
        />
      </BaseModal>
    </>
  );
}
