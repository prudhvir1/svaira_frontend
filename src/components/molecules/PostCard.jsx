/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles/PostCard.css";
import { TextOptionButton, ImageOptionButton } from "../atoms";
import { useDispatch } from "react-redux";
import { viewPostModal } from "../../redux/slices/modalSlice";
import { useNavigate } from "react-router";

function PostCard({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleViewPost = () => {
    dispatch(viewPostModal({ value: true, post }));
    // navigate(`/Post/${post.ids}`);
  };

  return (
    <article className="PostCard">
      <PostBackground post={post} />
      <div className="PostCard-Container">
        <div className="PostCard-Header">
          <PostCardHeader postedBy={post.postedBy} />
        </div>
        <div className="PostCard-Content">
          <PostCardContentMain
            imageObj={post?.image}
            text={post.text}
            viewPost={handleViewPost}
          />
          <PostCardContentOptions options={post.options} />
          {/* <PostCardResponses /> */}
        </div>
        <div className="PostCard-Footer">
          <PostCardFooter viewPost={handleViewPost} />
        </div>
      </div>
    </article>
  );
}

function PostBackground({ post }) {
  const [bgColor, setBgColor] = useState();
  getDominantColor(post.postedBy.avatar.url).then((res) => setBgColor(res));

  return post.image ? (
    <img src={post.image.url} alt={post.image.filename} />
  ) : (
    <div className="PostCard-Background" style={{ background: bgColor }}></div>
  );
}

function PostCardHeader({ postedBy }) {
  return (
    <>
      <div className="PostCard-Header-Main">
        <div className="PostCard-Header-Avatar">
          <img src={postedBy.avatar.url} alt={postedBy.avatar.filename} />
        </div>
        <div className="PostCard-Header-Username">
          <h4>{postedBy.fullname}</h4>
          <p>/{postedBy.username}</p>
        </div>
      </div>
      <div className="PostCard-Header-MenuIcon"></div>
    </>
  );
}

function PostCardContentMain({ imageObj, text, viewPost }) {
  return (
    <div className="PostCard-Content-Main">
      {imageObj && (
        <div className="PostCard-Content-Main-Image">
          <img src={imageObj.url} alt={imageObj.filename} />
        </div>
      )}
      <div className="PostCard-Content-Main-Text" onClick={viewPost}>
        <p>{text}</p>
      </div>
    </div>
  );
}

function PostCardContentOptions({ options }) {
  return (
    <div className="PostCard-Content-Options">
      {options[0].image ? (
        <div className="PostCard-Content-Options-Image">
          {options.map((option) => (
            <ImageOptionButton key={option.text} option={option} />
          ))}
        </div>
      ) : (
        <div className="PostCard-Content-Options-Text">
          {options.map((option) => (
            <TextOptionButton key={option.text} option={option} />
          ))}
        </div>
      )}
    </div>
  );
}

function PostCardResponses() {
  return (
    <div className="PostCard-Footer-Responses">
      <div className="PostCard-Footer-Responses-Count">5K responses</div>
      <div className="PostCard-Footer-Responses-RemoveBtn">remove</div>
    </div>
  );
}

function PostCardFooter({ viewPost }) {
  return (
    <>
      <div className="PostCard-Footer-Comment">
        <div className="PostCard-Footer-Comment-Input">
          <textarea type="text" placeholder="Any thoughts..." />
          <div className="PostCard-Footer-Comment-Input-Send">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.987 2.953a2.546 2.546 0 0 1 2.816-.473l16.51 7.363a2.338 2.338 0 0 1 0 4.315L4.802 21.52a2.546 2.546 0 0 1-2.816-.473c-.69-.659-1.009-1.735-.458-2.767l3.152-5.904l.662.354l-.662-.354a.789.789 0 0 0 0-.752L1.53 5.72c-.55-1.031-.232-2.108.458-2.767m1.036 1.085c-.274.262-.36.62-.17.976l-.662.353l.661-.353l3.153 5.904c.363.68.363 1.485 0 2.165l-3.153 5.904c-.19.356-.103.714.171.976c.28.267.72.387 1.169.187l16.51-7.362c.73-.326.73-1.25 0-1.575L4.192 3.85a1.047 1.047 0 0 0-1.169.188"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div className="PostCard-Footer-Comment-ViewButton">
          <button onClick={viewPost}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M176 108a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h68a12 12 0 0 1 12 12m-12 28H96a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m72-12a104.11 104.11 0 0 1-104 104H48a20 20 0 0 1-20-20v-84a104 104 0 0 1 208 0m-24 0a80 80 0 0 0-160 0v80h80a80.09 80.09 0 0 0 80-80"
              ></path>
            </svg>
            286 comments
          </button>
        </div>
      </div>
      <div className="PostCard-Footer-Share">
        <div className="PostCard-Footer-Share-Button">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11 2.05v2.012A8.001 8.001 0 0 0 12 20a8 8 0 0 0 7.938-7h2.013c-.502 5.053-4.766 9-9.951 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95m9 3.364l-8 8L10.586 12l8-8H14V2h8v8h-2z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="PostCard-Footer-Share-Count">
          <p>123</p>
        </div>
      </div>
    </>
  );
}

export default PostCard;

function getDominantColor(imageSrc) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // For cross-origin images
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let r = 0,
        g = 0,
        b = 0;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }

      const avgColor = {
        r: Math.floor(r / (data.length / 4)),
        g: Math.floor(g / (data.length / 4)),
        b: Math.floor(b / (data.length / 4)),
      };

      const hexColor =
        "#" +
        ((1 << 24) + (avgColor.r << 16) + (avgColor.g << 8) + avgColor.b)
          .toString(16)
          .slice(1);
      resolve(hexColor);
      // return hexColor;
    };
    img.onerror = reject;
    img.src = imageSrc;
  });
}
