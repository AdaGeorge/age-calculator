import React from "react";
//styles
import "./form.css";
//components
import Button from "../button/Button";
import Input from "../Input/Input";
//form controller
import { useForm } from "react-hook-form";
//regex
import { DAY_REGEX, MONTH_REGEX, YEAR_REGEX } from "../../utils/regexFormat";

const Form = ({ setTime }) => {
  const CURRENT_YEAR = new Date().getFullYear();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validateDate = (date) => {
    const { DAY, MONTH, YEAR } = date;
    const monthDays = new Date(YEAR, MONTH, 0).getDate();

    //Validamos que el dia no sea mayor a los dias que tiene ese mes
    if (DAY > monthDays) {
      alert("This day does not exist");
      return false;
    }
    return true;
  };

  const calculateTime = (date) => {
    const dayInPast = new Date(date.YEAR, date.MONTH, date.DAY);
    const today = new Date();

    let timePast = today - dayInPast;

    const days = 86400000;
    const months = days * 30.416666666666668;
    const years = months * 12;

    const yearsPast = Math.floor(timePast / years);
    setTime((prevValue) => ({ ...prevValue, years: yearsPast }));
    timePast = timePast - yearsPast * years;
    const monthsPast = Math.floor(timePast / months);
    setTime((prevValue) => ({ ...prevValue, months: monthsPast }));
    timePast = timePast - monthsPast * months;
    const daysPast = Math.floor(timePast / days);
    setTime((prevValue) => ({ ...prevValue, days: daysPast }));
  };

  const submit = (data) => {
    if (validateDate(data)) {
      calculateTime(data);
    }
  };

  return (
    <form className="form-ages" onSubmit={handleSubmit(submit)}>
      <div className="date">
        <Input
          placeholder={"DD"}
          label={"DAY"}
          register={register}
          required
          errors={errors}
          pattern={{
            value: DAY_REGEX,
            message: "Must be a valid day",
          }}
        />
        <Input
          placeholder={"MM"}
          label={"MONTH"}
          register={register}
          required
          errors={errors}
          pattern={{
            value: MONTH_REGEX,
            message: "Must be a valid month",
          }}
        />
        <Input
          placeholder={"YYYY"}
          label={"YEAR"}
          register={register}
          errors={errors}
          required
          pattern={{
            value: YEAR_REGEX,
            message: "Must be a valid year",
          }}
          max={{
            value: CURRENT_YEAR,
            message: "Must be in the past",
          }}
        />
      </div>
      <Button />
    </form>
  );
};

export default Form;
