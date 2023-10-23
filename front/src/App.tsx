import { Navigate, Route, Routes } from 'react-router-dom';
import Chat from './pages/chat/Chat';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
    return (
        <>
            <Routes>
                <Route path='/chat' element={<Chat />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    );
}

export default App;
