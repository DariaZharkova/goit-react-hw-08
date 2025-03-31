import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/auth/operations';
// import { fetchContacts } from '../redux/contacts/operations';
// import { useEffect } from 'react';
// import { selectError, selectLoading } from '../redux/contacts/selectors';

export default function App() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };
  // const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   console.log('fetch');

  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
      {/* {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && error && <b>{error}</b>} */}
    </>
  );
}
