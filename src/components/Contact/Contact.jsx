import { useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';

export default function Contact({ item }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(item.id));
  };

  return (
    <>
      <div>
        <p className={css.text}>
          <FaUser className={css.icon} />
          {item.name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} /> {item.number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
