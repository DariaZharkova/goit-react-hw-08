import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import {
  selectContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { updateContact } from '../../redux/contacts/operations';
import BaseForm from '../BaseForm/BaseForm';
import css from './EditModalContent.module.css';

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

export default function EditModalContent({ item, closeModal }) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = async values => {
    const existingContact = contacts.find(
      contact =>
        contact.id !== item.id &&
        (contact.name.toLowerCase() === values.name.toLowerCase() ||
          contact.number === values.number)
    );

    if (existingContact) {
      toast('⚠️ This contact already exists!');
      return;
    }

    try {
      await dispatch(
        updateContact({
          contactId: item.id,
          contact: values,
        })
      ).unwrap();
      toast.success('Contact updated  successfully!');
    } catch (error) {
      toast.error('Failed to update contact');
    } finally {
      closeModal();
    }
  };

  return (
    <BaseForm
      initialValues={{
        name: item.name,
        number: item.number,
      }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
      fields={[
        { name: 'name', label: 'Name', type: 'text', id: nameFieldId },
        { name: 'number', label: 'Number', type: 'text', id: numberFieldId },
      ]}
      buttonText={'Save'}
      isLoading={isLoading}
    >
      <div className={css.buttons}>
        <button
          className={`${css.btn} ${css.confirm}`}
          type="submit"
          disabled={isLoading}
        >
          Save
        </button>
        <button
          className={`${css.btn} ${css.cancel}`}
          type="button"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </BaseForm>
  );
}
