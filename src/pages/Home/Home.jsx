import { Link } from 'react-router-dom'
import congImg from '/cong.jpg'
import signature from '/signature.png'
import './Home.css'

const Home = () => {
    return(
        <main className='main container'>
            <section className='main__section hero-section section'>
                <img className='home__img' src={congImg}/>
            </section>
            <section className='main__section content-section section'>
                <h1 className='home__title'>Welcome to Social Assistance Program</h1>
                <p className='home__description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, ratione, explicabo animi aut rerum unde voluptas necessitatibus praesentium officia quos odit veniam hic, quae excepturi tempora quibusdam omnis reiciendis quisquam.</p>
                <div className="home__bottom-wrapper">
                    <img className='home__signature' src={signature}/>
                    <Link to='/register-process' className='btn lightyellow-btn home__btn'>ENTER SITE</Link>
                </div>
            </section>
        </main>
    )
}

export default Home