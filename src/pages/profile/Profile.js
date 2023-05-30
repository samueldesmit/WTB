import React, {useContext} from "react";
import styles from "./Profile.module.css"
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

function Profile() {
    const {user} = useContext(AuthContext)

    async function responseBackend() {
        try {
            const response = await axios.get('https://profiel-data', {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: 'Bearer xxx.xxx.xxx.',
                }
            });
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <main className={styles.mainProfile}>
                <div className={styles.container}>
                    <h1>Welcome <span className={styles.username}>{user.username}</span> on your profile page</h1>
                    <p>Your username is: {user.username}</p>
                    <p>The email you've used to login is: {user.email}</p>
                </div>
            </main>
        </>
    );
}

export default Profile