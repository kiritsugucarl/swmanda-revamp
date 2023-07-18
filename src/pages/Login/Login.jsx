import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import users from './data/users.json';

import QRimage from '../../assets/QRCodeScanner.png';
import './Login.css'

const schema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    middleName: yup.string().required('Middle name is required'),
    lastName: yup.string().required('Last name is required'),
    birthdate: yup.string().required('Birthdate is required'),
    password: yup.string().required('Password is required')
});

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        const { firstName, middleName, lastName, birthdate, password } = data;

        const matchedUser = users.find(
            (user) =>
                user.firstName === firstName &&
                user.middleName === middleName &&
                user.lastName === lastName &&
                user.birthdate === birthdate &&
                user.password === password
        );

        if (matchedUser) {
            // Authentication successful
            console.log('Authentication successful');
        } else {
            // Authentication failed
            console.log('Authentication failed');
            // Display an error message or perform other actions for failed authentication
        }
    };
    
    return(
        <main className="main container">
            <section className="main__section login-section section">
                <h1 className="login__header">LOGIN YOUR ACCOUNT</h1>
                <form className="login__wrapper">
                    <div className="login__input-wrapper">
                        <div className="login__input-column">
                            <div className="input-field">
                                <label className='input-label'>First Name:</label>
                                <input className='input' {...register('firstName')} />
                                {errors.firstName && (
                                    <span className="error-message">{errors.firstName.message}</span>
                                )}
                            </div>
                            <div className="input-field">
                                <label className='input-label'>Middle Name:</label>
                                <input className='input' {...register('middleName')} />
                                {errors.middleName && (
                                    <span className="error-message">{errors.middleName.message}</span>
                                )}
                            </div>
                            <div className="input-field">
                                <label className='input-label'>Last Name:</label>
                                <input className='input' {...register('lastName')} />
                                {errors.lastName && (
                                    <span className="error-message">{errors.lastName.message}</span>
                                )}
                            </div>    
                        </div>
                        <div className="login__input-column">
                            <div className="input-field">
                                <label className='input-label'>Suffix:</label>
                                <input className='input' {...register('suffix')} />
                                {errors.suffix && (
                                    <span className="error-message">{errors.suffix.message}</span>
                                )}
                            </div>
                            <div className="input-field">
                                <label className='input-label'>Birthdate:</label>
                                <input className='input' type="date" {...register('birthdate')} />
                                {errors.birthdate && (
                                    <span className="error-message">{errors.birthdate.message}</span>
                                )}
                            </div>
                            <div className="input-field">
                                <label className='input-label'>Password:</label>
                                <input className='input' type="password" {...register('password')} />
                                {errors.password && (
                                    <span className="error-message">{errors.password.message}</span>
                                )}
                            </div>                
                        </div>    
                    </div>
                    <div className="login__button-wrapper">
                        <button className="btn darkyellow-btn login__button" type="submit">
                            LOGIN
                        </button>
                    </div>
                </form>
            </section>
            <section className="main__section qr-section section">
                <h1 className='qr-header'>CHECK YOUR STATUS</h1>
                <div className="qr-img-wrapper">
                    <img className='qr-img' src={QRimage} alt=''/>
                </div>
                <Link to='/scanner' className='btn darkyellow-btn qr-button'>
                    SCAN
                </Link>
            </section>
        </main>
    )
}

export default Login
