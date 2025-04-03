import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { openModal } from '../../redux/modal/slice';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(
      openModal({
        modalType: 'confirmLogout',
      })
    );
  };

  return (
    <div className={css.wrap}>
      <p>Welcome, {user.name}</p>
      <button className={css.button} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
