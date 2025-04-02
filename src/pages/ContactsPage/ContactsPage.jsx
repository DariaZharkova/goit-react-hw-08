import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <main>
      <h1>Contacts Page</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && error && <b>{error}</b>}
      <ContactList />
    </main>
  );
}
