import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import './AssistanceApplication.css'
import data from '../../data/data.json';
import AssistanceData from '../../data/assistanceData.json'

const AssistanceApplication = () => {
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
                <Link to={`/assistance-success/${assistanceData.id}`} className='btn darkyellow-btn application__link'>Submit Application</Link>
            </section>
        </main>
    )
}

export default AssistanceApplication