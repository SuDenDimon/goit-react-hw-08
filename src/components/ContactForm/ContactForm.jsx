import { Formik, Form, Field,  ErrorMessage } from "formik";
import { useId, useState } from "react";
import * as Yup from "yup";
import style from "./ContactForm.module.css"

import { addContact }  from "../../redux/contacts/operations"
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import toast, { Toaster } from "react-hot-toast";



export default function ContactForm() {

    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectError);   
    
    const dispatch = useDispatch();

    const [isAdding, setIsAdding] = useState(false);


    const FeedbackMessage = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid format (e.g. 123-45-67)").required("Phone number is required")

    });


    const initialValues = {
        name: "",
        number: ""
    };
   
    const nameFieldId = useId();
    const numberlFieldId = useId();
    

    const handleSubmit = (values, actions) => {
        setIsAdding(true);
        dispatch(addContact(values)).unwrap()
            .then(() => {
                toast.success('Success! You added a new contact');
            }).catch(() => {
                toast.error('Failed to add contact');
            }).finally(() => {
                setIsAdding(false);
                actions.resetForm();
            });
        };

    return (
    <>
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackMessage}>
    
        <Form className={style.form}>
		
            <div className={style.divContainer}>

            <label htmlFor={nameFieldId}> Name </label>
            <Field className={style.input} type="text" name="name" />
            <ErrorMessage className={style.errorMessage} name="name" component="span" />

            </div>
            

            <div className={style.divContainer}>

            <label htmlFor={numberlFieldId}> Number </label>
            <Field className={style.input} type="text" name="number" />
            <ErrorMessage className={style.errorMessage} name="number" component="span" />
                
            </div>

            <button className={style.btn} type="submit"> {loading && isAdding ? "Adding..." : "Add contact"} </button>
            {error && <p className={style.ErrorMessage}>Failed to add contact: {error}</p>}
        </Form>
        
    </Formik>
        <Toaster position="top-center" reverseOrder={false} />
    </>

)   
}