import React, {useContext} from "react";
import styles from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function Nav() {
    const {isAuthenticated, toggleUitlog} = useContext(AuthContext);

    return (
        <>
            <div className={styles.navBar}>
                <ul className={styles.navUl}>
                    {isAuthenticated && <li><NavLink to="/" className={({isActive}) => isActive ? styles["active"] : styles["navLink"]}>Home</NavLink></li>}
                    {isAuthenticated && <li><NavLink to="/profile" className={({isActive}) => isActive ? styles["active"] : styles["navLink"]}>Profile</NavLink></li>}
                    <li><NavLink to="About" className={({isActive}) => isActive ? styles["active"] : styles["navLink"]}> About WTB</NavLink></li>
                    {isAuthenticated ? <></> : <li><NavLink to="/login" className={({isActive}) => isActive ? styles["active"] : styles["navLink"]}>login</NavLink></li>}
                </ul>
                {isAuthenticated &&
                    <button
                        className={styles.navButton}
                        type="button"
                        onClick={toggleUitlog}>
                        log uit
                    </button>
                }
            </div>
        </>
    )
}

export default Nav;