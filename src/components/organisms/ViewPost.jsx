/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./styles/ViewPost.css";
import { ModalCloseButton } from "../atoms";
import { useNavigate, useParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import {
  useAddCommentMutation,
  useGetPostByIdMutation,
} from "../../redux/api/postApiSlice";
import { useSelector } from "react-redux";
import { getProfile } from "../../redux/slices/profileSlice.js";

function ViewPost() {
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState();

  const [getPostById, { isLoading, isSuccess, isError }] =
    useGetPostByIdMutation();

  const [addComments] = useAddCommentMutation();

  const handleAddComment = async (comment) => {
    const res = await addComments({ post: post._id, comment }).unwrap();
    setPost(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const res = await getPostById(params.post).unwrap();
      setPost(res.data);
    };

    fetchPost();

    return () => {};
  }, []);

  return (
    <div className="ViewPost">
      <div className="ViewPost-Container">
        {isLoading && <p>Loading...</p>}
        {isSuccess && (
          <>
            <div className="ViewPost-Content">
              <PostBackground post={post} />
              <div className="ViewPost-Content-Foreground">
                <ViewPostLeft post={post} />
                <ViewPostRight post={post} onClick={handleAddComment} />
              </div>
            </div>
          </>
        )}
        {isError && <p>Something went wrong.</p>}

        <div className="Close-Button">
          <ModalCloseButton onClick={() => navigate(-1)} />
        </div>
      </div>
    </div>
  );
}

const ViewPostLeft = ({ post }) => {
  console.log(post);
  return (
    <div className="ViewPost-Left">
      <div className="ViewPost-Left-Container">
        <div className="ViewPost-Left-Header">
          <div className="ViewPost-Left-Header-Left">
            <div className="ViewPost-Left-Header-Avatar">
              <img
                src={post?.postedBy.avatar.url}
                alt={post?.postedBy.avatar.filename}
              />
            </div>
            <div className="ViewPost-Left-Header-Username">
              <p>{post?.postedBy.username}</p>
            </div>
          </div>
          <div className="ViewPost-Left-Header-Right">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="ViewPost-Left-Post">
          {post?.image && (
            <div className="ViewPost-Left-Image">
              <img src={post.image.url} alt={post.image.filename} />
            </div>
          )}
          <div className="ViewPost-Left-Text">
            <p>{post?.text}</p>
          </div>
        </div>
        <div className="ViewPost-Left-Options">
          {post?.options.map((option) => (
            <ViewPostOption
              key={option._id}
              option={option}
              hasVoted={post.hasVoted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ViewPostRight = ({ post, onClick }) => {
  const [comment, setComment] = useState("");
  const commentRef = useRef();
  const { profile } = useSelector(getProfile);

  const handleCommentChange = () => {
    setComment(commentRef.current.value);
  };

  return (
    <div className="ViewPost-Right">
      <div className="ViewPost-Right-Container">
        <div className="ViewPost-Right-Comment-Input">
          <div className="ViewPost-Right-Comment-Input-User">
            <img src={profile.avatar.url} alt={profile.username} />
          </div>
          <textarea
            type="text"
            placeholder="Any thoughts..."
            ref={commentRef}
            value={comment}
            onChange={handleCommentChange}
          />
          <div
            className="PostCard-Right-Comment-Input-Send"
            onClick={() => {
              onClick(commentRef.current.value);
              setComment("");
            }}
          >
            {comment && <SendIcon />}
          </div>
        </div>
        <hr />
        <div className="ViewPost-Right-Comments">
          <div className="ViewPost-Right-Comments-Container">
            {post?.comments.map((comment) => (
              <ViewPostComment key={comment._id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ViewPostOption = ({ option, hasVoted }) => {
  return (
    <div className="ViewPostOption">
      <div
        className="ViewPostOption-Background"
        style={{ width: `${hasVoted ? option.percent : "0"}%` }}
      ></div>
      <div className="ViewPostOption-Container">
        <p
          style={{ justifyContent: `${hasVoted ? "space-between" : "center"}` }}
        >
          {option?.text}
          {hasVoted && <span>{option?.percent}%</span>}
        </p>
      </div>
    </div>
  );
};

const ViewPostComment = ({ comment }) => {
  return (
    <div className="ViewPost-Comment">
      <div className="ViewPost-Comment-Avatar">
        <img
          src={comment?.commentedBy.avatar.url}
          alt={comment?.commentedBy.username}
        />
      </div>
      <div className="ViewPost-Comment-Text">
        <h6>{comment?.commentedBy.username}</h6>
        <p>{comment.comment} </p>
      </div>
    </div>
  );
};

function SendIcon() {
  return (
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
  );
}

function PostBackground({ post }) {
  const [bgColor, setBgColor] = useState();
  getDominantColor(post?.postedBy.avatar.url).then((res) => setBgColor(res));

  return post?.image ? (
    <img src={post?.image.url} alt={post?.image.filename} />
  ) : (
    <div className="PostCard-Background" style={{ background: bgColor }}></div>
  );
}

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

export default ViewPost;
