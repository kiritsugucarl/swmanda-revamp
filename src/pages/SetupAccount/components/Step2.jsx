import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Step2Schema } from "../validation";

const Step2 = ({prevStep, setFormData, formData}) => {
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(Step2Schema),
        defaultValues: formData
    });

    const onSubmit = (data) => {
        console.log(data);
        setFormData(data);
        navigate('/register-success');
    };

    const onPrev = () => {
        prevStep();
    };

    const [maritalStatus, setMaritalStatus] = useState('');
    const [siblings, setSiblings] = useState(['']);
    const [children, setChildren] = useState(['']);

    const addSiblingsField = () => {
        setSiblings([...siblings, '']);
    };

    const addChildrenField = () => {
        setChildren([...children, '']);
    };

    const deleteSiblingField = (index) => {
        setSiblings(siblings.filter((_, i) => i !== index));
    };

    const deleteChildrenField = (index) => {
        setChildren(children.filter((_, i) => i !== index));
    };

    const renderSiblingFields = () => {
        return siblings.map((value, index) => (
            <div key={index} className="input-field setup__field">
                <label className="input-label">Sibling {index + 1}</label>
                <div className="setup__extra-button-wrapper">
                <input className="input" id={`siblings-${index}`} type='text' {...register(`siblings[${index}]`)} />
                {errors.siblings?.[index] && (
                    <div className="error-message">{errors.siblings[index].message}</div>
                )}
                    <button className="btn darkred-btn setup__del-btn" onClick={() => deleteSiblingField(index)}>Delete</button>
                </div>
            </div>
        ))
    }

    const renderChildrenFields = () => {
        return children.map((value, index) => (
            <div key={index} className="input-field setup__field">
                <label className="input-label">Child {index + 1}</label>
                <div className="setup__extra-button-wrapper">
                    <input className="input" id={`children-${index}`} type='text' {...register(`children[${index}]`)} />
                    {errors.children?.[index] && (
                        <div className="error-message">{errors.children[index].message}</div>
                    )}
                    <button className="btn darkred-btn setup__del-btn" onClick={() => deleteChildrenField(index)}>Delete</button>
                </div>
            </div>
        ))
    }

    
    return(
        <div className="setup__form-wrapper">
            <form className="setup__form" onSubmit={handleSubmit(onSubmit)}>
                <h5 className="setup__title">Family Details</h5>
                <div className="setup__wrapper">
                    <div className="setup__column">
                        <div className="input-field setup__field">
                            <label className="input-label">Mother's Name:</label>
                            <input className="input" type='text' name='mothersName' {...register('mothersName')} />
                            {errors.mothersName && (
                                <div className="error-message">{errors.mothersName.message}</div>
                            )}
                        </div>
                        <div className="input-field setup__field">
                            <label className="input-label">Mother's Occupation:</label>
                            <input className="input" type='text' name='mothersOccupation' {...register('mothersOccupation')} />
                            {errors.mothersOccupation && (
                                <div className="error-message">{errors.mothersOccupation.message}</div>
                            )}
                        </div>
                        <div className="input-field setup__field">
                                <label className='input-label'>Mother's Birthday: </label>
                                <input className='input' type='date' name='mothersBirthday' {...register('mothersBirthday')} />
                                {errors.mothersBirthday && (
                                    <div className='error-message'>
                                        {errors.mothersBirthday.message}
                                    </div>
                                )}
                        </div>
                        <div className="input-field setup__field">
                            <label className="input-label">Father's Name:</label>
                            <input className="input" type='text' name='fathersName' {...register('fathersName')} />
                            {errors.fathersName && (
                                <div className="error-message">{errors.fathersName.message}</div>
                            )}
                        </div>
                        <div className="input-field setup__field">
                            <label className="input-label">Father's Occupation:</label>
                            <input className="input" type='text' name='fathersOccupation' {...register('fathersOccupation')} />
                            {errors.fathersOccupation && (
                                <div className="error-message">{errors.fathersOccupation.message}</div>
                            )}
                        </div>
                        <div className="input-field setup__field">
                                <label className='input-label'>Father's Birthday: </label>
                                <input className='input' type='date' name='fathersBirthday' {...register('fathersBirthday')} />
                                {errors.fathersBirthday && (
                                    <div className='error-message'>
                                        {errors.fathersBirthday.message}
                                    </div>
                                )}
                        </div>
                        <div className="input-field extra-field setup__field">
                            <label className="input-label">Siblings: </label>
                            {renderSiblingFields()}
                            <div className="setup__extra-button-wrapper">
                                <button className="setup__add-btn btn lightyellow-btn" type="button" onClick={addSiblingsField}>Add Sibling</button>
                            </div>
                        </div>
                        <div className="input-field setup__field">
                            <label className="input-label">Marital Status:</label>
                            <select
                                className="input"
                                name="civilStatus"
                                {...register('civilStatus')}
                                onChange={(e) => {
                                    setMaritalStatus(e.target.value);
                                }}>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="widowed">Widowed</option>
                            </select>
                            {errors.civilStatus && (
                                <div className="error-message">{errors.civilStatus.message}</div>
                            )}
                        </div>
                    </div>
                    {
                        maritalStatus === 'married' && (
                            <div className="setup__column">
                                <div className="input-field setup__field">
                                    <label className="input-label">Spouse's Name:</label>
                                    <input className="input" type='text' name='spouseName' {...register('spouseName')} />
                                    {errors.spouseName && (
                                        <div className="error-message">{errors.spouseName.message}</div>
                                    )}
                                </div>
                                <div className="input-field setup__field">
                                    <label className="input-label">Spouse's Occupation:</label>
                                    <input className="input" type='text' name='spouseOccupation' {...register('spouseOccupation')} />
                                    {errors.spouseOccupation && (
                                        <div className="error-message">{errors.mothersOccspouse.message}</div>
                                    )}
                                </div>
                                <div className="input-field setup__field">
                                        <label className='input-label'>Spouse's Birthday: </label>
                                        <input className='input' type='date' name='spouseBirthday' {...register('spouseBirthday')} />
                                        {errors.spouseBirthday && (
                                            <div className='error-message'>
                                                {errors.spouseBirthday.message}
                                            </div>
                                        )}
                                </div>
                                <div className="input-field extra-field setup__field">
                                    <label className="input-label">Children: </label>
                                    {renderChildrenFields()}
                                    <div className="setup__extra-button-wrapper">
                                        <button className="setup__add-btn btn lightyellow-btn" type="button" onClick={addChildrenField}>Add Children</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="setup__step2-button-wrapper">
                    <button className="btn lightyellow-btn setup__btn" onClick={onPrev}>Back</button>
                    <button className="btn darkred-btn setup__btn" type="submit">Proceed</button>
                </div>
            </form>
        </div>
    )
}

export default Step2