import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import style from "./Contact.module.css"


import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


export default function Contact({ userName, phoneNumber, contactId }) {
    
    const isDeleting = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(false);

    const heandleDelete = () => {
        setLoading(true);
        dispatch(deleteContact(contactId)).unwrap()
        .then(() => {
                toast('Great you delete contact', { icon: '🗑', });
            }).catch(() => {
                toast.error('Failed');
            }).finally(() => {
                setLoading(false);
            });
    }

    return (
        <>
            <div className={style.containerText}>
                <p className={ style.text}> <IoMdPerson /> {userName} </p>
                <p className={style.text}> <FaPhoneAlt /> {phoneNumber} </p>
            </div>
            <button className={style.btn} onClick={heandleDelete}>  {loading && isDeleting ? "Deleting..." : "Delete"} </button>
            {error && <p className={style.error}>Error: {error}</p>}
            <Toaster position="top-center" reverseOrder={false} />
    </>
        
    )        
}