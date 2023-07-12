import logo from '/logo.png'
import './Header.css'

const Header = () => {
    return(
        <header className='header fullwidth'>
            <img src={logo} className="header__img" alt='Logo' />
            <div className="header__page-title">
                <h2 className='header__double-liner'>HON. NEPTALI M. GONZALES II</h2>
                <h6>LONE DISTRICT, CITY OF MANDALUYONG</h6>
            </div>
            <div className="header__page-title">
                <h1 className='header__double-liner'>SOCIAL ASSISTANCE PROGRAM</h1>
            </div>
        </header>
    )
}

export default Header