import React from "react";
import "./CreateTask.css";

const CustomInputField = ({
  type,
  label,
  id,
  classLabel,
  value,
  handleChange,
  name,
  error,
}) => {
  return (
    <>
      <label className={classLabel} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        id={id}
        autoComplete="off"
      />
      <p className="errorMessage">{error.title}</p>
    </>
  );
};

export default CustomInputField;
