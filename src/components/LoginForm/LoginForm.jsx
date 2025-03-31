import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

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
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        dispatch(login({ ...values }));
        actions.resetForm();
      }}
    >
      <Form>
        <div>
          <label htmlFor={emailFieldId}>Email</label>
          <Field type="text" name="email" id={emailFieldId} />
          <ErrorMessage name="email" />
        </div>

        <div>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field type="text" name="password" id={passwordFieldId} />
          <ErrorMessage name="password" />
        </div>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
