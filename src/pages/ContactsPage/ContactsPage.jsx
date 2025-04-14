import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectHasFetched,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const hasFetched = useSelector(selectHasFetched);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <main className={css.main}>
      <div className={css.formWrap}>
        <h1 className={css.title}>Let's save a new friend!</h1>
        <ContactForm />
      </div>

      {isLoading && !error && <Loader />}

      {!isLoading && error && (
        <ErrorMessage
          message={
            "Oops! We couldn't load your contacts. Please try again later or check your connection."
          }
        />
      )}

      {!isLoading && contacts.length > 0 && (
        <div className={css.listWrap}>
          <SearchBox />
          <ContactList />
        </div>
      )}

      {!isLoading && hasFetched && contacts.length === 0 && (
        <div className={css.textWrap}>
          <p className={css.text}>
            You don't have any contacts yet. Let's add someone special 😊
          </p>
          <p>Fill out the form to add your first contact ✍️</p>
        </div>
      )}
    </main>
  );
}
