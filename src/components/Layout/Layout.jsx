import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';
import AppBar from '../AppBar/AppBar';
import AppFooter from '../AppFooter/AppFooter';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import css from './Layout.module.css';

export default function Layout({ children }) {
  const theme = useSelector(selectTheme);

  return (
    <div className={`${css.container} theme-${theme}`}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
      <AppFooter />
      <ConfirmModal />
    </div>
  );
}
