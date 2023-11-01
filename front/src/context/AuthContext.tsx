import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import {
    AuthContextProviderProps,
    User,
    UserContextInterface,
} from '../interfaces/AuthInterface';

const defaultState = {
    user: {
        _id: '',
        token: '',
        name: '',
    },
    setUserData: (user: User) => {},
} as UserContextInterface;

export const AuthContext = createContext(defaultState);

export const AuthProvider: React.FC<AuthContextProviderProps> = ({
    children,
}) => {
    const [user, setUser] = useState({
        _id: '',
        token: '',
        name: '',
    });
    useEffect(() => {
        // Check for the user's authentication token in localStorage
        const token = localStorage.getItem('token');

        if (token) {
            // If a token is found, make an API call to retrieve user data
            axios
                .get('http://localhost:8000/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    // Set user data based on the response from the API
                    const userData = response.data;
                    setUser(userData);
                })
                .catch((error) => {
                    // Handle authentication error
                    console.log(error);
                    // Optionally, clear the token from localStorage and set user to the default user
                    localStorage.removeItem('token');
                    setUser({
                        _id: '',
                        name: '',
                        token: '',
                    });
                });
        }
    }, []);

    const setUserData = (user: User) => {
        setUser(user);
    };

    return (
        <AuthContext.Provider value={{ user, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};
