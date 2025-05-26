import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <p className={css.text}><FaUser /> {name}</p>
      <p className={css.text}><FaPhoneAlt /> {number}</p>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}