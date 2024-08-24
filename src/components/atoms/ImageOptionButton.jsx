/* eslint-disable react/prop-types */
import "./styles/ImageOptionButton.css";

function ImageOptionButton({ option, onClick, imageIndex, hasVoted }) {
  return (
    <div
      className={`ImageOptionButton ${hasVoted && "disable"}`}
      style={{ translate: `${-100 * imageIndex}%` }}
    >
      <div
        className="ImageOptionButton-Container"
        onClick={() => onClick(option._id)}
      >
        <div className="ImageOptionButton-Image">
          <img src={option.image.url} alt={option.image.filename} />
        </div>
        <div
          className="TextOptionButton-Background"
          style={{ width: `${hasVoted ? option.percent : "0"}%` }}
        ></div>
        <div className="ImageOptionButton-Text">
          <p
            style={{
              justifyContent: `${hasVoted ? "space-between" : "center"}`,
            }}
          >
            {option?.text}
            {hasVoted && <span>{option?.percent}%</span>}
          </p>
        </div>
      </div>
    </div>
  );
}
export default ImageOptionButton;
