
import style from "./ContactList.module.css"
import Contact from "../Contact/Contact";


import { useSelector } from "react-redux"
import { selectFilteredContacts } from "../../redux/contacts/selectors";




export default function ContactList() {

    const filterContacts = useSelector(selectFilteredContacts);
    
    
    return (
     
    <ul className={style.list}>
        { filterContacts.map((contacts) =>
        <li className={style.item} key={contacts.id}>
                <Contact
                    userName={contacts.name}
                    phoneNumber={contacts.number}
                    contactId={contacts.id}
                />
        </li>
            )}
    </ul>
        
)

}
