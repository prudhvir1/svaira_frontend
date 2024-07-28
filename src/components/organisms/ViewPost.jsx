/* eslint-disable react/prop-types */
import "./styles/ViewPost.css";
import { useDispatch, useSelector } from "react-redux";
import { ModalCloseButton } from "../atoms";
import { getPostData, viewPostModal } from "../../redux/slices/modalSlice";
function ViewPost() {
  const dispatch = useDispatch();
  const { data } = useSelector(getPostData);
  return (
    <div className="ViewPost">
      <div className="ViewPost-Container">
        <div className="ViewPost-Content">
          <ViewPostLeft post={data} />
          <ViewPostRight post={data} />
        </div>
        <div className="Close-Button">
          <ModalCloseButton onClick={() => dispatch(viewPostModal(false))} />
        </div>
      </div>
    </div>
  );
}

function ViewPostLeft({ post }) {
  return (
    <div className="ViewPost-Left">
      <div className="ViewPost-Left-Container">{post.text}</div>
    </div>
  );
}

function ViewPostRight({ post }) {
  return (
    <div className="ViewPost-Right">
      <div className="ViewPost-Right-Container">{post.postedBy.username}</div>
    </div>
  );
}
export default ViewPost;
