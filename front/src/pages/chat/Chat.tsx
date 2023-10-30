import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Chat = () => {
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    console.log(user);
    return (
        <>
            <h1>AAAA</h1>
            <p>User ID: {user._id}</p>
            <p>User Token: {user.token}</p>
            <p>Message:{user.message}</p>
        </>
    );
};

export default Chat;
