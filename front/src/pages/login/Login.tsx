import axios from 'axios';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {
    AuthButton,
    AuthInput,
    FormBox,
    MainBox,
} from '../register/registerStyles';

const Login = () => {
    const { setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            axios
                .post('http://localhost:8000/api/login', values) //put constants and fix backend errors for auth
                .then((response) => {
                    console.log(response);
                    const userData = response.data.user;
                    setUserData(userData);
                    localStorage.setItem('token', response.data.user.token);
                    if (response.data.user) {
                        navigate('/chat');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    });

    return (
        <>
            <MainBox>
                <form onSubmit={formik.handleSubmit}>
                    <FormBox>
                        <AuthInput
                            id='username'
                            label='Email or Phone'
                            variant='standard'
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            // helperText={} add errors on blur for email and phone with backend
                            // error={}
                        />
                        <AuthInput
                            id='password'
                            label='Password'
                            type='password'
                            variant='standard'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <AuthButton type='submit' variant='contained'>
                            Login
                        </AuthButton>
                    </FormBox>
                </form>
            </MainBox>
        </>
    );
};

export default Login;
