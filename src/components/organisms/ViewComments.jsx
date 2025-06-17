/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./styles/ViewComments.css";
import { useSelector } from "react-redux";
import { getProfile } from "../../redux/slices/profileSlice";
import {
  useAddCommentMutation,
  useGetPostByIdMutation,
} from "../../redux/api/postApiSlice";

function ViewComments() {
  const { data: postId } = useSelector((state) => state.modal);
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const { profile } = useSelector(getProfile);

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

  const handleAddComment = async () => {
    if (!comment.trim()) return;

    try {
      const res = await addComment({ post: post._id, comment }).unwrap();
      setPost(res.data);
      setComment("");
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong.</p>}
      {
        <div className="ViewPost-Right">
          <div className="ViewPost-Right-Container">
            <div className="ViewPost-Right-Comment-Input">
              <img src={profile.avatar.url} alt={profile.username} />
              <textarea
                placeholder="Any thoughts..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              {comment && (
                <button className="SendButton" onClick={handleAddComment}>
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
      }
    </>
  );
}
export default ViewComments;

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
