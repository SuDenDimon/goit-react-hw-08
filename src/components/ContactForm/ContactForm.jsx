import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    if (name && phone) {
      dispatch(addContact({ name, phone }));
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input name="name" placeholder="Name" required className={css.input}/>
      <input name="phone" placeholder="Phone" required className={css.input}/>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;