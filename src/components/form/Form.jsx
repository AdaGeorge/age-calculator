import React from "react";
//styles
import "./form.css";
//components
import Button from "../button/Button";
import Input from "../Input/Input";

const Form = () => {
  return (
    <form className="form-ages">
      <div className="date">
        <Input placeholder={"DD"} label={"DAY"} />
        <Input placeholder={"MM"} label={"MONTH"} />
        <Input placeholder={"YYYY"} label={"YEAR"} />
      </div>
      <Button />
    </form>
  );
};

export default Form;
