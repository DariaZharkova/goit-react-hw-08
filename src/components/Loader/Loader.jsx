import PulseLoader from 'react-spinners/PulseLoader';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.wrapper}>
      <PulseLoader color="rgba(80, 80, 80, 0.4)" size={12} />
    </div>
  );
}
