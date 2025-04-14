import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError } from '../../redux/auth/slice';
import { selectError, selectIsLoading } from '../../redux/auth/selectors';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import LoginForm from '../../components/LoginForm/LoginForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import image from '../../assets/img_login_page.svg';

export default function LoginPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  return (
    <AuthLayout
      image={image}
      alt={
        'Login screen on mobile device showing email and password input fields'
      }
      title={'Happy to see you! Please log in to access your contacts.'}
      bottomText={
        <>
          New here? <Link to="/register">Register</Link> now!
        </>
      }
      isLoading={isLoading}
    >
      <LoginForm />
      {error && (
        <ErrorMessage
          message={
            "We couldn't log you in. Please check your email and password."
          }
        />
      )}
    </AuthLayout>
  );
}
