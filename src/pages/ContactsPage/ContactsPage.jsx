import { useEffect } from 'react'
import style from "./ContactsPage.module.css"

import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';



export default function ContactsPage() {  


  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()).unwrap().then(() => console.log("Success :)")).catch(() => console.log("Error :("));
  }, [dispatch]);

  return (
    
    <div className={ style.container }>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      
      {loading && <p>Loading contacts...</p>}
      {error && <p className={style.error}>Error: {error}</p>}
      <ContactList />
    </div>

  )
}