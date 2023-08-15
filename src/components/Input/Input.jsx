import React from "react";
import "./input.css";

const Input = ({
  label,
  placeholder,
  register,
  required,
  errors,
  pattern,
  ...otherProps
}) => {
  return (
    <div className="form-input">
      {label && <label className="input-label">{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        {...register(label, {
          required,
          pattern: pattern,
          max: otherProps.max,
        })}
        {...otherProps}
      />
      {errors[label] && (
        <div>
          {errors[label].type === "required" && (
            <div className="err-message">{`This field is ${errors[label].type}`}</div>
          )}
          <div className="err-message">{errors[label].message}</div>
        </div>
      )}
    </div>
  );
};

export default Input;
