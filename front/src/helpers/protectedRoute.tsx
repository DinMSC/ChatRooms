// ProtectedRoute.js
import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { user } = useContext(AuthContext);

    const localStorageToken = localStorage.getItem('token');
    console.log(localStorageToken, 'local storage token ');

    console.log(user.token, ' user token from context');
    const isAuthenticated = user.token === localStorageToken;

    if (!isAuthenticated) {
        return <Navigate to='/' replace />;
    }

    return children as JSX.Element | null;
};

export default ProtectedRoute;
