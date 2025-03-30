import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import { selectError, selectLoading } from '../redux/contacts/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    console.log('fetch');

    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Hello</h1>
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && error && <b>{error}</b>}
    </>
  );
}
