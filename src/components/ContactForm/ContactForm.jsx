import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';
import { useState } from 'react';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const exists = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (exists) return alert(`${name} is already in contacts`);
    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} required />
      <input value={number} onChange={e => setNumber(e.target.value)} required />
      <button type="submit">Add contact</button>
    </form>
  );
}
