// ProtectedRoute.js
import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { user, loading } = useContext(AuthContext);

    const localStorageToken = localStorage.getItem('token');

    const isAuthenticated = user.token === localStorageToken;

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to='/' replace />;
    }

    return children as JSX.Element | null;
};

export default ProtectedRoute;
