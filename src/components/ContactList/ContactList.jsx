import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const selectVisibleContacts = ({ contacts, filters }) => {
  return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filters.name.toLowerCase())
  );
};

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
