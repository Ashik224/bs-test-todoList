import React from 'react'
import "../assets/css/TaskModal.css";

const CustomTextareaField = ({label, id, classLabel, name, value, handleChange, error}) => {
    return (
        <>
            <label htmlFor={id} className={classLabel}>{label}</label>
            <textarea id={id} name={name} value={value} onChange={handleChange}></textarea>
            <p className="errorMessage">{error.description}</p>
        </>
    )
}

export default CustomTextareaField
