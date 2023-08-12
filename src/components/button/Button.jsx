import "./button.css";
import Arrow from "../../assets/icon-arrow.svg";

const Button = () => {
  return (
    <div className="btn-container">
      <button type="submit" className="btn">
        <img src={Arrow} alt="" />
      </button>
    </div>
  );
};

export default Button;
