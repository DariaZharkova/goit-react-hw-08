import css from './AppFoote.module.css';

export default function AppFooter() {
  return (
    <footer className={css.footer}>
      <p>
        Designed & developed by <strong>Daria Zharkova</strong> &copy; 2025 |{' '}
        <a
          href="https://github.com/DariaZharkova"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
