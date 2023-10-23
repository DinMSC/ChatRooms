import {
    AuthButton,
    AuthInput,
    FormBox,
    MainBox,
} from '../register/registerStyles';

const Login = () => {
    return (
        <>
            <MainBox>
                <FormBox>
                    {/*   <TextField
                        error
                        id='standard-error-helper-text'
                        label='Error'
                        defaultValue='Hello World'
                        helperText='Incorrect entry.'
                        variant='standard'
                    /> */}
                    <AuthInput
                        id='standard-basic'
                        label='Email or Phone'
                        variant='standard'
                    />
                    <AuthInput
                        id='standard-basic'
                        label='Password'
                        variant='standard'
                    />
                    <AuthButton variant='contained'>Login</AuthButton>
                </FormBox>
            </MainBox>
        </>
    );
};

export default Login;
