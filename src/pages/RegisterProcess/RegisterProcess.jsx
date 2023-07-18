// import backgroundImg from '../../assets/filter.jpg';
import { Link } from 'react-router-dom'
import registerImg from '../../assets/register.png'
import './RegisterProcess.css'

const RegisterProcess = () => {
    return(
        <main className="main container">
            <section className="main__section hero-section section">
                <h1 className='hero__header'>MAG-REGISTER NA</h1>
                <img className="process__img" src={registerImg} />
            </section>
            <section className="main__section content-section section">
                <div className="process__wrapper">
                    <div className="process__header-container">
                        <h5 className='process__english-header'>
                            PROCESS OF SECURING ASSISTANCE
                        </h5>
                        <h5 className='process__fil-header'>
                            PROSESO SA PAGKUHA NG AYUDA
                        </h5>
                    </div>
                    <div className="process__details-container">
                        <div className="process__column">
                            <p className='process__details'>
                                <span className="process__english-details">
                                    1. Register or Login to your account to get started
                                </span>
                                <br/>
                                <span className='process__fil-details'>
                                    Gumawa o Buksan ang inyong account upang magsimula
                                </span>
                            </p>
                            <br/>
                            <p className='process__details'>
                                <span className="process__english-details">
                                    2. Go to Assistance Page and choose your assistance
                                </span>
                                <br/>
                                <span className='process__fil-details'>
                                    Pumunta sa Assistance Page at pumili ng ayuda.
                                </span>
                            </p>
                            <br/>
                            <p className='process__details'>
                                <span className="process__english-details">
                                    3. Upload the necessary documents for identity confirmation        
                                </span>
                                <br/>
                                <span className='process__fil-details'>
                                    I-upload ang mga kailanang dokumento upang makumpirma ang pagkakakilanlan.
                                </span>
                            </p>
                            <br/>
                            <p className='process__details'>
                                <span className="process__english-details">
                                    4.The request will be evaluated by the Office of the Congressman.
                                </span>
                                <br/>
                                <span className='process__fil-details'>
                                    Ang aplikasyon ay kikilatisin ng Office of the Congressman.                                    
                                </span>
                            </p>
                            <br/>
                        </div>
                        <div className="process__column">
                            <p className='process__details'>
                                <span className="process__english-details">
                                    5. Wait for the advisory from the Office of the Congressman regarding your application through the contact information that you have provided.
                                </span>
                                <br/>
                                <span className='process__fil-details'>
                                    Maghintay sa anunsiyo ng opisina tungkol sa inyong aplikasyon sa pamamagitan ng inyong detalyeng ibinigay.
                                </span>
                            </p>
                            <br/>
                            <div className="process__btn">
                                <Link to="/privacy-policy" className='btn lightyellow-btn process__link'>CREATE AN ACCOUNT</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default RegisterProcess