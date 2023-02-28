import React, {useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

import {auth, signInWithEmailAndPassword} from '../../firebase';
import {showToastError, showToastSuccess} from '../utils/tools';

import {useFormik} from 'formik'
import * as Yup from 'yup';
import {CircularProgress} from '@mui/material'

const Signin = (props) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            email: 'akanksha@gmail.com',
            password: '123456'
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email('Invalid email address')
            .required('The email is required'),
            password:  Yup.string()
            .required('The password is required')

        }),
        onSubmit: (values) => {
            setLoading(true);
            submitForm(values);
        }
    })

    const submitForm = (values) => {
        signInWithEmailAndPassword(
            auth,
            values.email,
            values.password
        ).then((userCredential) => {
            showToastSuccess('Logged in');
            // const user = userCredential.user;
            navigate('/dashboard');
        }).catch((error) => {
            showToastError(error.message);
            setLoading(false);
        })
    }

    return ( 
        <>
        { !props.user ?
        <div className='container'>
            <div className='signin_wrapper' style={{margin: '100px'}}>
                <form onSubmit={formik.handleSubmit}>
                    <h2>Login</h2>
                    <input
                        name='email'
                        placeholer='Email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    ></input>

                    {formik.touched.email && formik.errors.email ?
                        <div className='error_label'>
                            {formik.errors.email}
                        </div>
                        : null
                    }

                    <input
                        name='password'
                        type='Password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    ></input>

                    {formik.touched.password && formik.errors.password ?
                        <div className='error_label'>
                            {formik.errors.password}
                        </div>
                        : null
                    }

                    {loading ? 
                        <CircularProgress 
                        color='secondary'
                        className='progress'
                        />
                    :
                        <button type='submit'>Login</button>
                    }
                </form>
            </div>
        </div>
        : 
            <Navigate to='/dashboard' />
        }
        </>
    )
}

export default Signin;
