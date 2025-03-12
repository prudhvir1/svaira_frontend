import "./styles/MobileCreate.css";
import PostInputCard from "../molecules/PostInputCard";
import OptionInputCard from "../molecules/OptionInputCard";
import { useDispatch } from "react-redux";
import { createModal } from "../../redux/slices/modalSlice";
import { useState } from "react";
import { useAddPostMutation } from "../../redux/api/postApiSlice";
import { AddOptionButton, ModalCloseButton } from "../atoms";

function MobileCreatePost() {
  const dispatch = useDispatch();

  const [addPost, { isError, isLoading, isSuccess }] = useAddPostMutation();

  const [post, setPost] = useState({ text: "", image: null });
  const [options, setOptions] = useState([
    { text: "", image: null, url: null, isError: false },
    { text: "", image: null, url: null, isError: false },
  ]);
  const [isPostError, setIsPostError] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddOption = () => {
    setOptions([
      ...options,
      { text: "", image: null, url: null, isError: false },
    ]);
  };

  const handleRemoveOption = (id) => {
    const updatedOptions = options.filter((option, index) => index !== id);
    setOptions(updatedOptions);
  };

  const handleTags = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      validateData();
      if (isValidForm) {
        const formData = new FormData();
        formData.append("post", post.image);
        formData.append("postText", post.text);

        options.map((option, index) => {
          formData.append(`option${index + 1}Text`, option.text);
          formData.append(`option${index + 1}`, option.image);
        });

        const response = await addPost(formData).unwrap();
        if (response.statusCode === 200) dispatch(createModal(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validateData = () => {
    let textCount = 0;
    let imageCount = 0;
    options.forEach((option) => {
      if (option.text) {
        textCount++;
      }
      if (option.image?.name) {
        imageCount++;
      }
    });

    if (imageCount !== 0 && textCount !== imageCount) {
      setErrorMessage("Add/Remove images in all options.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } else if (textCount < 2) {
      setErrorMessage("Min 2 options required.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } else {
      let errorOption = 0;
      options.forEach((option) => {
        if (option.isError) errorOption++;
      });
      console.log(errorOption);

      if (!errorOption && !isPostError) {
        setErrorMessage("");
        setIsValidForm(true);
      } else {
        setIsValidForm(false);
      }
    }
  };
  return (
    <div className="MobileCreatePost">
      <div className="MobileCreatePost-Container">
        <div className="MobileCreatePost-Close-Button">
          <h3>ADD POST</h3>
          <ModalCloseButton onClick={() => dispatch(createModal(false))} />
        </div>
        <div className="MobileCreatePost-Form">
          <div className="Form-Container">
            {/* Post Container Block */}

            <div className="Mobile-Post-Container">
              <PostInputCard
                post={post}
                isPostError={isPostError}
                setIsPostError={setIsPostError}
              />
            </div>

            {/* Option Container Block */}

            <div className="Mobile-Option-Container">
              {options.map((_, index) => (
                <OptionInputCard
                  key={index}
                  id={index}
                  options={options}
                  removeOptionId={handleRemoveOption}
                  isValid={validateData}
                />
              ))}

              {options.length < 4 && (
                <AddOptionButton onClick={handleAddOption} />
              )}
            </div>

            {/* Tags Container Block */}

            <div className="Tags-Container">
              <textarea
                name="tags"
                id=""
                onChange={handleTags}
                placeholder="Add Tags"
              ></textarea>
            </div>

            {/* Error Message Block */}

            {errorMessage && <p>{errorMessage}</p>}

            {/* Submit Button Block */}

            <div className="Form-Buttons">
              <div className="Form-Submit">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isValidForm}
                >
                  Post
                </button>
              </div>
            </div>

            {/* Form-Container End*/}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MobileCreatePost;
