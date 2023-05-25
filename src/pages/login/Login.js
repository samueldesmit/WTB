import React, {useContext, useState} from "react";
import styles from "./Login.module.css"
import {AuthContext} from "../../context/AuthContext";
import {Link} from 'react-router-dom';
import axios from "axios";

function Login() {

    const {toggleInlog} = useContext(AuthContext);
    const [username, setUsername] = useState({});
    const [password, setPassword] = useState({});
    const [error, setError] = useState({});

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const login = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                "username": `${username}`,
                "password": `${password}`,
            });
            toggleInlog(login.data.accessToken)

        } catch (e) {
            console.error(e);
            setError(e.response)

        }
    }


    return (
        <>
            <main className={styles.loginMain}>
                <div className={styles.loginContainer}>
                    <h1>Welcome at "what the beer?"</h1>
                    <p>to use WTB, we ask you to log in first</p>

                    <form className={styles.loginForm}
                          onSubmit={handleSubmit}>
                        <label htmlFor=""
                               className={styles.loginLabel}
                        > username <input type="text" onChange={e => setUsername(e.target.value)}
                                          className={styles.loginInput}
                        /></label>
                        <label htmlFor="" className={styles.loginLabel}> password <input type="password"
                                                                                         onChange={e => setPassword(e.target.value)}
                                                                                         className={styles.loginInput}/></label>

                        <button type="submit" className={styles.loginButton}> login</button>
                    </form>
                    {Object.keys(error).length > 0 && <p className={styles.error}>username and or password incorrect</p>}

                    <Link to='/register'>no account yet? click here to register! </Link>
                </div>

            </main>

        </>
    )
        ;
}

export default Login