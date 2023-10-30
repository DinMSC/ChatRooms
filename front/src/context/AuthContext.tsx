import React, { createContext, useState } from 'react';
import {
    AuthContextProviderProps,
    User,
    UserContextInterface,
} from '../interfaces/AuthInterface';

const defaultState = {
    user: {
        _id: '',
        token: '',
        message: '',
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
        message: '',
    });

    const setUserData = (user: User) => {
        console.log('setUser called with:', user);
        setUser(user);
    };

    return (
        <AuthContext.Provider value={{ user, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};
