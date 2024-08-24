import { TextOptionButton } from "../../atoms";
import OptionImageSlider from "../OptionImageSlider";

/* eslint-disable react/prop-types */
function PostCardContentOptions({ options, onClick, hasImage, hasVoted }) {
  return (
    <div className="PostCard-Content-Options">
      {hasImage ? (
        <OptionImageSlider
          options={options}
          onClick={onClick}
          hasVoted={hasVoted}
        />
      ) : (
        <div
          className={`PostCard-Content-Options-Text ${hasVoted && "disable"}`}
        >
          {options.map((option) => (
            <TextOptionButton
              key={option.text}
              option={option}
              hasVoted={hasVoted}
              onClick={onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default PostCardContentOptions;
