import { Form, Formik, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import style from "./RegistrationForm.module.css"


import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";


export default function RegistrationForm() {

    const dispatch = useDispatch();

    const feedbackMessage = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        email: Yup.string().email("Invalid email format (e.g. username@mail.com)").required("Email number is required"),
        password: Yup.string().min(8, "Password must be at least 8 characters").max(30, "Password must be at most 30 characters")
    .required("Password is required"),
    });

    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const nameFieldId = useId();
    const emailFieldId = useId();
    const passwordFieldId = useId();

    const handleSubmit = (values, actions) => {

        dispatch(registerUser(values)).unwrap()
            .then(() => {
            actions.resetForm();
            toast.success("Great, you're registered");
            }).catch(() => {
                toast.error("Registered failed");
            });

        
    }


    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={feedbackMessage}>

                <Form className={style.form}>
                    <label className={style.label} htmlFor={nameFieldId}> Name </label>
                    <Field className={style.input} type="text" name="name" />
                    <ErrorMessage className={style.errorMessage} name="name" component="span" />
                
                    <label className={style.label} htmlFor={emailFieldId}> Email </label>
                    <Field className={style.input} type="email" name="email" />
                    <ErrorMessage className={style.errorMessage} name="email" component="span" />
                
                    <label className={style.label} htmlFor={passwordFieldId}> Password </label>
                    <Field className={style.input} type="password" name="password" />
                    <ErrorMessage className={style.errorMessage} name="password" component="span" />

                    <button className={style.btn} type="submit">Register</button>
                </Form>

            </Formik>
                <Toaster position="top-center" reverseOrder={false} />
      </>
    )
}
