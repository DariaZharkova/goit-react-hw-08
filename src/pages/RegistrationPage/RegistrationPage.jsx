import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError } from '../../redux/auth/slice';
import { selectError, selectIsLoading } from '../../redux/auth/selectors';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import image from '../../assets/img_register_page.svg';

export default function RegistrationPage() {
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
        'User registration interface with form fields and mobile device interaction'
      }
      title={
        "Let's get started! Create your account to start building your personal contact book."
      }
      bottomText={
        <>
          Already have an account? <Link to="/login">Log In</Link> here!
        </>
      }
      isLoading={isLoading}
    >
      <RegistrationForm />
      {error && (
        <ErrorMessage
          message={
            'Registration failed. Please check your details and try again.'
          }
        />
      )}
    </AuthLayout>
  );
}
