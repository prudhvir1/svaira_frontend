/* eslint-disable react/prop-types */
// import { useState } from "react";
import "./styles/TextOptionButton.css";

function TextOptionButton({ option, onClick, hasVoted }) {
  // const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="TextOptionButton" onClick={() => onClick(option._id)}>
      <div
        className="TextOptionButton-Background"
        style={{ width: `${hasVoted ? option.percent : "0"}%` }}
      ></div>
      <div className="TextOptionButton-Container">
        <p
          style={{ justifyContent: `${hasVoted ? "space-between" : "center"}` }}
        >
          {option?.text}
          {hasVoted && <span>{option?.percent}%</span>}
        </p>
      </div>
    </div>
  );
}

export default TextOptionButton;
