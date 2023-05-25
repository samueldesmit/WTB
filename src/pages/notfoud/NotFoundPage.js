import React from "react";
import {Link} from 'react-router-dom';
import "./NotFoundPage.css"
function NotFoundPage() {
    return (
        <>
            <main>
                <h1>Oeps page has not been found</h1>
                <p><Link to="/">take me back to the home page</Link></p>
            </main>
        </>
    );
}

export default NotFoundPage