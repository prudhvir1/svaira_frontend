/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "./styles/ProfileAvatarEditCard.css";

function ProfileAvatarEditCard({ avatar }) {
  const imageRef = useRef(null);

  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(avatar);

  const handleFileInput = () => {
    const image = imageRef.current.files[0];
    setFile(image);
    setFilePreview(URL.createObjectURL(image));
  };

  return (
    <div className="ProfileAvatarEditCard">
      {filePreview ? (
        <div className="FilePreview">
          <div className="FileRemove-Button">
            <button
              type="button"
              onClick={() => {
                setFilePreview(null);
                setFile(null);
                file.image = null;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 112H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16"
                ></path>
              </svg>
            </button>
          </div>
          <img src={filePreview} alt="Image" />
        </div>
      ) : (
        <div className="PostImage">
          <input
            type="file"
            name="post"
            ref={imageRef}
            id="post"
            accept="image/png, image/jpg, image/jpeg"
            style={{ display: "none" }}
            onChange={handleFileInput}
          />
          <button type="button" onClick={() => imageRef.current.click()}>
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
      )}
    </div>
  );
}
export default ProfileAvatarEditCard;
