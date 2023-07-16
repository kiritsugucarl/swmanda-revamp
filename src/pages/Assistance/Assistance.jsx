import { Link } from "react-router-dom";
import data from '../../data/data.json'
import AssistanceData from '../../data/assistanceData.json'
import './Assistance.css'

function AssistanceCard({id, name, description, backgroundColor}) {
    const cardStyle ={
        backgroundColor: backgroundColor
    }

    const descriptionStyle = {
        display: '-webkit-box',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }

    return(
        <div className="assistance__card" style={cardStyle} key={name}>
            <h5 className="card-title">{name}</h5>
            <p style={descriptionStyle} className="card-details">{description}</p>
            <Link className="assistance-link" to={`/assistance/${id}`}>VIEW INFORMATION</Link>
        </div>
    )
}

const Assistance = () => {
    const assistanceDataCounter = AssistanceData;
    const rowCounter = Math.ceil(assistanceDataCounter.length / 3);

    const gridContainerStyle = {
        gridTemplateRows: `repeat(${rowCounter}, 1fr)`,
    }

    return(
        <main className="main container">
            <section className="main__section hero-section section">
                <h1 className="hero__header-with-user">WELCOME</h1>
                <h5 className="hero__header-user">{data.name}</h5>
            </section>
            <section className="main__section content-section section">
                <div className="assistance__wrapper" style={gridContainerStyle}>
                        {AssistanceData.map((assistanceData) => (
                        <AssistanceCard
                            key={assistanceData.id}
                            id={assistanceData.id}
                            name={assistanceData.name}
                            description={assistanceData.description}
                            backgroundColor={assistanceData.backgroundColor}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Assistance;