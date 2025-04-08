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

{
  /* <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={registerSchema}
      onSubmit={(values, actions) => {
        dispatch(register({ ...values }));
        actions.resetForm();
      }}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="text" name="email" id={emailFieldId} />
          <ErrorMessage name="email" component="span" />
        </div>

        <div>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field type="text" name="password" id={passwordFieldId} />
          <ErrorMessage name="password" component="span" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik> */
}
