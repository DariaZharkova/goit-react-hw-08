import { useDispatch, useSelector } from 'react-redux';
import { FaSyncAlt } from 'react-icons/fa';
import { selectUser } from '../../redux/auth/selectors';
import { openModal } from '../../redux/modal/slice';
import { changeTheme } from '../../redux/theme/slice';
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

  const handleThemeChange = () => {
    dispatch(changeTheme());
  };

  return (
    <div className={css.wrap}>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <button onClick={handleThemeChange}>
        <FaSyncAlt className={css.icon} /> Theme
      </button>
    </div>
  );
}
