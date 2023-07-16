import { Link } from 'react-router-dom'
import data from '../../data/data.json'
import './RegisterSuccess.css'

const RegisterSuccess = () => {
    return(
        <main className='main container'>
            <section className='main__section hero-section section'>
                <h1 className='hero__header'>REGISTRATION DETAILS</h1>
            </section>
            <section className='main__section content-section section'>
                <div className="registerSuccess__wrapper">
                    <div className="registerSuccess__header-container">
                        <h5 className='registerSuccess__header'>REGISTRATION SUCCESSFUL</h5>
                    </div>
                    <div className="registerSuccess__details-container">
                        <p className='registerSuccess__details'>
                            The user <span className='registerSuccess__name'> {data.name} </span> has been successfully registered.
                        </p>
                        <div className="registerSuccess__button-wrapper section">
                            <Link className='registerSuccess__button' to='/assistance'>
                                Click here to continue your application for assistance
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default RegisterSuccess

