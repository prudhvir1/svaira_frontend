/* eslint-disable react/prop-types */
import "./styles/TextOptionButton.css";

function TextOptionButton({ option }) {
  const handleOptionClick = () => {
    console.log(option._id);
  };
  return (
    <div className="TextOptionButton" onClick={handleOptionClick}>
      <div className="TextOptionButton-Container">{option.text}</div>
    </div>
  );
}
export default TextOptionButton;
