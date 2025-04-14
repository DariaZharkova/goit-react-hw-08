import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import BaseForm from '../BaseForm/BaseForm';

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('This is a required field'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .max(50, 'Too Long!')
    .required('This is a required field'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <BaseForm
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={values => dispatch(logIn(values))}
      fields={[
        { name: 'email', label: 'Email', type: 'text', id: emailFieldId },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          id: passwordFieldId,
        },
      ]}
      buttonText="Login"
    />
  );
}
