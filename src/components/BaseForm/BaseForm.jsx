import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './BaseForm.module.css';

export default function BaseForm({
  initialValues,
  validationSchema,
  onSubmit,
  fields,
  buttonText,
}) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        {fields.map(({ name, label, type, id }) => (
          <div className={css.wrap} key={name}>
            <label htmlFor={id}>{label}</label>
            <Field type={type} name={name} id={id} />
            <ErrorMessage className={css.error} name={name} component="span" />
          </div>
        ))}

        <button className={css.btn} type="submit">
          {buttonText}
        </button>
      </Form>
    </Formik>
  );
}
