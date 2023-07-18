import QrScanner from 'qr-scanner';
import { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
import '../QRCodeScanner/QRCodeScanner.css';

const QRCodeScanner = () => {
    const [scannedData, setScannedData] = useState(null);
    const [file, setFile] = useState(null);
    const [disableScanner, setDisableScanner] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (scannedData) {
            navigate('/status', { state: { result: scannedData } });
            setDisableScanner(true);
            console.log('Scanned Data:', scannedData);
        }
    }, [scannedData, navigate]);

    const handleScan = (data) => {
        if (data) {
            const scannedText = typeof data === 'string' ? data : data.text;
            setScannedData(scannedText);
        }
    };

    const handleError = (error) => {
        console.error(error);
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        setFile(file);
        const result = await QrScanner.scanImage(file);
        console.log(result);
        setScannedData(result);
    };

    return (
        <div className="scanner-container">
            <h1>SCAN YOUR QR CODE</h1>

            <div className="scanner">
                {!disableScanner && (
                    <QrReader
                        delay={300}
                        onError={handleError}
                        onResult={handleScan}
                        legacyMode={disableScanner}
                    />
                )}
                <div className="scanner-frame"></div>
            </div>

            <div className="file-upload">
                <label htmlFor="file-input" className="file-input-label">
                    Upload QR Code Image
                </label>
                <input id="file-input" type="file" accept="image/*" onChange={handleFileUpload} />
                {file && <div>Selected File: {file.name}</div>}
            </div>
        </div>
    );
};

export default QRCodeScanner;
