import React from "react";
import styles from "./Beers.module.css";

function Beers(props) {

    return (
        <>
            <div className={styles.beers}>

                <div className={styles.listdiv}>
                    <h1>{props.title}</h1>
                    <p>Goes with these diches</p>

                    <ul>
                        <li>{props.list1}</li>
                        <li>{props.list2}</li>
                        <li>{props.list3}</li>
                    </ul>
                </div>
                <div className={styles.imgdiv}>
                    <img src={props.img} alt={props.title}/>
                    <p className={styles.alcohol}> alc.{props.alc}%</p>
                </div>

            </div>
        </>
    );
}

export default Beers;
