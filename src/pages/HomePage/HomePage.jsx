import { useSelector } from 'react-redux';
import { FiArrowRight } from 'react-icons/fi';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import image from '../../assets/img_home_page.svg';
import css from './HomePage.module.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <main className={css.main}>
      <div className={css.imageWrap}>
        <img src={image} alt="" />
      </div>
      <div className={css.content}>
        <h1 className={css.title}>Welcome to Your Contacts Book!</h1>
        <p className={css.text}>
          Save your contacts in a safe place and access them anytime!
        </p>
        {isLoggedIn ? (
          <Link className={css.link} to="/contacts">
            <FiArrowRight /> Contacts
          </Link>
        ) : (
          <div className={css.links}>
            <Link className={css.link} to="/register">
              Register
            </Link>
            <Link className={css.link} to="/login">
              Log In
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
