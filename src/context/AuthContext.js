import React, {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

function CustomProvider({children}) {

    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {

        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);

            void fetchUserData(token);
        } else {
            setIsAuth({
                ...isAuth,
                status: 'done',
            })
        } }, [])

    const navigate = useNavigate();

    async function fetchUserData(token) {
        try {
            const response = await axios.get("https://frontend-educational-backend.herokuapp.com/api/user",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
            setIsAuth({
                isAuthenticated: true,
                user: {
                    id: response.data.id,
                    username: response.data.username,
                    email: response.data.email,
                },
                status: 'done',
            });
            navigate("/")

        } catch (e) {
            setIsAuth({
                ...isAuth,
                status: 'done',
            })
            console.error(e)
        }
    }

    function toggleInlog(token) {
        console.log(token)
        localStorage.setItem('token', token);
        fetchUserData(token);
    }

    function toggleUitlog() {
        localStorage.removeItem('token')
        setIsAuth({
            isAuthenticated: false,
            user: null,
            status: 'done',
        });
        navigate("/login")
    }

    const data = {
        ...isAuth,
        toggleInlog: toggleInlog,
        toggleUitlog: toggleUitlog,
    }

    return (<AuthContext.Provider value={data}>
        { isAuth.status === 'done' ?  children : <p>loading...</p> }
    </AuthContext.Provider>)
}

export default CustomProvider
