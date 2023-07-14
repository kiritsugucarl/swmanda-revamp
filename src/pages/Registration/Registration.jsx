import registerImg from '../../assets/register.png'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Registration.css'

const validationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    suffix: yup.string(),
    birthDate: yup.date().required('Birth date is required'),
    password: yup.string().min(8).required('Password is required'),
    confirmPassword: yup
        .string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate('/setup-account');
    }; 

    return(
        <main className='main container'>
            <section className='main__section hero-section section'>
                <h1 className='hero__header'>MAG-REGISTER NA</h1>
                <img className='registration__img' src={registerImg} />
            </section>
            <section className='main__section content-section section'>
                <h3 className='registration__header'>CREATE AN ACCOUNT <i>(Gumawa ng Account)</i></h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="form__wrapper">
                    <div className="registration__wrapper">
                        <div className="registration__column">
                            <div className="registration__field">
                                <label className='registration__label'>First Name: </label>
                                <input className='input' type='text' name='firstName' {...register('firstName')} />
                                {errors.firstName && (
                                    <div className='error-message'>
                                        {errors.firstName.message}
                                    </div>
                                )}
                            </div>
                            <div className="registration__field">
                                <label className='registration__label'>Middle Name: </label>
                                <input className='input' type='text' name='middleName' {...register('middleName')} />
                                {errors.middleName && (
                                    <div className='error-message'>
                                        {errors.middleName.message}
                                    </div>
                                )}
                            </div>
                            <div className="registration__field">
                                <label className='registration__label'>Last Name: </label>
                                <input className='input' type='text' name='surName' {...register('surName')} />
                                {errors.surName && (
                                    <div className='error-message'>
                                        {errors.surName.message}
                                    </div>
                                )}
                            </div>
                            <div className="registration__field">
                                <label className='registration__label'>Suffix: </label>
                                <input className='input' type='text' name='suffix' {...register('suffix')} />
                                {errors.suffix && (
                                    <div className='error-message'>
                                        {errors.suffix.message}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="registration__column">
                            <div className="registration__field">
                                <label className='registration__label'>Birthdate: </label>
                                <input className='input' type='date' name='birthDate' {...register('birthDate')} />
                                {errors.birthDate && (
                                    <div className='error-message'>
                                        {errors.birthDate.message}
                                    </div>
                                )}
                            </div>
                            <div className='registration__field'>
                                <label className='registration__label'>Password:</label>
                                <input className='input' type='password' name='password' {...register('password')}/>
                                {errors.password && (
                                    <div className='error-message'>
                                        {errors.password.message}
                                    </div>
                                )}
                            </div>
                            <div className='registration__field'>
                                <label className='registration__label'>Confirm Password:</label>
                                <input className='input' type='password' name='confirmPassword' {...register('confirmPassword')}/>
                                {errors.confirmPassword && (
                                    <div className='error-message'>
                                        {errors.confirmPassword.message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="registration__button-wrapper">
                        <button onClick={handleSubmit(onSubmit)} className='btn lightyellow-btn registration__btn'>SUBMIT</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Registration