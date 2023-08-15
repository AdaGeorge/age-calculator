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
      {label && (
        <label
          className={`${
            errors[label] ? "err-label input-label" : "input-label"
          }`}
        >
          {label}
        </label>
      )}
      <input
        className={`${errors[label] && "err-input"}`}
        type="text"
        placeholder={placeholder}
        //if there's no pattern or max it's undefined
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
