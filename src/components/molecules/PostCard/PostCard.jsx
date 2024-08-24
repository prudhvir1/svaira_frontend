/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "../styles/PostCard.css";
import { TextOptionButton, ImageOptionButton } from "../../atoms";
import { useLocation, useNavigate } from "react-router";
import {
  useAddCommentMutation,
  useRemoveVoteMutation,
  useVotePostMutation,
} from "../../../redux/api/postApiSlice";
import PostBackground from "./PostCardBackground";
import PostCardHeader from "./PostCardHeader";
import PostCardFooter from "./PostCardFooter";
import PostCardContent from "./PostCardContent";

function PostCard({ post: data }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState(data);

  const [votePost, { isSuccess }] = useVotePostMutation();

  const [removeVote] = useRemoveVoteMutation();

  const [addComments] = useAddCommentMutation();

  const handleViewPost = () => {
    navigate(`/post/${post._id}`, { state: { backgroundLocation: location } });
  };

  const handleOptionClick = async (optionId) => {
    const data = { post: post._id, option: optionId };
    const res = await votePost(data).unwrap();
    setPost(res.data);
  };

  const handleRemoveVote = async () => {
    const res = await removeVote({ post: post._id }).unwrap();
    setPost(res.data);
  };

  const handleAddComment = async (comment) => {
    const res = await addComments({ post: post._id, comment }).unwrap();
    setPost(res.data);
  };

  return (
    <article className="PostCard">
      <PostBackground post={post} />
      <div className="PostCard-Container">
        <div className="PostCard-Header">
          <PostCardHeader postedBy={post.postedBy} />
        </div>
        <div className="PostCard-Content">
          <PostCardContent
            post={post}
            viewPost={handleViewPost}
            onOptionClick={handleOptionClick}
          />
          {post.hasVoted && (
            <PostCardResponses
              responses={post.counts}
              onClick={handleRemoveVote}
            />
          )}
        </div>
        <div className="PostCard-Footer">
          <PostCardFooter
            viewPost={handleViewPost}
            onClick={handleAddComment}
          />
        </div>
      </div>
    </article>
  );
}

function PostCardResponses({ responses, onClick }) {
  return (
    <div className="PostCard-Responses">
      <div className="PostCard-Responses-Count">
        <p>
          {responses?.votes} {responses?.votes > 1 ? "responses" : "response"}
        </p>
      </div>
      <div className="PostCard-Responses-RemoveBtn">
        <button onClick={onClick}>remove</button>
      </div>
    </div>
  );
}

export default PostCard;
