/* eslint-disable react/prop-types */
import PostCardContentMain from "./PostCardContentMain";
import PostCardContentOptions from "./PostCardContentOptions";

function PostCardContent({ post, viewPost, onOptionClick }) {
  return (
    <>
      <PostCardContentMain
        imageObj={post?.image}
        text={post.text}
        viewPost={viewPost}
      />
      <PostCardContentOptions
        options={post.options}
        hasImage={post.hasImage}
        hasVoted={post.hasVoted}
        onClick={onOptionClick}
      />
    </>
  );
}

export default PostCardContent;
