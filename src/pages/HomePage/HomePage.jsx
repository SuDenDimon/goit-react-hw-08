import style from "./HomePage.module.css"


export default function Homepage() {

    return (

        <>
            <div className={style.container}>
               <h1 >Welcome user 😉 </h1>
                <p> Welcome to <strong> Contact Book </strong> — a useful add-on for storing, searching, and managing your contacts. </p>
                <p> If you haven't been to our website yet, please register to access the contact book. </p>
                <p> If you are registered, click the <strong> "log In" </strong> button. 👍 </p>
            </div>
        </>

    )
}