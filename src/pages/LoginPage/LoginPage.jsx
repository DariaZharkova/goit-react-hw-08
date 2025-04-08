import { Link } from 'react-router-dom';
import image from '../../assets/img_login_page.svg';
import LoginForm from '../../components/LoginForm/LoginForm';
import AuthLayout from '../../components/AuthLayout/AuthLayout';

export default function LoginPage() {
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
    >
      <LoginForm />
    </AuthLayout>
  );
}
