import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Chat = () => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;

    console.log('User from context:', user);

    return (
        <>
            <h1>Welcome {user.name}</h1>
            <p>User ID: {user._id}</p>
            <p>User Token: {user.token}</p>
        </>
    );
};

export default Chat;
