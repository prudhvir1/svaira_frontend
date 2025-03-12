import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { postMenuModal } from "../../../redux/slices/modalSlice";

/* eslint-disable react/prop-types */
function PostCardHeader({ postedBy, postId, isProfilePost }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="PostCard-Header">
      <div className="PostCard-Header-Main">
        <div className="PostCard-Header-Avatar">
          <img src={postedBy.avatar.url} alt={postedBy.avatar.filename} />
        </div>
        <div
          className="PostCard-Header-Username"
          onClick={() => navigate(`/${postedBy.username}`)}
        >
          <h4>{postedBy.fullname}</h4>
          <p>/{postedBy.username}</p>
        </div>
      </div>
      {isProfilePost && (
        <div className="PostCard-Header-MenuIcon">
          <button
            onClick={() => dispatch(postMenuModal({ value: true, postId }))}
          >
            <MenuIcon />
          </button>
        </div>
      )}
    </div>
  );
}
export default PostCardHeader;

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M112 60a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 52a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16"
      ></path>
    </svg>
  );
}
