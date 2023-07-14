import { Link } from 'react-router-dom'
import registerImg from '../../assets/register.png'
import './PrivacyPolicy.css'

const PrivacyPolicy = () =>{
    return(
        <main className='main container'>
            <section className='main__section hero-section section'>
                <h1 className='hero__header'>MAG-REGISTER NA</h1>
                <img className='policy__img' src={registerImg} />
            </section>
            <section className='main__section content-section section'>
                <div className="policy__wrapper">
                    <h5 className='policy__header'>DATA PRIVACY POLICY</h5>
                    <p className='policy__details'>
                        Kinikilala at pinapahalagahan ng Office of the Congressman ang inyong karapatang pangalagaan at ingatan ang inyong personal information base sa Republic Act 10173 - Data Privacy Act of 2012.
                    </p>
                    <p className='policy__details'>
                        Lahat ng impormasyon na inyong sasagutan sa susunod na form ay isa-submit sa Office of he Congressman at gagamitin naman ng aming opisina para maitala ang inyong application. Tinitiyak ng Office of the Congressman na ang mga impormasyong ito ay iingatan at pangangalagaan.
                    </p>
                    <p className='policy__details'>
                        Sa pagsagot ninyo sa susunod na form, ipinapahayag ninyo ang inyong pag-sangayon sa Data Privacy Policy ng aming opisina.
                    </p>
                    <div className="policy__button-wrapper">
                        <Link to="/registration" className='btn blue-btn policy__btn'>MAGPATULOY</Link>
                        <Link to="/" className='disagree-btn btn policy__disagree-btn'>DI SUMASANGAYON</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PrivacyPolicy