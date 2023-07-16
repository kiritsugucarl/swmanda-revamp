import { useState } from "react";
import registerImg from '../../assets/register.png'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import './SetupAccount.css'

const SetupAccount = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [uploadedFile] = useState('');

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    }

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    }

    const renderForm = () => {
        switch(step){
            case 1:
                return(
                    <Step1
                        nextStep = {nextStep}
                        setFormData = {setFormData}
                        formData = {formData}
                        uploadedFile = {uploadedFile}
                    />
                );
            case 2:
                return(
                    <Step2
                        prevStep = {prevStep}
                        setFormData = {setFormData}
                        formData = {formData}
                    />
                );
            default:
                return null;
        }
    };
    return(
        <main className="main container">
            <section className='main__section hero-section section'>
                <h1 className='hero__header setup__h1'>I-SETUP ANG ACCOUNT</h1>
                <img className='setup__img' src={registerImg} />
            </section>
            <section className="main__section content-section section">
                <div className="setup__form-wrapper">
                    {renderForm()}
                </div>
            </section>
        </main>
    )
}

export default SetupAccount