import React from "react";

const CustomRadioField = ({ classLabel, options, handleChange, value, name, error }) => {
  return (
    <>
      {options.map((option, index) => (
        <span key={index}>
          <label htmlFor={option.id} className={classLabel}>
            {option.label}
          </label>
          <input
            type="radio"
            name={name}
            value={option.value}
            id={option.id}
            onChange={handleChange}
            checked={value === option.value}
          />
        </span>
      ))}
      <p className="errorMessage">{error.status}</p>
      </>
  );
};

export default CustomRadioField;
