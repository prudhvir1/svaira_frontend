/* eslint-disable react/prop-types */
function PostCardContentMain({ imageObj, text, viewPost }) {
  return (
    <div className="PostCard-Content-Main">
      {imageObj && (
        <div className="PostCard-Content-Main-Image" onClick={viewPost}>
          <img src={imageObj.url} alt={imageObj.filename} />
        </div>
      )}
      <div className="PostCard-Content-Main-Text" onClick={viewPost}>
        <p>{text}</p>
      </div>
    </div>
  );
}
export default PostCardContentMain;
