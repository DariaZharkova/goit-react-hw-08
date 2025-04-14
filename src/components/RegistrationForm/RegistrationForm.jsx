import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import BaseForm from '../BaseForm/BaseForm';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Too Long!')
    .required('This is a required field'),
  email: Yup.string().email().required('This is a required field'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .max(50, 'Too Long!')
    .required('This is a required field'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <BaseForm
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={registerSchema}
      onSubmit={values => dispatch(register(values))}
      fields={[
        { name: 'name', label: 'Name', type: 'text', id: nameFieldId },
        { name: 'email', label: 'Email', type: 'text', id: emailFieldId },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          id: passwordFieldId,
        },
      ]}
      buttonText="Register"
    />
  );
}
