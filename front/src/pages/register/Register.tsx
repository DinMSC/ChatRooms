import { useFormik } from 'formik';
import { AuthButton, AuthInput, FormBox, MainBox } from './registerStyles';
import SignupSchema from '../../helpers/formValidation';
import axios from 'axios';

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
            axios
                .post('http://localhost:8000/api/register', values) //put constants
                .then((response) => {
                    console.log(response);
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
                            id='name'
                            label='Name'
                            variant='standard'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            helperText={
                                formik.errors.name ? formik.errors.name : null
                            }
                            error={formik.errors.name ? true : false}
                        />
                        <AuthInput
                            id='phone'
                            label='Phone'
                            variant='standard'
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            type='number'
                            helperText={
                                formik.errors.phone ? formik.errors.phone : null
                            }
                            error={formik.errors.phone ? true : false}
                        />

                        <AuthInput
                            id='email'
                            label='Email'
                            variant='standard'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            helperText={
                                formik.errors.email ? formik.errors.email : null
                            }
                            error={formik.errors.email ? true : false}
                        />

                        <AuthInput
                            id='password'
                            label='Password'
                            type='password'
                            variant='standard'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            helperText={
                                formik.errors.password
                                    ? formik.errors.password
                                    : null
                            }
                            error={formik.errors.password ? true : false}
                        />
                        <AuthButton
                            type='submit'
                            variant='contained'
                            disabled={
                                Object.values(formik.values).some(
                                    (value) => !value
                                ) || Object.values(formik.errors).some(Boolean)
                            }
                        >
                            Register
                        </AuthButton>
                    </FormBox>
                </form>
            </MainBox>
        </>
    );
};

export default Register;
