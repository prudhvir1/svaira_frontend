import { useNavigate } from "react-router";

/* eslint-disable react/prop-types */
function PostCardHeader({ postedBy }) {
  const navigate = useNavigate();

  return (
    <>
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
      <div className="PostCard-Header-MenuIcon"></div>
    </>
  );
}
export default PostCardHeader;
