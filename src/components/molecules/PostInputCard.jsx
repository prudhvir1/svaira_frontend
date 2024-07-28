/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./styles/PostInputCard.css";
import { useEffect, useRef, useState } from "react";

function PostInputCard({ post, isPostError, setIsPostError }) {
  const imageRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef("");

  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [filePreview, setFilePreview] = useState(null);

  const handleFileInput = () => {
    const image = imageRef.current.files[0];
    setFile(image);
    setFilePreview(URL.createObjectURL(image));
    post.image = image;
  };

  const handleTextInput = () => {
    if (textRef.current.value.trim().length < 175) {
      setIsPostError(false);
      setText(textRef.current.value);
      post.text = textRef.current.value;
    }

    if (textRef.current.value.trim().length < 4) setIsPostError(true);
  };

  useEffect(() => {
    textRef.current.focus();
  }, []);

  return (
    <div className="PostInputCard">
      {filePreview ? (
        <div className="FilePreview">
          <div className="FileRemove-Button">
            <button
              type="button"
              onClick={() => {
                setFilePreview(null);
                setFile(null);
                post.image = null;
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
        <div className="PostInputCard-Menu">
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
          <div className="PostVideo">
            <input
              type="file"
              name="post"
              ref={videoRef}
              id="post"
              accept="video/mp4, video/mpeg, video/mkv, video/avi"
              style={{ display: "none" }}
              onChange={handleFileInput}
            />
            <button onClick={() => videoRef.current.click()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9.451 3.25h.098c1.602 0 2.872 0 3.876.119c1.03.122 1.88.377 2.588.96c.24.197.461.417.659.658c.582.709.837 1.557.96 2.588c.027.232.048.478.064.739c.786-.392 1.452-.714 2.007-.896c.652-.213 1.343-.299 1.98.095s.87 1.05.97 1.728c.097.655.097 1.516.097 2.551v.416c0 1.035 0 1.896-.097 2.55c-.1.679-.333 1.335-.97 1.729c-.637.394-1.328.308-1.98.095c-.555-.182-1.221-.504-2.007-.896c-.016.261-.037.507-.065.739c-.122 1.03-.377 1.88-.96 2.588c-.197.24-.417.461-.658.659c-.709.582-1.557.837-2.588.96c-1.005.118-2.274.118-3.876.118H9.45c-1.602 0-2.872 0-3.876-.119c-1.03-.122-1.88-.377-2.588-.96a4.751 4.751 0 0 1-.659-.658c-.582-.709-.837-1.557-.96-2.588c-.118-1.005-.118-2.274-.118-3.876V11.45c0-1.602 0-2.872.119-3.876c.122-1.03.377-1.88.96-2.588a4.75 4.75 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 3.25 7.85 3.25 9.451 3.25m6.799 9.25v-1c0-1.662-.001-2.843-.108-3.749c-.105-.889-.304-1.415-.63-1.813a3.256 3.256 0 0 0-.45-.45c-.398-.326-.924-.525-1.813-.63c-.906-.107-2.087-.108-3.749-.108s-2.843.001-3.749.108c-.889.105-1.415.304-1.813.63a3.25 3.25 0 0 0-.45.45c-.326.398-.525.924-.63 1.813c-.107.906-.108 2.087-.108 3.749v1c0 1.662.001 2.843.108 3.749c.105.889.304 1.415.63 1.813a3.3 3.3 0 0 0 .45.45c.398.326.924.525 1.813.63c.906.107 2.087.108 3.749.108s2.843-.001 3.749-.108c.889-.105 1.415-.304 1.813-.63a3.3 3.3 0 0 0 .45-.45c.326-.398.525-.924.63-1.813c.107-.906.108-2.087.108-3.749m1.5 1.537l.244.121c.995.498 1.666.831 2.176.998c.499.163.65.1.724.055c.074-.046.198-.153.275-.673c.079-.53.081-1.28.081-2.392v-.292c0-1.113-.002-1.862-.08-2.392c-.078-.52-.202-.627-.276-.673c-.074-.046-.225-.108-.724.055c-.51.167-1.18.5-2.176.998l-.244.122v2.67z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
      <div className="PostInputCard-Main">
        <div
          className="PostInputText"
          style={{ border: isPostError && "2px solid red" }}
        >
          <textarea
            type="text"
            name="postText"
            value={text}
            ref={textRef}
            placeholder="Ask your question..."
            onChange={handleTextInput}
          />
        </div>
      </div>
    </div>
  );
}
export default PostInputCard;
