/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "./styles/OptionInputCard.css";
function OptionInputCard({ index }) {
  const textRef = useRef();
  const imageRef = useRef();

  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const handleInputText = () => {
    if (textRef.current.value.length < 30) setText(textRef.current.value);
  };

  const handleInputImage = () => {
    const image = imageRef.current.files[0];
    setFile(image);
    setFilePreview(URL.createObjectURL(image));
  };

  return (
    <div className="OptionInputCard">
      <div className="OptionInputText">
        <textarea
          type="text"
          name="text"
          ref={textRef}
          value={text}
          placeholder={`Option ${index}`}
          onChange={handleInputText}
        />
      </div>
      <div className="OptionInputImage">
        <input
          type="file"
          name="image"
          ref={imageRef}
          style={{ display: "none" }}
          onChange={handleInputImage}
        />
        {filePreview ? (
          <img src={filePreview} alt="image" />
        ) : (
          <button onClick={() => imageRef.current.click()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                color="currentColor"
              >
                <circle cx="7.5" cy="7.5" r="1.5"></circle>
                <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></path>
                <path d="M5 21c4.372-5.225 9.274-12.116 16.498-7.458"></path>
              </g>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
export default OptionInputCard;
