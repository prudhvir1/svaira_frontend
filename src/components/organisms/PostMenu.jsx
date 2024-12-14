import { useDispatch, useSelector } from "react-redux";
import { getPostData, postMenuModal } from "../../redux/slices/modalSlice";
import "./styles/PostMenu.css";
import { useRemovePostMutation } from "../../redux/api/postApiSlice";
import { eventEmitter } from "../utils/eventEmitter";

function PostMenu() {
  const dispatch = useDispatch();
  const [removePost, { isLoading }] = useRemovePostMutation();
  const { data } = useSelector(getPostData);

  const handlePostDelete = async () => {
    const res = await removePost(data).unwrap();
    if (res.success) dispatch(postMenuModal(false));
    eventEmitter.emit("postDeleted");
    console.log(res);
  };

  return (
    <div className="PostMenu">
      <ul>
        <li onClick={handlePostDelete}>
          Delete {isLoading && <span className="loader"></span>}
        </li>
        <li>Edit</li>
        <li>Copy link</li>
        <li onClick={() => dispatch(postMenuModal(false))}>Cancel</li>
      </ul>
    </div>
  );
}
export default PostMenu;
