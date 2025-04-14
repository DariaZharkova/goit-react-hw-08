import { useEffect, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import {
  selectContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import BaseForm from '../BaseForm/BaseForm';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This is a required field'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This is a required field'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = async values => {
    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === values.name.toLowerCase() ||
        contact.number === values.number
    );

    if (existingContact) {
      toast('⚠️ This contact already exists!');
      return;
    }

    try {
      await dispatch(addContact(values)).unwrap();
      toast.success('Contact added successfully!');
    } catch (error) {
      toast.error('Failed to add contact');
    }
  };

  return (
    <BaseForm
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
      fields={[
        { name: 'name', label: 'Name', type: 'text', id: nameFieldId },
        { name: 'number', label: 'Number', type: 'text', id: numberFieldId },
      ]}
      buttonText={'Add contact'}
      isLoading={isLoading}
    />
  );
}

{
  /* <Formik
  initialValues={{
    name: '',
    number: '',
  }}
  validationSchema={contactSchema}
  onSubmit={(values, actions) => {
    dispatch(addContact({ ...values }));
    actions.resetForm();
  }}
>
  <Form className={css.form}>
    <div className={css.wrap}>
      <label htmlFor={nameFieldId}>Name</label>
      <Field type="text" name="name" id={nameFieldId} />
      <ErrorMessage className={css.error} name="name" component="span" />
    </div>

    <div className={css.wrap}>
      <label htmlFor={numberFieldId}>Number</label>
      <Field type="text" name="number" id={numberFieldId} />
      <ErrorMessage className={css.error} name="number" component="span" />
    </div>

    <button className={css.btn} type="submit">
      Add contact
    </button>
  </Form>
</Formik>; */
}
