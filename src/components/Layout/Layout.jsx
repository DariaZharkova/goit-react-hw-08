import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import AppFooter from '../AppFooter/AppFooter';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
      <AppFooter />
      <ConfirmModal />
    </div>
  );
}
