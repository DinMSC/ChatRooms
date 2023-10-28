import React, { createContext, useCallback, useState } from 'react';
import {
    AuthContextProviderProps,
    UserData,
} from '../interfaces/AuthInterface';

export const AuthContext = createContext({
    user: {
        _id: '',
        token: '',
        message: '',
    },
    updateUser: (data: UserData) => {},
});

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children,
}) => {
    const [user, setUser] = useState<UserData>({
        _id: '',
        token: '',
        message: '',
    });

    const updateUser = useCallback((data: UserData) => {
        setUser(data);
    }, []);

    return (
        <AuthContext.Provider value={{ user, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
