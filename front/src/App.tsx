import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './helpers/protectedRoute';
import Chat from './pages/chat/Chat';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
    return (
        <>
            <Routes>
                <Route
                    path='/chat'
                    element={
                        <ProtectedRoute>
                            <Chat />
                        </ProtectedRoute>
                    }
                />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    );
}

export default App;
