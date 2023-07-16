import { useForm } from "react-hook-form"
import { useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { Step1Schema } from '../validation'
import locationData from '../../../data/locationData.json'

const Step1 = ({nextStep, setFormData, formData, uploadedFile}) =>{
    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(Step1Schema),
        defaultValues: formData
    });

    const onSubmit = (data) => {
        console.log(data);
        setFormData(data);
        nextStep();
    };

    const [selectedCity, setSelectedCity] = useState('');
    const [barangays, setBarangays] = useState([]);

    const handleCityChange = (event) => {
        const city = event.target.value;

        setSelectedCity(city);

        const selectedCityData = locationData.cities.find((c) => c.name === city);

        const barangayData = selectedCityData ? selectedCityData.barangays : [];
        console.log(barangayData);

        setBarangays(barangayData);
    }
    
    return(
        <div className="setup__form-wrapper">
            <form className="setup__form" onSubmit={handleSubmit(onSubmit)}>
                <h5 className="setup__title">Personal Details</h5>
                <div className="setup__wrapper">
                    <div className="setup__column">
                        <div className="input-field setup__field">
                            <label className="input-label">Gender: </label>
                            <select className="input" name="gender" {...register('gender')}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {errors.gender && (
                                <div className="error-message">{errors.gender.message}</div>
                            )}
                        </div>
                        <div className="input-field setup__field">
                            <label className='input-label'>Place Of Birth: </label>
                            <input className='input' type='text' name='birthPlace' {...register('birthPlace')} />
                            {errors.birthPlace && (
                                <div className='error-message'>
                                    {errors.birthPlace.message}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="setup__column">
                        <div className="input-field setup__field">
                            <label className='input-label'>Nationality: </label>
                            <input className='input' type='text' name='nationality' {...register('nationality')} />
                            {errors.nationality && (
                                <div className='error-message'>
                                    {errors.nationality.message}
                                </div>
                            )}
                        </div>
                        <div className="input-field setup__field">
                            <label className="input-label">Government-issued ID: </label>
                            <input className="input" type="file" name="governmentID" {...register('governmentID')} />
                            {uploadedFile && <span>{uploadedFile}</span>}
                            {errors.governmentID && (
                                <div className="error-message">
                                    {errors.governmentID.message}
                                </div>
                                )}
                        </div>
                    </div>
                </div>
                <h5 className="setup__title">Address</h5>
                <div className="setup__wrapper">
                    <div className="setup__column">
                        <div className="input-field setup__field">
                            <label className="input-label">Municipality / City:</label>
                            <select
                                className="input setup__input"
                                name="municipality"
                                {...register('municipality')}
                                onChange={handleCityChange}>
                                <option value="">Select City</option>

                                {locationData.cities.map((city) => (
                                    <option key={city.name} value={city.name}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                            {errors && errors.municipality && (
                                    <div className="error-message">{errors.municipality.message}</div>
                            )}
                        </div>
                        <div className="input-field setup__field">
                            <label className="input-label">Barangay:</label>
                            <select className="input setup__input" name="barangay" disabled={!selectedCity} {...register('barangay')}>
                                <option value="">Select Barangay</option>
                                {barangays.map((barangay) => (
                                    <option key={barangay} value={barangay}>
                                        {barangay}
                                    </option>
                                ))}
                            </select>
                            {errors && errors.barangay && (
                                <div className="error-message">{errors.barangay.message}</div>
                            )}
                        </div>
                        <div className="input-field setup__field">
                            <label className="input-label">Unit No.</label>
                            <input className='input setup__input' type='text' name='unitNum' {...register('unitNum')} />
                            {errors.unitNum && (
                                <div className='error-message'>
                                    {errors.unitNum.message}
                                </div>
                            )}
                        </div>
                        <div className="input-field setup__field">
                            <label className="input-label">House No.</label>
                            <input className='input setup__input' type='text' name='houseNum' {...register('houseNum')} />
                            {errors.houseNum && (
                                <div className='error-message'>
                                    {errors.houseNum.message}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="setup__column">
                        <div className="input-field setup__field">
                            <label className="input-label">Street Name:</label>
                            <input className='input setup__input' type='text' name='streetName' {...register('streetName')} />
                            {errors.streetName && (
                                <div className='error-message'>
                                    {errors.streetName.message}
                                </div>
                            )}
                        </div>
                        <div className="input-field setup__field">
                            <label className="input-label">Block:</label>
                            <input className='input setup__input' type='text' name='block    ' {...register('block   ')} />
                            {errors.block    && (
                                <div className='error-message'>
                                    {errors.block   .message}
                                </div>
                            )}
                        </div>
                        <div className="input-field setup__field">
                            <label className="input-label">Building:</label>
                            <input className='input setup__input' type='text' name='building' {...register('building')} />
                            {errors.building && (
                                <div className='error-message'>
                                    {errors.building.message}
                                </div>
                            )}
                        </div>
                        <div className="input-field setup__field">
                            <label className="input-label">Zip Code:</label>
                            <input className='input setup__input' type='text' name='zipCode' {...register('zipCode')} />
                            {errors.zipCode && (
                                <div className='error-message'>
                                    {errors.zipCode.message}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="setup__button-wrapper">
                    <button className="btn lightyellow-btn setup__btn">Proceed</button>
                </div>
            </form>
        </div>
    )
}
export default Step1