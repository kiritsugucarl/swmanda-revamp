import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from '../../data/data.json'
import AssistanceData from '../../data/assistanceData.json'
import './AssistanceSuccess.css'

const AssistanceSuccess = () => {
    const { id } = useParams();
    const assistanceData = AssistanceData.find(
        (data) => data.id === parseInt(id)
    )

    const CurrentDate = () =>{
        const currentDate = new Date();
        const formattedDate = currentDate.toDateString();

        return <p className="assistanceSuccess__text"> <span className="assistanceSuccess__title-p" >DATE RECEIVED : </span> <span className="assistanceSuccess__p"> {formattedDate} </span></p>
    }
    
    return(
        <main className="main container">
            <section className="main__section hero-section section">
                <h1 className="hero__header-with-user">WELCOME</h1>
                <h5 className="hero__header-user">{data.name}</h5>
            </section>
            <section className="main__section content-section section">
                <div className="assistanceSuccess__wrapper">
                    <h5 className="assistanceSuccess__header">ASSISTANCE APPLIED</h5>
                    <div className="assistanceSuccess__details">
                        <p className="assistanceSuccess__text">
                            <span className="assistanceSuccess__title-p">Assistance: </span>
                            <span className="assistanceSuccess__p">{assistanceData.name}</span>
                        </p>
                        <p className="assistanceSuccess__text">
                            <span className="assistanceSuccess__title-p">Application Number: </span>
                            <span className="assistanceSuccess__p">Number goes here</span>
                        </p>
                        <CurrentDate/>
                        <p className="assistanceSuccess__text">
                            <span className="assistanceSuccess__title-p">Status: </span>
                            <span className="assistanceSuccess__p">For Validation</span>
                        </p>
                    </div>
                    <div className="assistanceSuccess__notice">
                        <p className="assistanceSuccess__notice-p">
                        For claiming, you will receive a TEXT message for the schedule and the venue of your claiming
                        </p>
                    </div>
                    <div className="assistanceSuccess__button-wrapper">
                        <Link to='/assistance' className="btn darkyellow-btn assistanceSuccess__btn">BACK TO ASSISTANCE</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AssistanceSuccess