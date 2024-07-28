/* eslint-disable react/prop-types */
import "./styles/AddOptionButton.css";

function AddOptionButton({ onClick }) {
  return (
    <div className="AddOption" onClick={onClick}>
      <div className="AddOption-Container">
        <div className="AddOptionImage">
          <button>
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
        </div>
        <div className="AddOptionText">
          <p type="text" name="text">
            Add Option
          </p>
        </div>
      </div>
      <button className="AddOption-Button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
          ></path>
        </svg>
      </button>
    </div>
  );
}
export default AddOptionButton;
