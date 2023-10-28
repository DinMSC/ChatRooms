import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Chat = () => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;

    useEffect(() => {
        // Do something when user data changes
        console.log('User data changed:', user);
    }, [user]);

    return (
        <>
            <h1>AAAA</h1>
            <p>User ID: {user._id}</p>
            <p>User Token: {user.token}</p>
        </>
    );
};

export default Chat;
