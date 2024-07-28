/* eslint-disable react/prop-types */
import "./styles/ImageOptionButton.css";

function ImageOptionButton({ option }) {
  return (
    <div className="ImageOptionButton">
      <div className="ImageOptionButton-Container">
        <div className="ImageOptionButton-Image">
          <img src={option.image.url} alt={option.image.filename} />
        </div>
        <div className="ImageOptionButton-Text">
          <p>{option.text}</p>
        </div>
      </div>
    </div>
  );
}
export default ImageOptionButton;
