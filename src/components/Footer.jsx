import facebookIcon from '/facebook-logo.png'
import './Footer.css'

const Footer = () => {
    return(
        <footer className="footer section fullwidth">
            <div className="footer__wrapper">
                <div className="footer__column">
                    Created for the Office of Hon. Neptali M. Gonzales II.<br/>
                    Created by Rizal Technological University - Boni Campus Team.<br/>
                    For inquiries, contact 0949 192 6132, or<br/>
                    email at cdbpineda@rtu.edu.ph
                </div>
                <div className="footer__column footer__tooltip">
                    Got questions? Head to the facebook page by clicking the icon <br/>
                    <i>(Kung may katanungan, maaaring magtungo sa facebook page, iclick lamang ang icon)</i>
                </div>
                <div className="footer__column">
                    <a className='footer__link' href="https://facebook.com/profile.php?id=100044400700424" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} className='footer__icon' />
                    </a>
                </div>
                <div className="footer__column">
                    Address : Office of Cong. Neptali M. Gonzales II 1550 <br/>
                    Email : neptali.gonzales@house.gov.ph <br/>
                    Landline : 285349907 <br/>
                    Facebook Page : Hon. Neptali "Boyet" Gonzales <br/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;