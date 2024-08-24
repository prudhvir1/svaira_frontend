/* eslint-disable react/prop-types */
import "./styles/OptionImageSlider.css";
import { ImageOptionButton } from "../atoms";
import { useState } from "react";

function OptionImageSlider({ options, onClick, hasVoted }) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="OptionImageSlider">
      <div className="OptionImageSlider-Container">
        {options.map((option, index) => (
          <ImageOptionButton
            key={option.text}
            option={option}
            onClick={onClick}
            imageIndex={imageIndex}
            hasVoted={hasVoted}
          />
        ))}
      </div>
    </div>
  );
}
export default OptionImageSlider;
