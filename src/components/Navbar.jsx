import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className='nav fullwidth'>
            <ul className='nav__ul'>
                <li className='nav__li'>
                    <Link to="/" className='nav__link btn'>
                        Home
                    </Link>
                </li>
                <li className='nav__li'>
                    <Link to="/profile" className='nav__link btn'>
                        Profile
                    </Link>
                </li>
                <li className='nav__li'>
                    <Link to="/assistance" className='nav__link btn'>
                        Assistance
                    </Link>
                </li>
                <li className='nav__li'>
                    <Link to="/my-assistance" className='nav__link btn'>
                        My Assistance
                    </Link>
                </li>
                <li className='nav__li'>
                    <Link to="/login" className='nav__link btn'>
                        LOGIN
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar