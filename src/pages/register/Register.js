import React, {useState} from "react";
import styles from "./Register.module.css"
import axios from "axios";
import {Navigate} from "react-router-dom";

function Register() {

    function handleSubmit(e) {
        e.preventDefault();
        setTriggerError(false)
        onsubmit();
    }


    const [email, setEmail] = useState({});
    const [username, setUsername] = useState({});
    const [password, setPassword] = useState({});
    const [registerSucces, setRegisterSucces] = useState(false);
    const [triggerError, setTriggerError] = useState(false);
    const [error, setError] = useState({});

    async function onsubmit() {
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    "username": `${username}`,
                    "email": `${email}`,
                    "password": `${password}`,
                    "role": ["user"]
                });
            setRegisterSucces(true);
        } catch (e) {
            console.error(e);
            setError(e.response.data.message);
            setTriggerError(true);
        }
    }

    return (
        <>
            <main className={styles.main}>
                <div className={styles.registerContainer}>
                    <h1>Welkom on the register page</h1>

                    <form action="submit"
                          onSubmit={handleSubmit}>
                        <label htmlFor=""> username </label><input type="text"
                                                                   onChange={e => setUsername(e.target.value)}
                                                             />
                        <label htmlFor=""> email </label><input type="email" onChange={e => setEmail(e.target.value)}/>
                        <label htmlFor=""> password </label><input type="password"
                                                                   onChange={e => setPassword(e.target.value)}/>

                        <button
                            className={styles.registerbutton}
                            type="submit"
                        > Register

                        </button>

                    </form>
                    {triggerError && <p className={styles.error}>{error}</p>}

                    <p className={styles.guideRegister}>Email must contain an @ and password needs to be at
                        least six characters long </p>


                </div>
            </main>
            {registerSucces && <Navigate to="/login"/>}
        </>
    );
}

export default Register
