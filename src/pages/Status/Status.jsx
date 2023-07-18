import { useLocation } from 'react-router-dom';

function Status() {
    const location = useLocation();
    const result = location.state?.result;

    return (
        <div>
            <h2>Status</h2>
            {result && <p>Scanned Result: {result}</p>}
        </div>
    );
}

export default Status;
