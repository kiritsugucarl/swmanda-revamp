import { Outlet } from 'react-router-dom';

import Header from '../.././components/Header'
import Navbar from '../.././components/Navbar';
import Footer from '../.././components/Footer';

const Root = () => {
    return (
        <div className=''>
            <Header />
            <Navbar />

            <Outlet />

            <Footer />
        </div>
    )
}

export default Root;