/* eslint-disable react/prop-types */
import "./styles/ProfileAvatar.css";
function ProfileAvatar({ avatar }) {
  return (
    <div className="ProfileAvatar">
      <img src={avatar?.url} alt={avatar?.filename} />
    </div>
  );
}

export default ProfileAvatar;
