import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children,
}) => {
    const [user, setUser] = useState(null);

    const setUserData = (userData) => {
        setUser(userData);
    };

    return (
        <AuthContext.Provider value={{ user, setUser: setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};
