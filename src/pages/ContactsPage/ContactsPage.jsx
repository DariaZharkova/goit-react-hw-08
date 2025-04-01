import { useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectError, selectLoading } from '../../redux/contacts/selectors';

export default function ContactsPage() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

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
