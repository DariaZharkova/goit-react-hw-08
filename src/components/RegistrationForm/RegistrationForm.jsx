import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(register({ ...values }));
        actions.resetForm();
      }}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" />
        </div>

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
      </Form>
    </Formik>
  );
}
