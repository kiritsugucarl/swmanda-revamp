import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from '../../data/data.json';
import AssistanceData from '../../data/assistanceData.json';
import './AssistanceDetails.css';

const AssistanceDetails = () => {
    const { id } = useParams();
    const assistanceData = AssistanceData.find(
        (data) => data.id === parseInt(id)
    )

    return(
        <main className="main container">
            <section className="main__section hero-section section">
                <h1 className="hero__header-with-user">WELCOME</h1>
                <h5 className="hero__header-user">{data.name}</h5>
            </section>
            <section className="main__section content-section section">
                <div className="assistanceDetails__wrapper">
                    <h5 className="assistanceDetails__header">{assistanceData.name}</h5>
                    <div className="assistanceDetails__details">
                        <p className="assistanceDetails__description">
                            {assistanceData.description}
                        </p>
                    </div>
                    <div className="assistanceDetails__requirements">
                        <h6 className="assistanceDetails__requirements-title">
                            Requirements:
                        </h6>
                        <ul className="assistanceDetails__list">
                            {assistanceData.requirements.map((requirement, index) => (
                                <li key={index} className='assistanceDetails__list-item'>{requirement}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="assistanceDetails__button-wrapper">
                    <Link to='/assistance' className="btn darkred-btn assistanceDetails__button">BACK</Link>
                    <Link to={`/assistance-application/${assistanceData.id}`} className='btn lightyellow-btn assistanceDetails__button'>
                        APPLY
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default AssistanceDetails;