import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <main className={css.main}>
      <Link to="/" className={css.link}>
        Back to HOME
      </Link>
    </main>
  );
}
