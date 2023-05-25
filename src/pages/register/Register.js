import React, {useState} from "react";
import styles from "./Register.module.css"
import axios from "axios";
import {Link, Navigate} from "react-router-dom";

function Register() {

    function handleSubmit(e) {
        e.preventDefault();
        onsubmit();
    }

    const [email, setEmail] = useState({});
    const [username, setUsername] = useState({});
    const [password, setPassword] = useState({});
    const [registerSucces, setRegisterSucces] = useState(false);
    const [error, setError] = useState("");

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
            console.error(e.response.data.message);
            setError(e.response.data.message)
        }
    }
    return (
        <>
            <main className={styles.main}>
                <h1>Welkom on the register page</h1>

                <form action="submit"
                      onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor=""> username <input type="text" onChange={e => setUsername(e.target.value)}/></label>
                    <label htmlFor=""> email <input type="email" onChange={e => setEmail(e.target.value)}/></label>
                    <label htmlFor=""> password <input type="password" onChange={e => setPassword(e.target.value)}/></label>
                    </div>
                    {error === undefined ? <p className={styles.error}>make sure email has an @ and password is a least 6 characters long</p> :
                        <p className={styles.error}>{error}</p>}
                    <button
                        className={styles.registerbutton}
                        type="submit"
                    > Register

                    </button>
                </form>
            </main>
            {registerSucces && <Navigate to="/login"/>}
        </>
    );
}

export default Register
