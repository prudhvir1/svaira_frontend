import "./styles/CreatePost.css";
import PostInputCard from "../molecules/PostInputCard";
import OptionInputCard from "../molecules/OptionInputCard";
import { useDispatch } from "react-redux";
import { createModal } from "../../redux/slices/modalSlice";
function CreatePost() {
  const dispatch = useDispatch();
  const handleSubmit = () => {};

  return (
    <div className="CreatePost">
      <div className="CreatePost-Container">
        <form onSubmit={handleSubmit} className="CreatePost-Form">
          <div className="CreatePost-Form-Content">
            <div className="Post-Container">
              <PostInputCard />
            </div>
            <div className="Form-Container-Right">
              <div className="Option-Container">
                <OptionInputCard />
                <OptionInputCard />
                <OptionInputCard />
                <OptionInputCard />
                <OptionInputCard />
              </div>
              <div className="CreatePost-Form-Submit">
                <button type="submit">Post</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="Close-Button">
        <button onClick={() => dispatch(createModal(false))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
export default CreatePost;
