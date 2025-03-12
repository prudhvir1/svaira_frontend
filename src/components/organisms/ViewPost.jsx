/* eslint-disable react/prop-types */
import "./styles/ViewPost.css";
import { ModalCloseButton } from "../atoms";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import {
  useAddCommentMutation,
  useGetPostByIdMutation,
} from "../../redux/api/postApiSlice";
import { useSelector } from "react-redux";
import { getProfile } from "../../redux/slices/profileSlice.js";

function ViewPost() {
  const navigate = useNavigate();
  const { post: postId } = useParams();
  const [post, setPost] = useState(null);

  const [getPostById, { isLoading, isError }] = useGetPostByIdMutation();
  const [addComment] = useAddCommentMutation();

  useEffect(() => {
    (async () => {
      try {
        const res = await getPostById(postId).unwrap();
        setPost(res.data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    })();
  }, [postId, getPostById]);

  const handleAddComment = async (comment) => {
    if (!comment.trim()) return;

    try {
      const res = await addComment({ post: post._id, comment }).unwrap();
      setPost(res.data);
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  return (
    <div className="ViewPost">
      <div className="ViewPost-Container">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong.</p>}
        {post && (
          <div className="ViewPost-Content">
            <PostBackground post={post} />
            <div className="ViewPost-Content-Foreground">
              <ViewPostRight post={post} onAddComment={handleAddComment} />
            </div>
          </div>
        )}

        <div className="Close-Button">
          <ModalCloseButton onClick={() => navigate(-1)} />
        </div>
      </div>
    </div>
  );
}

const ViewPostRight = ({ post, onAddComment }) => {
  const [comment, setComment] = useState("");
  const { profile } = useSelector(getProfile);

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleCommentSubmit = () => {
    onAddComment(comment);
    setComment("");
  };

  return (
    <div className="ViewPost-Right">
      <div className="ViewPost-Right-Container">
        <div className="ViewPost-Right-Comment-Input">
          <img src={profile.avatar.url} alt={profile.username} />
          <textarea
            placeholder="Any thoughts..."
            value={comment}
            onChange={handleCommentChange}
          />
          {comment && (
            <button className="SendButton" onClick={handleCommentSubmit}>
              <SendIcon />
            </button>
          )}
        </div>
        <hr />
        <div className="ViewPost-Right-Comments">
          {post?.comments?.length > 0 ? (
            post.comments.map((comment) => (
              <ViewPostComment key={comment._id} comment={comment} />
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const ViewPostComment = ({ comment }) => (
  <div className="ViewPost-Comment">
    <img
      src={comment?.commentedBy.avatar.url}
      alt={comment?.commentedBy.username}
    />
    <div className="ViewPost-Comment-Text">
      <h6>{comment?.commentedBy.username}</h6>
      <p>{comment?.comment}</p>
    </div>
  </div>
);

const PostBackground = ({ post }) => {
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    if (post?.postedBy?.avatar?.url) {
      getDominantColor(post.postedBy.avatar.url).then(setBgColor);
    }
  }, [post]);

  return post?.image ? (
    <img src={post.image.url} alt={post.image.filename} />
  ) : (
    <div className="PostCard-Background" style={{ background: bgColor }}></div>
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

function getDominantColor(imageSrc) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      let r = 0,
        g = 0,
        b = 0;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }

      const pixelCount = data.length / 4;
      const hexColor = `#${(
        (1 << 24) +
        ((r / pixelCount) << 16) +
        ((g / pixelCount) << 8) +
        b / pixelCount
      )
        .toString(16)
        .slice(1)}`;
      resolve(hexColor);
    };
    img.onerror = reject;
    img.src = imageSrc;
  });
}

export default ViewPost;
