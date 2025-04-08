import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import image from '../../assets/img_register_page.svg';

export default function RegistrationPage() {
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
    >
      <RegistrationForm />
    </AuthLayout>
  );
}
