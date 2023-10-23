import { useFormik } from 'formik';
import { AuthButton, AuthInput, FormBox, MainBox } from './registerStyles';
import SignupSchema from '../../helpers/formValidation';

const Register = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            password: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <MainBox>
                <form onSubmit={formik.handleSubmit}>
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
                            id='name'
                            label='Name'
                            variant='standard'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        <AuthInput
                            id='phone'
                            label='Phone'
                            variant='standard'
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                        />
                        {/*     {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null} */}
                        <AuthInput
                            id='email'
                            label='Email'
                            variant='standard'
                            value={formik.values.email}
                            onChange={formik.handleChange}
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
                            Register
                        </AuthButton>
                    </FormBox>
                </form>
            </MainBox>
        </>
    );
};

export default Register;
