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

        </div>
    )
}
export default Step1